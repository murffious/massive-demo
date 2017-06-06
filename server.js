var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

var conn = null;

massive({
  host: 'localhost',
  port: 5432,
  database: 'massive_demo',
  user: 'postgres',
  password: 'murff123'
}).then(function (db){
  app.set('db', db)
  conn = db;
})


var app = express();
app.use(bodyParser.json());

var port = 3000;

app.get('/injuries', function (req, res){
conn.getAllInjuries().then(function(injuries) {
  res.send(injuries)
})
});
app.get('/incidents', function(req, res) {
//  console.log(conn)
  console.log('GEt sighting');
});

app.post('/incidents', function(req, res) {
  console.log('POST sighting');
});

app.listen(port, function() {
  console.log("Started server on port", port);
});
