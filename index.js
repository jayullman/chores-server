const express = require('express');
const app = express();

// create connection to Mongo 
const connectToDatabase = require('./services/database');
connectToDatabase();

const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.send('Hello!');
});

app.listen(3000, function() {
  console.log(`Listening on port: ${port}`)
});