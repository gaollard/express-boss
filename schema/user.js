const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = {
  mobile: String,
  pwd: String,
  avatar: String,
  type: String,
  nickname: String
};
module.exports = mongoose.model('user', new mongoose.Schema(userSchema));