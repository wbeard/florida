var React = require('react');
var App = require('../../lib/components/App.react');

var AppFactory = React.createFactory(App);

var appRoute = {
  register: function(server, options, next) {
    server.route([
      {
        method: 'GET',
        path: '/app',
        handler: function(request, reply) {
          reply.view('index', {
            app: React.renderToString(AppFactory({headerText: 'Will'}))
          });
        }
      }
    ]);

    next();
  }
};

appRoute.register.attributes = {
  name: 'app-route',
  version: '1.0.0'
};

module.exports = appRoute;
