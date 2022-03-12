const express = require('express');

const routes = express.Router();

const dbo = require('../db/conn');

const baseUrl = '/erServices';

routes.route(baseUrl + '/findItems').get(async function (_req, res) {
  const dbConnect = dbo.getDb();
  dbConnect
    .collection('collection')
    .find({})
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching items!');
      } else {
        res.json(result);
      }
    });
});

routes.route(baseUrl + '/findItem/:alias').get(async function (req, res) {
  const dbConnect = dbo.getDb();
  const aliasParam = req.params.alias;

  dbConnect
    .collection('collection')
    .findOne({alias: aliasParam}, function(err, result) {
      if (err) {
        res.status(400).send('Error finding item!');
      } else {
        res.json(result);
      }
    })
    
});

routes.route(baseUrl + '/saveItem').post(function (req, res) {
  const dbConnect = dbo.getDb();

  const filter = { alias: req.body.alias };

  const itemDocument = {
    name: req.body.name ,
    alias: req.body.alias,
    description: req.body.description,
    location: req.body.location
  }

  const options = { upsert: true };

  dbConnect
    .collection('collection')
    .updateOne(filter, {$set: itemDocument}, options, function (err, result) {
      if (err) {
        res.status(400).send('Error saving item!');
      } else {
        res.status(204).send();
      }
    });
});

module.exports = routes;
