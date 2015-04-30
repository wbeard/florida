var React = require('react');

var Header = React.createClass({
  displayName: 'Header',
  render: function() {
    return(
      React.createElement("h1", {onClick: this.props.clickHandler},  'Hi ' + this.props.text)
    );
  }
});

module.exports = Header;
