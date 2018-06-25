const express = require('express');
const db = require('../database/index');

const router = express.Router();

router.get('/:id', (req, res) => {
  db.get(req.params.id, (query) => {
    res.send(query);
  });
});


module.exports = router;
