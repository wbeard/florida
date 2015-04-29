var StaticFilePlugin = {
  register: function(server, options, next) {
    next();
  }
};

StaticFilePlugin.attributes = {
  name: ''
}
