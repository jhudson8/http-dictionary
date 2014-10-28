var React = require('react');
var _ = require('underscore');
var Markdown = require('./Markdown');

module.exports = React.createClass({
  render: function() {
    var data = this.props.data;
    var children = _.map(data.data, function(entry) {
      var title = entry[data.special];
      return (
        <div className="item" key={title}>
          <div className="content">
            <a className="header" href={'#' + entry.searchTerm}>{title}</a>
            <div className="description"><Markdown content={entry.description}/></div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <h2 className="ui header">{data.headerPlural}</h2>
        <div className="ui list">
          {children}
        </div>
      </div>
    );
  }
});
