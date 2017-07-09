const User = require('../models/user');


exports.signup = function(req, res, next) {
  // if user with email exists, return error

  // if a user with email does not exist, create user in db
  const user = new User({
    email: req.body.email,
    name: req.body.name
  });

// TODO: Send existing email error to client

  // email validation using unique: true in schema
  // from: https://stackoverflow.com/questions/30593882/how-to-catch-the-error-when-inserting-a-mongodb-document-which-violates-an-uniqu
  user.save(function(err, user) {
    if (err) {
      // if email already exists
      if (err.name === 'MongoError' && err.code === 11000) {
        console.log('email already exists')
        return res.status(422).send({ error: 'Email is in use' });
      }
    } else {
      return res.status(200).send({ message: 'User has been created', user: user });
    }
  });
}