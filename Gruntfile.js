module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    shell: {
      jsx: {
        command: 'npm run jsx'
      },
      bundle: {
        command: 'npm run bundle'
      }
    },
    'watch': {
      server: {
        files: ['src/**/*.react.js'],
        tasks: ['build']
      }
    }
  });

  grunt.registerTask('build', ['shell'])
  grunt.registerTask('default', ['build', 'watch:server']);

};
