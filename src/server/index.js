var Hapi = require('hapi');
var Path = require('path');
var plugins = require('./plugins');

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
  host: '0.0.0.0',
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
  path: '/js/bundle.js',
  handler: {
    file: 'js/bundle.js'
  }
});

server.register(plugins, function(err) {
  if(err) {
    throw err;
  }

  server.start(function() {
    console.log('Server running at:', server.info.uri);
  });
});
