var React = require('react');
var Backbone = require('backbone');
var _ = require('underscore');
var loader = require('./loader');
var DataView = require('./components/DataView');
var ListView = require('./components/ListView');

var Router = Backbone.Router.extend({
  routes: {
    ':id': 'showById',
    'list/:type': 'list'
  },

  showById: function(id) {
    var globalIndex = loader.globalIndex;
    var data = globalIndex[id];
    if (data) {
      var header = data.meta.header;
      var title = data.data[data.meta.special];
      var view = new DataView({data: data.data, title: title, header: header});
      showPage(view);
    }
  },

  list: function(type) {
    var type = _.findWhere(loader.entries, {name: type});
    if (type) {
      var listView = new ListView({data: type});
      showPage(listView);
    }
  }
});

function showPage(view) {
  React.renderComponent(view, document.getElementById('page'));
}

module.exports = Router;