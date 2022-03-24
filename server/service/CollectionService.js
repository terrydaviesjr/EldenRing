const dbo = require('../db/conn');

let service = {}

service.findAll = (collection, callback) => {
    const dbConnect = dbo.getDb();

    dbConnect
    .collection(collection)
    .find({})
    .sort({name: 1})
    .toArray(function (err, result) {
        return callback(err, result);
    });
}

service.findByKeyValue = (collection, key, value, callback) => {
    const dbConnect = dbo.getDb();

    let filter = {};
    filter[key] = value;
    
    dbConnect
      .collection(collection)
      .findOne(filter, function(err, result) {
          return callback(err, result);
      })
}

service.saveOne = (collection, obj, callback) => {
    const dbConnect = dbo.getDb();

    const filter = { alias: obj.alias };
  
    let itemDocument = {}
  
    Object.keys(obj).forEach((key, _index) => {
      if (key != '_id') {
        itemDocument[key] = obj[key];
      }
    })
  
    const options = { upsert: true };
  
    dbConnect
      .collection(collection)
      .updateOne(filter, {$set: itemDocument}, options, function (err, result) {
          return callback(err, result);
      });
}

service.runQuery = (collection, query, callback) => {
    const dbConnect = dbo.getDb();

    let filter = query || {};
    
    dbConnect
      .collection(collection)
      .find(filter)
      .sort({name:1})
      .toArray(function (err, result) {
          return callback(err, result);
      });
}

module.exports = service;