const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
    return;
  }
  console.log('Connected to MongoDB Server');

  db.collection('Todos').count({ completed: false }).then((count) => {
    console.log('Todos count: ', count);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  db.close();
});
