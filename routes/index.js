const express = require('express');
const router = express.Router();
const connection = require('../config/connection.js');

router.get('/', (req, res) => {
  let query = "SELECT * FROM table_data";
  connection.query("DROP DATABASE if exists table_data CREATE DATABASE table_data USE table_data CREATE TABLE table_data(id INT AUTO_INCREMENT PRIMARY KEY,first_name VARCHAR(20),last_name VARCHAR(20), home VARCHAR(20));", (err,result)=>{
    connection.query(query, (err, result) => {
      if (err) throw err;
      res.render('index', {results: result});
    });
  })

});

module.exports = router;