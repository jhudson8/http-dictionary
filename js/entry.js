// env setup
window.jQuery = require("jquery");
require('./lib/typeahead');
var _ = require('underscore');
var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');

// components
var Menu = require('./components/Menu');
var TypeAhead = require('./components/TypeAhead');

// bind UI
var loader = require('./loader');
var menu = new Menu({entries: loader.entries});
React.renderComponent(menu, document.getElementById('menu'));

var typeAhead = new TypeAhead({index: loader.entries, onSelected: function(data, meta) {
  Backbone.history.navigate(data.searchTerm, {trigger: true, replace: false});
}});
React.renderComponent(typeAhead, document.getElementById('search'));

// router
var Router = require('./router');
new Router();
Backbone.history.start();
