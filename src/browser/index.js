var React = require('react');
var App = require('../lib/components/App.react');

var AppFactory = React.createFactory(App);

var renderTarget = document.getElementById('app');

var renderedApp = React.render(
  AppFactory({headerText: 'Will', headerClick: function() { console.log('hi'); }}),
  renderTarget
);
