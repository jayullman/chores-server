const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const connection = require('../services/database');
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
  name: String,
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true }
});

// hash password before saving to database
userSchema.pre('save', function(next) {
  const user = this;

  bcrypt.genSalt(10, function(err, salt) {
    if (err) { return next(err); }

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) { return next(err); }

      user.password = hash;
      next();
    })
  })
})

module.exports = connection.model('User', userSchema);