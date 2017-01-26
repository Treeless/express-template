(function() {
  var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    request = require('request'),
    Chalk = require('Chalk');

  //Allow loading of js, css files
  app.use(express.static("/public"));

  //JSON middleman
  app.use(bodyParser.json());

  //Set the view engine
  app.set('view engine', 'ejs');

  //Config
  require('./config.js')(app);

  //Routing
  require('./routes')(app);

  var db = "WHATSINTHAT";
  var mongoConnectionURL = "127.0.0.1:27017/" + db; //'mongodb://user:password@localhost:27017/db'
  mongoose.Promise = global.Promise;
  mongoose.connect(mongoConnectionURL);
  mongoose.connection.on('connected', function() {
    console.log(Chalk.yellow('Mongoose'), 'connected to DB:', Chalk.green(db));

    //Wait for connection to mongoose
    app.listen(80, function() {
      console.log(Chalk.yellow('App Started'), 'Listening on', Chalk.red('Port:'), Chalk.blue('80'));
    });
  });
}());
