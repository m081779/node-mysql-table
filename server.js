//Dependencies
const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');

//port with environmental variable for deployment on heroku
const PORT = process.env.PORT || 3000;

//handlebars middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//static directory
app.use(express.static(path.join(__dirname, './public')));

//routes
const index = require('./routes/index');
app.use('/', index);


//starting up server
app.listen(PORT, function () {
  console.log(`Application listening on port ${PORT}`)
});