const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// create connection to Mongo 
const connectToDatabase = require('./services/database');
connectToDatabase();

// configure routes on app
require('./services/router')(app);

const port = process.env.PORT || 3000;

app.use(bodyParser.json({ type: '*/*' }));

app.listen(3000, function() {
  console.log(`Listening on port: ${port}`)
});