var htmlRoutes = require('express').Router();
var path = require("path");

htmlRoutes.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "/public", "main.html"));
});

htmlRoutes.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "/public","signup.html"));
});

htmlRoutes.get("/driversignup", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "/public","driversignup.html"));
});

htmlRoutes.get("/signin", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "/public","signin.html"));
});

htmlRoutes.get("/driversignin", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "/public","driversignin.html"));
});

module.exports = htmlRoutes;