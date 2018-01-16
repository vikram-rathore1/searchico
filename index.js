'use strict';

var merge = require('merge');

function Node () {
    this.data = {};
    this.children = {};
}

Node.prototype.insert = function (word, data, index, hyperCaching) {
    if (hyperCaching && !this.is_root)
        this.data[data] = true;

    if (index < word.length) {
        var nextCharacter = word[index];
        if (!this.children[nextCharacter])
            this.children[nextCharacter] = new Node();
        this.children[nextCharacter].insert(word, data, index + 1, hyperCaching);
    }
    else
        this.data[data] = true;
};

Node.prototype.collect = function (hyperCaching) {
    if (hyperCaching)
        return this.data;

    var results = {};
    for (var result in this.data)
        results[result] = true;

    for (var child in this.children) {
        var subResults = this.children[child].collect();
        for (var subResult in subResults)
            results[subResult] = true;
    }
    return results;
};

Node.prototype.search = function (keyword, index, hyperCaching) {
    if (index == keyword.length)
        return this.collect(hyperCaching);

    if (this.children[keyword[index]])
        return this.children[keyword[index]].search(keyword, index + 1, hyperCaching);

    return [];
};

function Trie (hyperCaching) {
    this.root = new Node();
    this.hyperCaching = hyperCaching;
    this.root.is_root = true;
}

Trie.prototype.insert = function (word, data) {
    if (word)
        this.root.insert(word, data, 0, this.hyperCaching);
};

Trie.prototype.search = function (keyword) {
    return (keyword && keyword.length) ? this.root.search(keyword, 0, this.hyperCaching) : [];
};

function isArray (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}

function sanitize (str, config) {
    if (typeof(str) != 'string' && typeof(str) != 'number' && typeof(str) != 'boolean')
        return '';

    str = str.toString().trim();
    var caseSensitive = config.case_sensitive,
        replacements = config.replacements;

    if (!caseSensitive)
        str = str.toLowerCase();
    if (replacements && typeof(replacements) === 'object') {
        var sanitized_str = '';
        for (var position = 0; position < str.length; position++) {
            if (replacements[str[position]])
                sanitized_str += replacements[str[position]];
            else
                sanitized_str += str[position];
        }
        return sanitized_str;
    }
    return str;
}

function pluck (obj, key, level) {
    var plucked_object = [];
    if (typeof(key) === 'string' && key.length) {
        var sub_keys = key.split('.');
        if (level == sub_keys.length)
            return (obj !== undefined) ? obj : [];

        if (isArray(obj)) {
            obj.forEach(function(element) {
                plucked_object = plucked_object.concat(pluck(element, key, level));
            })
        }
        else {
            return (obj !== undefined) ? pluck(obj[sub_keys[level]], key, level + 1) : [];
        }
    }
    return plucked_object;
}

function dig (obj, config, level) {
    var results = [];
    config = config || {};
    if ((typeof(obj) === 'object' && (config.deep === true || level === 0)) || isArray(obj)) {
        for (var prop in obj)
            results = results.concat(dig(obj[prop], config, level + 1));
    }
    else {
        var val = sanitize(obj, config);
        if (val)
            results.push(val);
    }
    return results;
}

function flatten (list, config) {
    var sanitized_list = [];
    list.forEach(function(element, index) {
        if(isArray(config.keys) && config.keys.length) {
            var sanitized_object = [];
            config.keys.forEach(function(key) {
                var target_obj = pluck(element, key, 0);
                if (target_obj)
                    sanitized_object = sanitized_object.concat(dig(target_obj, config, 0));
            });
            sanitized_list.push(sanitized_object);
        }
        else
            sanitized_list.push(dig(element, config, 0));
    });
    return sanitized_list;
}

function Searchico (haystack, options) {
    var umlauts = {
        'ä': 'a', 'à': 'a', 'á': 'a', 'â': 'a', 'æ': 'a', 'ã': 'a', 'å': 'a', 'ā': 'a',
        'ç': 'c', 'ć': 'c', 'č': 'c',
        'đ' : 'd', 'ð': 'd',
        'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e', 'ē': 'e', 'ė': 'e', 'ę': 'e',
        'î' : 'i', 'ï' : 'i', 'í' : 'i', 'ī' : 'i', 'į' : 'i', 'ì' : 'i',
        'ł': 'l',
        'ñ' : 'n', 'ń' : 'n', 'ň' : 'n',
        'ô' : 'o', 'ö' : 'o', 'ò' : 'o', 'ó' : 'o', 'œ' : 'o', 'ø' : 'o', 'ō' : 'o', 'õ' : 'o',
        'ř': 'r',
        'ś': 's', 'š': 's',
        'ß': 'ss',
        'ť': 't',
        'û' : 'u', 'ü' : 'u', 'ù' : 'u', 'ú' : 'u', 'ū' : 'u', 'ů' : 'u',
        'ÿ': 'y', 'ý': 'y',
        'ž' : 'z', 'ż' : 'z', 'Ż' : 'z', 'ź' : 'z',
    };
    var defaults = {
        case_sensitive: false,
        hyper_indexing: true,
        hyper_caching: false,
        replace_umlauts: true,
        deep: true,
        keys: []
    };

    this.config = merge(defaults, options);
    this.config.replacements = (this.config.replace_umlauts === true) ? umlauts : {};

    this.data_list = haystack;
    this.sanitized_data_list = flatten(haystack, this.config);

    if (this.config.hyper_indexing) {
        this.trie = new Trie(this.config.hyper_caching);
        for (var row in this.sanitized_data_list) {
            for (var column in this.sanitized_data_list[row]) {
                var str = this.sanitized_data_list[row][column];
                for (var position = 0; position < str.length; position++)
                    this.trie.insert(str.substring(position), row);
            }
        }
        this.sanitized_data_list = undefined;
    }

}

Searchico.prototype.find = function (keyword) {
    keyword = sanitize(keyword, this.config);
    var results = [];
    if (this.config.hyper_indexing) {
        var resultIndices = this.trie.search(keyword);
        for (var i in resultIndices)
            results.push(this.data_list[i]);
    }
    else {
        var len = this.sanitized_data_list.length;
        for (var index = 0; index < len; ++index) {
            var found = false, obj = this.sanitized_data_list[index];
            obj.every(function(str) {
                found = (str.indexOf(keyword) != -1);
                return !found;
            });
            if (found)
                results.push(this.data_list[index]);
        }
    }
    return results;
};

Searchico.prototype.data = function () {
    return this.data_list;
}

function init (haystack, options) {
    var instance = new Searchico(haystack, options);
    return instance;
}

module.exports = init;