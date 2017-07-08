const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const connection = require('../services/database');

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true, lowercase: true },
  password: String
});

module.exports = connection.model('User', userSchema);