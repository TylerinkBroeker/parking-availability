// Dependencies
// =============================================================
var express = require("express");
var session = require("express-session");

// Requiring passport as we've configured it
var passport = require("./config/passport");

var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
// adding and updating to our database
var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
// =============================================================
require("./routes/guests.route.js")(app);
require("./routes/managers.route.js")(app);
require("./routes/parkinglots.route.js")(app);
require("./routes/parkingspaces.route.js")(app);
require("./routes/users.route.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});