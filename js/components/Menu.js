var React = require('react');
var _ = require('underscore');

module.exports = React.createClass({
  render: function() {
    var entries = this.props.entries;
    var children = _.map(entries, function(entry) {
      return (
        <a className="item" href={'#list/' + entry.name} key={entry.name}>
          {entry.headerPlural}
          <div className="ui label">{entry.data.length}</div>
        </a>
      );
    });

    return (
      <div className="ui vertical menu">
        {children}
      </div>
    );
  }
});
