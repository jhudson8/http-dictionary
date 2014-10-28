var _ = require('underscore');

// retrieve http data
var statusCodeData = require('../node_modules/know-your-http-well/json/status-codes.json');
statusCodeData = index(statusCodeData, 'HTTP Status Code', 'code');

var headersData = require('../node_modules/know-your-http-well/json/headers.json');
headersData = index(headersData, 'HTTP Header', 'header');

var methodsData = require('../node_modules/know-your-http-well/json/methods.json');
methodsData = index(methodsData, 'HTTP Method', 'method');

var entries = [statusCodeData, headersData, methodsData];

var globalIndex = {};
_.each(entries, function(data) {
  _.each(data.data, function(item) {
    globalIndex[item.searchTerm] = {meta: data, data: item};
  });
});

module.exports = {
  entries: entries,
  globalIndex: globalIndex
};

function index(data, header, identifier) {
  var rtn = {
    header: header,
    headerPlural: header + 's',
    name: header.replace(/ /gi, '-'),
    special: identifier
  };
  _.each(data, function(item) {
    item.searchTerm = item[identifier].toLowerCase();
  });
  rtn.data = data;
  return rtn;
}