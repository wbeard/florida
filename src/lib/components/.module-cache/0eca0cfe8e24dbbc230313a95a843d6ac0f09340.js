var React = require('react');

var Header = require('./Header.react');

var App = React.createClass({
  displayName: 'App',
  render: function() {
    return(
      React.createElement("div", null, 
        React.createElement(Header, {clickHandler: this.props.headerClick, text: this.props.headerText})
      )
    );
  }
});

module.exports = App;
