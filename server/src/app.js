var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

const threadsRouter = require('./routes/threads');
const mongoose = require('./mongoose');
var app = express();

if (process.env.NODE_ENV != 'test') {
  app.use(logger('dev'));
}
app.use(logger('dev'));
app.use(bodyParser.json());

app.use('/threads', threadsRouter);

app.use((req, res, next)=> {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err,req, res, next)=> {
  const message = err.message;
  const stack = req.app.get('env') === 'development' ? err.stack : {};

  res.status(err.status || 500);
  res.json({
    stack,
    message
  });
});

module.exports = app;
