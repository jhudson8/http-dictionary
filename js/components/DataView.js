var React = require('react');
var Markdown = require('./Markdown');

module.exports = React.createClass({
  render: function() {
    var data = this.props.data;
    return (
      <div>
        <h2 className="ui header">{this.props.header}</h2>
        <h3 className="ui header">
          {this.props.title}
          <br/>
          <small><a href={data.spec_href}>{data.spec_title}</a></small>
        </h3>
        <p>
          <Markdown content={data.description}/>
        </p>
      </div>
    );
  }
});
