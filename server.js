
const express = require("express");
var cors = require('cors');

var app = express();
app.use(cors());

const data = require('./cda/model.json/model.json');

app.get('/', function (req, res) {
    res.json(data);
  })

  app.listen(process.env.PORT);