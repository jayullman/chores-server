// Create connection to Mongo
const mongoose = require('mongoose');

module.exports = function() {

  // using createConnection method to avoid deprecation warning
  const conn = mongoose.createConnection('mongodb://localhost/chores');
  conn.on('error', console.error.bind(console, 'db connection error:'));
  conn.once('open', function () {
    console.log('connected to db');
  })
}