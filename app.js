/** import express module and mongoose module */
var mongoose = require('mongoose');
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
app.use(bodyparser.json()); 
var port = 3000;

/** To enable the cors for all resource in on server */
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  /** mongodb connection */

 mongoose.connect('mongodb://127.0.0.1:27017/products');

mongoose.connection.on('connect', ()=> {
    console.log('connected mongodb at port ');
})
mongoose.connection.on('error',(err) =>{
    console.log('database error')
})

/** server listeningn the port 3000 */

app.listen(port, 'localhost', function(err, data){
    console.log('server started');
});

/** import the router module */
var categoryRouter = require('./routes/category');
var productRouter = require('./routes/products');

/** add the router to the middleware handling path*/
app.use('/category',categoryRouter);
app.use('/product', productRouter); 