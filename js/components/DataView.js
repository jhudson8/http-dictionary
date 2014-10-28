var React = require('react');

module.exports = React.createClass({
  render: function() {
    var data = this.props.data;
    return (
      <div>
        <h1>{this.props.header}</h1>
        <h2>{this.props.title} <small><a href={data.spec_href}>{data.spec_title}</a></small></h2>
        <p>
          {data.description}
        </p>
      </div>
    );
  }
});
