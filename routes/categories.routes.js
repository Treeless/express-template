//Routes used for searching
(function() {
  var Chalk = require('chalk');

  module.exports = function(app) {
    console.log(Chalk.white('==>'), Chalk.magenta('categories.routes'));
    app.get('/categories', function(req, res) {
      res.render('pages/categories.ejs', { "APP_TITLE": app.title, "TITLE": "Categories" });
    });
  }
}());
