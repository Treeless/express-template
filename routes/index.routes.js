//Routes used for searching
(function() {
  var Chalk = require('chalk');

  module.exports = function(app) {
    console.log(Chalk.white('==>'), Chalk.magenta('index.routes'));
    app.get('/', function(req, res) {
      res.render('pages/index.ejs', { "APP_TITLE": app.title, "TITLE": "Home" });
    });
  }
}());
