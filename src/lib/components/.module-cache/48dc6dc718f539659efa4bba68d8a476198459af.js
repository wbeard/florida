var React = require('react');

var Header = React.createClass({
  displayName: 'Header',
  render: function() {
    return(
      React.createElement("h1", null,  'Hi ' + this.props.text)
    );
  }
});

module.exports = Header;
