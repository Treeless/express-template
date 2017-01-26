var foo = 1;
(function() {
  var bar = 0;
  var Chalk = require('chalk'),
    fs = require('fs');

  module.exports = function(app) {
    console.log(Chalk.yellow('Adding routing to app: '));
    fs.readdirSync(__dirname).forEach(function(routeFile) {
      if (routeFile != "index.js") {
        require(__dirname + "/" + routeFile)(app);
      }
    });
  };
}());