require("dotenv").config();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var express = require("express");
var exphbs = require("express-handlebars");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");
//var multer = require("multer");
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 8080;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
//middleware for using Multer for the image upload
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

// app.use(express.static(__dirname, 'public'));



// ...save filePath to database

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});


module.exports = app;
