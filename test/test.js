'use strict';

var chai = require('chai');
var merge = require('merge');
var data = require('./test_data');
var searchico = require('../');

var testData = new data.testData();

for (var dataset in testData) {    
    describe(dataset + ': Hyper-Indexing: Enabled, Hyper-Caching: Disabled', function() {
        var collection = testData[dataset].collection, queries = testData[dataset].queries;
        queries.forEach(function(query) {
            it(query.description, function() {
                var config = query.config;
                var search = searchico(collection, config);
                var results = search.find(query.keyword);
                chai.expect(results).to.have.same.deep.members(query.expected_result_objects);
            });
        });

    });

    describe(dataset + ': Hyper-Indexing: Enabled, Hyper-Caching: Enabled', function() {
        var collection = testData[dataset].collection, queries = testData[dataset].queries;
        queries.forEach(function(query) {
            it(query.description, function() {
                var config = query.config; config.hyper_caching = true;
                var search = searchico(collection, config);
                var results = search.find(query.keyword);
                chai.expect(results).to.have.same.deep.members(query.expected_result_objects);
            });
        });

    });

    describe(dataset + ': Hyper-Indexing: Disabled', function() {
        var collection = testData[dataset].collection, queries = testData[dataset].queries;
        queries.forEach(function(query) {
            it(query.description, function() {
                var config = query.config; config.hyper_indexing = false;
                var search = searchico(collection, config);
                var results = search.find(query.keyword);
                chai.expect(results).to.have.same.deep.members(query.expected_result_objects);
            });
        });

    });
}
