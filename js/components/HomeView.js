var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>HTTP Dictionary</h1>
        <p>
          Select a menu item on the left or type in the search box at the top to find http status codes, headers and methods.
        </p>
        <i className="massive circular book icon"></i>
      </div>
    );
  }
});
