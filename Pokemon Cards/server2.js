const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/intro.html");
});

app.listen(3000, function () {
    console.log("server connected");
});

app.get("/style.css", function (req, res) {
    res.sendFile(__dirname + "/" + "style.css");
});

app.get("/script2.js", function (req, res) {
    res.sendFile(__dirname + "/" + "script2.js");
});