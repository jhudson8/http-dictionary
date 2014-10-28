var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');
var _str = require('underscore.string');
var _ = require('underscore');

module.exports = React.createClass({

  render: function() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="ui icon input">
          <input type="text" placeholder="Search..." ref="input"/>
        </div>
        <input type="submit" style={{display: 'none'}}/>
      </form>
    );
  },

  componentDidMount: function() {
    var self = this;
    var sources = _.map(this.props.index, function(index) {
      return {
        name: index.name,
        source: function(query, cb) {
          return self.source(query, cb, index);
        }
      };
    });

    var args = [{ highlight: true }];
    Array.prototype.push.apply(args, sources);
    this.cmd.apply(this, args);
    $(this.getDOMNode()).find('.tt-hint').removeAttr('data-reactid');
    $(this.getDOMNode()).find('input').bind('typeahead:selected', this.onSelected).focus();
  },

  componentWillUnmount: function() {
    this.cmd('destroy');
  },

  val: function(val) {
    this.cmd('val', val);
  },

  cmd: function() {
    var $el = $(this.getDOMNode()).find('input');
    var typeahead = $el.typeahead;
    typeahead.apply($el, arguments);
  },

  source: function(query, cb, index) {
    query = query.toLowerCase();
    var values = [];
    _.each(index.data, function(data) {
      var test = data.searchTerm;
      if (_str.startsWith(test, query)) {
        values.push({
          value: data[index.special],
          data: data,
          index: index
        });
      }
    });
    cb(values);
  },

  onSelected: function(obj, datum, name) {
    this.props.onSelected(datum.data, datum.index, this);
    this.val('');
  },

  onSubmit: function(event) {
    event.preventDefault();
    Backbone.history.navigate(this.refs['input'].getDOMNode().value, {trigger: true, replace: false});
    this.cmd('close');
  }
});
