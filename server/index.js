const express = require('express');

const BoletosCtrl = require('./controllers/boletos');

let app = express();

app.get('/', function (req, res) {
  BoletosCtrl(res);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
