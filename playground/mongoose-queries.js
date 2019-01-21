const { ObjectID } = require('mongodb');

const mongoose = require('../server/db/mongoose');
const Todo = require('../server/models/todo');
const User = require('../server/models/user');

const id = '5c453df6f5e5f8f23cc3f9ce'

if (!ObjectID.isValid(id)) {
  console.log('id not valid')
}
// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   if (!todo) {
//     return console.log('Id not found');
//   } 
//   console.log('Todo', todo);
// });

// Todo.findById(id).then(todo => {
//   console.log('Todo', todo);
// }).catch(err => console.log(err));

User.findById(id).then(user => {
  if (!user) {
    return console.log('unable to find user');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch(err => console.log(err));