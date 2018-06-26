const express = require('express');
const db = require('../database/postgres.js');
const app = express();
const router = express.Router();
app.use('/', function(req, res, next) {
  console.log("IN ROOM.js", req.url);
  next();
});
router.get('/rooms/:id', (req, res) => {
  db.grabData(req.params.id, (query) => {
    res.send(query);
  });
});


module.exports = router;
