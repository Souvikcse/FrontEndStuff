var express = require('express'),
    app     = express(),
    bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/public"));
app.get("/", function(req, res){
    res.sendFile("index.html");
});

app.use('/api', require('./todos'));

app.listen(3005, function(){
    console.log("Server has started!!");
});