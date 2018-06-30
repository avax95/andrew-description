const express = require('express');
const db = require('../database/postgres.js');
const app = express();
const redis = require('redis');
const REDIS_PORT = 6379;

const client = redis.createClient(REDIS_PORT);

const router = express.Router();

router.get('/rooms/:id', (req, res) => {
  client.get(req.params.id, function(err,data) {
    if (err) throw err;
    if (data !== null) {
      res.send(data);
    } else {
      db.grabData(req.params.id, (query) => {
        client.setex(req.params.id, 60, JSON.stringify(query)); //redis cache it before sending back.
        res.send(query);
      });
    }
  });
});
router.put('/rooms/:id/:description/:title', (req,res) => {
  db.putData(req.params.id, req.params.description, req.params.title, (query) => {
    res.send(query);
  });
});


module.exports = router;
