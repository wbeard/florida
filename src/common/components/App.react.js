var React = require('react');

var Header = require('./Header.react');

var App = React.createClass({
  displayName: 'App',
  render: function() {
    return(
      <div>
        <Header clickHandler={this.props.headerClick} text={this.props.headerText} />
      </div>
    );
  }
});

module.exports = App;
