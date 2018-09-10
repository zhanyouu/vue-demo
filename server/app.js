var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs=require('ejs')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var login=require('./api/account/index');
var bufferLayer1=require('./api/bufferLayer1/index');

var app = express();
// app.use(function(req,res,next){
//   if(req.cookies.jobNumber){
//     next();
//   }else{
//     if(req.path=='/api/account/login'||req.path=='/api/account/logout'){
//       next();
//     }else{
//       res.json({
//         status:'1',
//         msg:'当前未登录',
//         result:''
//       })
//     }
//   }
// });
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html',ejs.__express)
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/account',login);
app.use('/api/bufferLayer1',bufferLayer1);

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
