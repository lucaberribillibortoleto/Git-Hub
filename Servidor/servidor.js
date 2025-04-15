require("colors");
var http = require("http");
var express = require("express")

var app = express();
app.use(express.static('./LAB'))

var server = http.createServer(app);
server.listen(80);

console.log("Servidor rodando....!".rainbow);







