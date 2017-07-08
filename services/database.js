// Create connection to Mongo
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


  // using createConnection method to avoid deprecation warning
  const connection = mongoose.createConnection('mongodb://localhost/chores');
  connection.on('error', console.error.bind(console, 'db connection error:'));
  connection.once('open', function () {
    console.log('connected to db');
  })

module.exports = connection;