var React = require('react');

var Header = require('./Header.react');

var headerClick = function(name) {
  console.log('Will');
};

var App = React.createClass({
  displayName: 'App',
  render: function() {
    return(
      React.createElement("div", null, 
        React.createElement(Header, {onClick: headerClick, text: this.props.headerText})
      )
    );
  }
});

module.exports = App;
