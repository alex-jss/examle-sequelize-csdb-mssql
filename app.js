const express = require('express');
const app = express();
const http = require('http');

const _connectDb = require('./config/connectDb');
_connectDb.connectDb();

const routs = require('./routes');
app.use('/', routs);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Something broke!');
});

const httpServer = http.createServer(app);

httpServer.listen(48790, () => {
  console.log('Using environment:', process.env.NODE_ENV);
  console.log(`Express server launched on the http://localhost:${48790}`);
});
