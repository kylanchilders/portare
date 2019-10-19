// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var apiRoutes = require("./routes/apiRoutes.js");
var htmlRoutes = require("./routes/htmlRoutes.js");
var passport = require("./config/passport");
var db = require("./models")

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use(session({ secret: "test", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', htmlRoutes);
app.use('/api/', apiRoutes);


// Starts the server to begin listening
// =============================================================
db.sequelize.sync().then(function(){
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
});
  