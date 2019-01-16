var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var htmlPage = require('./routes/htmlRoute');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
app.engine( '.html', require('ejs').renderFile );
app.set('view engine', 'html');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

//use body for get ajax data
app.use(bodyParser());

app.use('/', htmlPage);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(8081);

// error handler
app.use(function(err, req, res, next) {
 console.log("message : " +  err);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
