const express = require('express');
const router = express.Router();
const connection = require('../config/connection.js');

router.get('/', (req, res) => {
  let query = "SELECT * FROM table_data";
  connection.query('INSERT INTO table_data(first_name, last_name, home) VALUES("Rose", "Tyler", "Earth"),("Zoe", "Herriot", "Space Station W3"),("Jo", "Grant", "Earth"),("Leela", null, "Unspecified"),("Romana", null, "Gallifrey"),("Clara", "Oswald", "Earth"),("Adric", "Null", "Alzarius"),("Susan", "Foreman", "Gallifrey");', (err,result)=>{
    connection.query(query, (err, result) => {
      if (err) throw err;
      res.render('index', {results: result});
    });
  })

});

module.exports = router;