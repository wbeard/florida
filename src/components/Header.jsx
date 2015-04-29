var React = require('react');

var Header = React.createClass({
  render() {
    return(
      <h1>{`Hi ${this.props.text}`}</h1>
    );
  }
});

module.exports = Header;
