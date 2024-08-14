const mongoose = require('mongoose');
const schema = mongoose.Schema

const userSchema = new schema({
    name: String,
    email: String,
    phone: String,
    age: Number,
    salary: Number,


})
//create collection name users
const user = mongoose.model('users',userSchema);
module.exports = user;