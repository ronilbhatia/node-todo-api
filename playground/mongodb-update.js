const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
    return;
  }
  console.log('Connected to MongoDB Server');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5c302a68b0f8017e6b25ba2c')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then(result => {
    console.log(result);
  });

  db.close();
});
