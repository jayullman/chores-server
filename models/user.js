const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const connection = require('../services/database');

const userSchema = new Schema({
  name: String,
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true }
});

module.exports = connection.model('User', userSchema);