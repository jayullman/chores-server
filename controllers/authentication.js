const User = require('../models/user');

exports.signup = function(req, res, next) {
  res.send('signup request received');

  // if user with email exists, return error

  // if a user with email does not exist, create user in db
  const user = new User({
    email: 'jay@gmail.com'
  });

// TODO: Send existing email error to client

  // email validation using unique: true in schema
  // from: https://stackoverflow.com/questions/30593882/how-to-catch-the-error-when-inserting-a-mongodb-document-which-violates-an-uniqu
  user.save(function(err, user) {
    if (err) {
      // if email already exists
      if (err.name === 'MongoError' && err.code === 11000) {
        console.log('email already exists')
      }
    } else {
      console.log('user created')
    }
    
  })
  

  // respond to request
  // console.log('new user saved');

}