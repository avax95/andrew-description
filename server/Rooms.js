const express = require('express');
const redis = require('redis');
const db = require('../database/postgres.js');

const REDIS_PORT = process.env.REDIS_PORT;
const REDIS_HOST = process.env.REDIS_HOST;

const client = redis.createClient(REDIS_PORT, REDIS_HOST);

const router = express.Router();

router.get('/rooms/:id', (req, res) => {
  client.get(req.params.id, (err, data) => {
    if (err) throw err;
    if (data !== null) {
      res.send(data);
    } else {
      db.grabData(req.params.id, (query) => {
        client.setex(req.params.id, 60, JSON.stringify(query));
        res.send(query);
      });
    }
  });
});
router.put('/rooms/:id/:description/:title', (req, res) => {
  db.putData(req.params.id, req.params.description, req.params.title, (query) => {
    res.send(query);
  });
});


module.exports = router;
