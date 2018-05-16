const express = require('express');
const app = express();

const path = require('path');

const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 3000;
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.use(express.static(path.join(__dirname, './public')));
const index = require('./routes/index');

app.use('/', index);

app.listen(PORT, function () {
  console.log(`Application listening on port ${PORT}`)
});