var Hapi = require('hapi');
var Good = require('good');
var Path = require('path');
var React = require('react');
var App = require('../lib/components/App.react');

var AppFactory = React.createFactory(App);

var server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: Path.join(__dirname, '../public')
      }
    }
  }
});

server.connection({
  host: 'localhost',
  port: 8000
});

server.views({
  engines: {
    html: {
      module: require('handlebars'),
      relativeTo: Path.join(__dirname, './templates')
    }
  }
});

server.route({
  method: 'GET',
  path: '/app',
  handler: function(request, reply) {
    reply.view('index', {
      app: React.renderToString(AppFactory({headerText: 'Will'}))
    });
  }
});

server.route({
  method: 'GET',
  path: '/js/bundle.js',
  handler: {
    file: 'js/bundle.js'
  }
})

server.register({
  register: Good,
  options: {
    reporters: [
      {
        reporter: require('good-console'),
        events: {
          response: '*',
          log: '*'
        }
      }
    ]
  }
}, function(err) {
  if(err) {
    throw err;
  }

  server.start(function() {
    console.log('Server running at:', server.info.uri);
  });
});
