const authenticate = require('./controllers/authentication');

module.exports = function(app) {
  app.get('/', function (req, res) {
    res.send('hello!');
  });

  app.post('/signup', authenticate.signup);
}