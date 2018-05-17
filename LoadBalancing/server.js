var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Nginx LoadBalance');
})
var server = app.listen(8089, function(){
    console.log('Listen 8089')
})