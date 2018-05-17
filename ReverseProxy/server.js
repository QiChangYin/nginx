var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Nginx ReverseProxy');
})
var server = app.listen(8088, function(){
    console.log('Listen 8088')
})