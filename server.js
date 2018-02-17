const express = require('express');
const port = process.env.PORT || 3000;

var app = express();

app.get('/', (req, res) => {
  res.send({
    name:'amigo',
    like: 'playing dm'
  });
});
console.log(process.versions);
app.listen(port);
