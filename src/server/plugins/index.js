var plugins =  [
  {
    register: require('good'),
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
  },
  {
    register: require('../routes/app')
  }
];

module.exports = plugins;
