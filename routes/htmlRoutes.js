const db = require("../models");
const path = require("path");

module.exports = function (app) {
    
    // Load index page
    app.get("/", function (req, res) {
        db.Profile.findAll({}).then(function (dbExamples) {
            res.render("pages/index", {
                msg: "Welcome!",
                examples: dbExamples
            });
        });
    });

    // Load index page
    app.get("/admin", function (req, res) {
        res.render("pages/admin");
    });

    // Load index page
    app.get("/board", function (req, res) {
        res.render("pages/board");
    });

    // Load example page and pass in an example by id
    app.get("/example/:id", function (req, res) {
        db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
            res.render("example", {
                example: dbExample
            });
        });
    });

    // temp uploader page for testing
    app.get('/uploader', (req, res) => {
        res.sendFile(path.join(__dirname, '../uploader.html'))
    });

    // Render 404 page for any unmatched routes
    app.get("*", function (req, res) {
        res.render("pages/404");
    });
};