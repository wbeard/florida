var React = require('react');

var Header = require('./Header.jsx');

var headerClick = require('./events/headerClick');

var App = React.createClass({
  render() {
    return(
      <div>
        <Header onClick={headerClick} text={this.props.headerText} />
      </div>
    );
  }
});
