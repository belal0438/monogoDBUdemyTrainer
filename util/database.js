const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://mohdbelal5266:VcPdOqqLUgQ8bxZp@cluster0.nz9atgd.mongodb.net/shop?retryWrites=true&w=majority'
  )
    .then(client => {
      console.log('Connected!');
      _db = client.db()
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () =>{
  if(_db){
    return _db
  }
  throw 'No databse found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;