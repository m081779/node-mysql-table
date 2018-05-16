const express = require('express');
const router = express.Router();
const connection = require('../config/connection.js');


//get route to root directory that renders homepage
router.get('/', (req, res) => {

  //variable stores SQL query
  let query = "SELECT * FROM table_data";

  //Query retrieves table data, renders handlebars template, and passes data as a context object
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.render('index', {results: result});
  });
});

module.exports = router;