const express = require('express');
const router = express.Router();
const connection = require('../config/connection.js');

router.get('/', (req, res) => {
  let query = "SELECT * FROM table_data";
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.render('index', {results: result});
  });
});

module.exports = router;