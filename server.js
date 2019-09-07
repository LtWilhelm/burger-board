require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const db = require("./models");
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//EJS
app.set('view engine', 'ejs');

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: true };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
    syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
    
    // Seed Default Profile
    db.Profile.create({profile_name: "Breakfast"}).then(function (dbProfile) {
        for (let i = 0; i < 4; i++) {
            db.MenuColumn.create({ ProfileId: dbProfile.id });
        }
        db.SideBar.create({ sidebarId: dbProfile.id });
    });
    require('./photoScraper')('./public/imgs');
    app.listen(PORT, function () {
        console.log(
            "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
            PORT,
            PORT
        );
    });
});

module.exports = app;