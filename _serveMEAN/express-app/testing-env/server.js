import express from 'express';
import path from 'path';
import open from 'open';
//import compression from 'compression';

/* eslint-disable no-console */

const port = 3090;
const app = express();

//app.use(compression());
app.use(express.static('ui/'));

app.get('/ui/', function(req, res) {
  res.sendFile(path.join(__dirname, '/ui/test.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
    console.log("starting ... on port " + port + " ... ")
  }
});
