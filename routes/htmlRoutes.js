var htmlRoutes = require('express').Router();
var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

htmlRoutes.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/main.html"));
});

htmlRoutes.get("/signin", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/getride");
    }
    res.sendFile(path.join(__dirname, "../public/signin.html"));
  });

htmlRoutes.get("/getride", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/getride.html"));
  });

htmlRoutes.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
});

htmlRoutes.get("/driversignup", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "/public","driversignup.html"));
});

htmlRoutes.get("/signin", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "/public","signin.html"));
});

htmlRoutes.get("/postride", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "/public","postride.html"));
});

htmlRoutes.get("/myaccount", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "/public","myaccount.html"));
});


module.exports = htmlRoutes;