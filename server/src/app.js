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
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', index);
app.use('/threads', threadsRouter);

// catch 404 and forward to error handler
app.use((req, res, next)=> {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err,req, res, next)=> {
  // set locals, only providing error in development
  const message = err.message;
  const stack = req.app.get('env') === 'development' ? err.stack : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    stack,
    message
  });
  //res.render('error');
});

module.exports = app;
