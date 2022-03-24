const express = require('express');

const routes = express.Router();

const collectionService = require('../service/CollectionService');
const baseUrl = '/api/item';
const collectionName = 'item';

routes.route(baseUrl + '/findItems').get(async function (_req, res) {

  collectionService.findAll(collectionName, (err, result) => {
    if (err) {
      res.status(400).send('Error fetching items!');
    } else {
      res.json(result);
    }
  });
});

routes.route(baseUrl + '/findItem/:alias').get(async function (req, res) {
  const aliasParam = req.params.alias;

  collectionService.findByKeyValue(collectionName, 'alias', aliasParam, (err, result) => {
    if (err) {
      res.status(400).send('Error fetching items!');
    } else {
      res.json(result);
    }
  });

});

routes.route(baseUrl + '/saveItem').post(function (req, res) {

  collectionService.saveOne(collectionName, req.body, (err, result) => {
    if (err) {
      res.status(400).send('Error fetching items!');
    } else {
      res.json(result);
    }
  });

});

routes.route(baseUrl + '/searchItems').post(function (req, res) {

  collectionService.runQuery(collectionName, req.body.filter, (err, result) => {
    if (err) {
      res.status(400).send('Error fetching items!');
    } else {
      res.json(result);
    }
  });

});

module.exports = routes;
