var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var path = require("path");
app.use(express.static(__dirname + "/public"));
app.use('/', function(req, res) {
    res.sendFile('index.html');  
});
app.use('/compare', function(req, res) {
    res.sendFile(path.join(__dirname,'../public', '/compare.html'));  
});
app.listen(3000);

console.log("Server running at port 3000");