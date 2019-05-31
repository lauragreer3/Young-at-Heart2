MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/youngatheart";
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var config = require('./config/database');
var Themeparks = require('themeparks');
var cacheManager = require('cache-manager');

mongoose.connect(config.database, { useNewUrlParser: true });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var vacationRouter = require('./routes/vacation');
var authRouter = require('./routes/auth');
var parksRouter = require('./routes/parks');

var app = express();

//Make server CORS-ENABLE
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//setup caching for themeparks library
Themeparks.Settings.Cache = cacheManager.caching({
  store: require('cache-manager-fs-binary'),
  options: {
    reviveBuffers: false,
    binaryAsStream: true,
    ttl: 60 * 60,
    maxsize: 1000 * 1000 * 1000,
    path: 'diskcache',
    preventfill: false
  }
});

//initialize passport
app.use(passport.initialize());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/vacation', vacationRouter);
app.use('/api/auth', authRouter);
app.use('/api/parks', parksRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
