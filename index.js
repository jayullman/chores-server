const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json({ type: '*/*' }));

// create connection to Mongo 
require('./services/database');


// configure routes on app
require('./router')(app);

const port = process.env.PORT || 3000;


app.listen(3000, function() {
  console.log(`Listening on port: ${port}`)
});