const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

let _ 


const mongoConnect = (callback) => {
  
  MongoClient.connect('mongodb+srv://bockchoy:tP4life@cluster0.r9tdw.mongodb.net/shop?retryWrites=true&w=majority')
  .then(client => {
    console.log('connected')
    _db = client.db()
    callback()
  })
  .catch(err => {
    console.log(err)
    throw err
  })

}

const getDb = () => {
  if (_db) {
    return _db
  }
  throw "No DB found!"
}

exports.mongoConnect = mongoConnect
exports.getDb = getDb
