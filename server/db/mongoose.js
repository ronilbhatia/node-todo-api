/// import mongoose
const mongoose = require('mongoose');

// configure Mongoose and connect to db
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = mongoose;