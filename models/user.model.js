var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    avatar: String,
    phone: String
});
// Schema là khai báo field có trong obj

var User = mongoose.model('User', userSchema, 'Users');

module.exports = User;