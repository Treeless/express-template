(function() {
  module.exports = function(app) {
    //Main title of the application
    app.title = "Express Template";

    //Are we in production?
    app.production = (process.env.NODE_ENV === 'production');
  };
}());
