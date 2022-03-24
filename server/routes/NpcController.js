const express = require('express');

const routes = express.Router();

const collectionService = require('../service/CollectionService');
const baseUrl = '/api/npc';
const collectionName = 'npc';

routes.route(baseUrl + '/findNpcs').get(async function (_req, res) {

    collectionService.findAll(collectionName, (err, result) => {
        if (err) {
            res.status(400).send('Error finding NPCs!');
        } else {
            res.json(result);
        }
    });

});
  
routes.route(baseUrl + '/findNpc/:alias').get(async function (req, res) {
const aliasParam = req.params.alias;

    collectionService.findByKeyValue(collectionName, 'alias', aliasParam, (err, result) => {
        if (err) {
            res.status(400).send('Error finding NPC!');
        } else {
            res.json(result);
        }
    });

});
  
routes.route(baseUrl + '/saveNpc').post(function (req, res) {

    collectionService.saveOne(collectionName, req.body, (err, result) => {
            if (err) {
        res.status(400).send('Error saving NPC!');
        } else {
            res.json(result);
        }
    });

});
  
routes.route(baseUrl + '/searcNpcs').post(function (req, res) {

    collectionService.runQuery(collectionName, req.body.filter, (err, result) => {
        if (err) {
            res.status(400).send('Error searching NPCs!');
        } else {
            res.json(result);
        }
    });

});

module.exports = routes;