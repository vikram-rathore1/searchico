'use strict';

var chai = require('chai');
var merge = require('merge');
var testData = require('./test_data');
var searchico = require('../');

var collection = testData.collection, queries = testData.queries;

describe('Hyper-Indexing: Enabled, Hyper-Caching: Disabled', function() {

	queries.forEach(function(query) {
		it('Search for keyword "' + query.keyword + '"', function() {
			var config = query.config;
			var search = searchico(collection, config);
			var results = search.find(query.keyword);
			chai.expect(results).to.have.same.deep.members(query.expected_result_objects);
		});
	});

});

describe('Hyper-Indexing: Enabled, Hyper-Caching: Enabled', function() {

	queries.forEach(function(query) {
		it('Search for keyword "' + query.keyword + '"', function() {
			var config = query.config; config.hyper_caching = true;
			var search = searchico(collection, config);
			var results = search.find(query.keyword);
			chai.expect(results).to.have.same.deep.members(query.expected_result_objects);
		});
	});

});

describe('Hyper-Indexing: Disabled', function() {

	queries.forEach(function(query) {
		it('Search for keyword "' + query.keyword + '"', function() {
			var config = query.config; config.hyper_indexing = false;
			var search = searchico(collection, config);
			var results = search.find(query.keyword);
			chai.expect(results).to.have.same.deep.members(query.expected_result_objects);
		});
	});

});