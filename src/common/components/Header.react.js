var React = require('react');

var Header = React.createClass({
  displayName: 'Header',
  render: function() {
    return(
      <h1 onClick={this.props.clickHandler}>{ 'Hi ' + this.props.text }</h1>
    );
  }
});

module.exports = Header;
