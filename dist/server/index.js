'use strict';

var Hapi = require('hapi');
var Good = require('good');
var Path = require('path');

var server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: Path.join(__dirname, '../client/static')
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
    jsx: require('hapi-react-views'),
    html: {
      module: require('handlebars'),
      relativeTo: Path.join(__dirname, '../client/templates')
    }
  },
  defaultExtension: 'html',
  relativeTo: Path.join(__dirname, '../components')
});

server.route({
  method: 'GET',
  path: '/app',
  handler: function handler(request, reply) {
    reply.view('index');
  }
});

server.route({
  method: 'GET',
  path: '/bundle.js',
  handler: {
    file: 'bundle.js'
  }
});

server.register({
  register: Good,
  options: {
    reporters: [{
      reporter: require('good-console'),
      events: {
        response: '*',
        log: '*'
      }
    }]
  }
}, function (err) {
  if (err) {
    throw err;
  }

  server.start(function () {
    console.log('Server running at:', server.info.uri);
  });
});
//# sourceMappingURL=index.js.map