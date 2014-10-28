var converter = new Showdown.converter();
var React = require('react');

module.exports = React.createClass({
  render: function() {
    var rawMarkup = converter.makeHtml(this.props.content);
    return (
      <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
    );
  }
});