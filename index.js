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

function sanitize (str, caseSensitive, replacements) {
    if (typeof(str) != 'string' && typeof(str) != 'number' && typeof(str) != 'boolean')
        return '';

    str = str.toString().trim();
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

function Searchico (haystack, options) {
    var umlauts = {
        'ä': 'a', 'à': 'a', 'á': 'a', 'â': 'a', 'ä': 'a', 'æ': 'a', 'ã': 'a', 'å': 'a', 'ā': 'a',
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
        replacements: {}
    };

    this.data_list = haystack;
    this.sanitized_data_list = [];
    this.config = merge(defaults, options);

    if (this.config.replace_umlauts === true) {
        if (options && typeof(options.replacements) === 'object')
            this.config.replacements = merge(umlauts, options.replacements);
        else
            this.config.replacements = umlauts;
    }
    else
        this.config.replacements = options.replacements;

    if (this.config.hyper_indexing)
        this.trie = new Trie(this.config.hyper_caching);

    for (var element in haystack) {
        var sanitized_data = [], val;
        if (typeof(haystack[element]) === 'object') {
            for (var prop in haystack[element]) {
                val = sanitize(haystack[element][prop], this.config.case_sensitive, this.config.replacements);
                if (val) {
                    sanitized_data.push(val);
                    if (this.config.hyper_indexing) {
                        for (var position = 0; position < val.length; position++)
                            this.trie.insert(val.substr(position), element);
                    }
                }
            }
        }
        else {
            val = sanitize(haystack[element], this.config.case_sensitive, this.config.replacements);
            if (val) {
                sanitized_data.push(val);
                if (this.config.hyper_indexing) {
                    for (var position = 0; position < val.length; position++)
                        this.trie.insert(val.substr(position), element);
                }
            }
        }
        this.sanitized_data_list.push(sanitized_data);
    }
}

Searchico.prototype.find = function (keyword) {
    keyword = sanitize(keyword, this.config.case_sensitive, this.config.replacements);
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

function init (haystack, options) {
    var instance = new Searchico(haystack, options);
    return instance;
}

module.exports = init;