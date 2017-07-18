'use strict';

var merge = require('merge');

function Node(value) {
	this.data = {};
	this.children = {};
};

Node.prototype.insert = function(word, data, index, hyper_caching) {
	if (hyper_caching && index > 0) this.data[data] = true;

	if (index < word.length) {
		var next_character = word[index];
		if (!this.children[next_character]) this.children[next_character] = new Node(next_character);
		this.children[next_character].insert(word, data, index + 1);
	}
	else this.data[data] = true;
};

Node.prototype.collect = function(hyper_caching) {
	if (hyper_caching) return this.data;

	var results = {};
	for (var result in this.data) results[result] = true;
	for (var child in this.children) {
		var sub_results = this.children[child].collect();
		for (var result in sub_results) results[result] = true;
	}
	return results;
};

Node.prototype.search = function(keyword, index, hyper_caching) {
	if (index == keyword.length) return Object.keys(this.collect());
	if (this.children[keyword[index]]) return this.children[keyword[index]].search(keyword, index + 1);
	return [];
};

function Trie(hyper_caching) {
	this.root = new Node('');
	this.hyper_caching = hyper_caching;
};

Trie.prototype.insert = function(word, data) {
	if (word) {
		this.root.insert(word, data, 0, this.hyper_caching);
		for (var position = 1; position < word.length; position++) 
			this.root.insert(word, data, position, this.hyper_caching);
	}
};

Trie.prototype.search = function(keyword) {
	return this.root.search(keyword, 0, this.hyper_caching);
};

function Searchico (haystack, options) {
	var default_options = {
		case_sensitive: false,
		hyper_indexing: true,
		hyper_caching: false
	};

	this.data_list = haystack;
	this.config = merge(default_options, options);
	// Object.prototype.toString.call(options.keys) === '[object Array]'

	if (this.config.hyper_indexing) {
		this.trie = new Trie(true);
		for (var element in haystack) {
			for (var prop in haystack[element]) 
				this.trie.insert(haystack[element][prop], element);
		}
	}
}

Searchico.prototype.find = function (keyword) {
	var results = [];
	if (this.hyper_indexing) {
		var indices = this.trie.search(keyword);
		for (var index in indices) {
			results.push(this.data_list[indices[index]]);
		}
	}
	else {
		this.data_list.forEach(function(obj, index) {
			for (var prop in obj) {
				var val = obj[prop].toString();
				if (val.indexOf(keyword) != -1) results.push(obj);
			}
		});
	}
	return results;
}

function init (haystack, options) {
	var s = new Searchico(haystack, options);
	return s;
}

module.exports = init;