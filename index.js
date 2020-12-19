const express = require("express");

const app = express();
const { config } = require('./config/index');

app.get('/', function (req, res) {
    res.send("It works");
});


app.listen(config.port, function () {
    console.log(`Listening on Port ${config.port}`)
});