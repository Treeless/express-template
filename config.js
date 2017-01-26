(function() {
  module.exports = function(app) {
    //Main title of the application
    app.title = "Whats In that?";

    //Are we in production?
    app.production = (process.env.NODE_ENV === 'production');
  };
}());
