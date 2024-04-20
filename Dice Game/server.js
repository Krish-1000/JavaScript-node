const express = require("express");

const app = express();

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function(){
    console.log("server restarted by nodemon.");
});

app.get("/style.css", function(req,res){
    res.sendFile(__dirname + "/" +"style.css");
});

app.get('/script.js', function (req, res) {
    res.sendFile(__dirname + "/" + "script.js");
});

app.use(express.static('public'));
app.use('/images',express.static('images'));