const { ObjectID } = require('mongodb');

const mongoose = require('../server/db/mongoose');
const Todo = require('../server/models/todo');
const User = require('../server/models/user');

// Remove all Todos
// Todo.remove({}).then(result => {
//   console.log(result);
// });

// Todo.findOneAndRemove()
Todo.findByIdAndRemove('5c4555791ae76c4593337d07').then(todo => {
  console.log(todo);
});