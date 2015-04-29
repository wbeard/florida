module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    'babel': {
      options: {
        sourceMap: true
      },
      components: {
        files: {
          './dist/components/Header.jsx': './src/components/Header.jsx'
        }
      },
      server: {
        files: {
          './dist/server/index.js': './src/server/index.js'
        }
      }
    },
    'browserify': {
      client: {
        external: ['react'],
        files: {
          'dist/client/static/bundle.js': ['src/components/*.jsx', 'src/client/**/*.js']
        },
        options: {
          transform: ['babelify']
        }
      }
    },
    'clean': {
      build: ['dist']
    },
    'copy': {
      templates: {
        cwd: 'src/client/templates',
        expand: true,
        src: ['**/*.html'],
        dest: 'dist/client/templates/'
      }
    },
    'watch': {
      server: {
        files: ['src/**/*.js'],
        tasks: ['build']
      }
    }
  });

  grunt.registerTask('build', ['clean:build', 'copy:templates', 'browserify:client', 'babel:components', 'babel:server'])
  grunt.registerTask('default', ['build', 'watch:server']);

};
