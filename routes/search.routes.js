//Routes used for searching
(function() {
  var Chalk = require('chalk');

  module.exports = function(app) {
    console.log(Chalk.white('==>'), Chalk.magenta('search.routes'));
    app.get('/search', function(req, res) {
      res.render('pages/search.ejs', { "APP_TITLE": app.title, "TITLE": "Search" });
    });

    app.post('/search', function(req, res) {

    });
  }
}());
