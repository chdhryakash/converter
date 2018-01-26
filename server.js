const express = require('express');
const path = require('path');
const request = require("request");

const app = express();
const port = 3000;

app.get('/', (req,res) => {
  res.sendFile('input.html', {root: path.join(__dirname, './')});
});

app.listen(port, (res,req) => {
  console.log('Server started on ' + port);
});