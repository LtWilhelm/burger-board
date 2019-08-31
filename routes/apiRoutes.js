var db = require("../models");

module.exports = function (app) {

  //*************************************************
  //                   GET ROUTES
  //*************************************************

  // Load Profiles: GET /api/profiles
  app.get("/api/profiles", function (req, res) {
    db.Profile.findAll({}).then(function (dbProfile) {
      res.json(dbProfile);
    });
  });

  // Load Profile for editing: GET /api/profile/:id
  app.get("/api/profile/:id", function (req, res) {
    db.Profile.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbProfile) {
      res.json(dbProfile);
    });
  });

  // Load Templates: GET /api/templates
  app.get("/api/templates", function (req, res) {
    db.Featured.findAll({}).then(function (dbTemplate) {
      res.json(dbTemplate);
    });
  });

  // Load Featured: GET /api/featured/:profileId
  app.get("/api/featured/:profileId", function (req, res) {
    db.Featured.findAll({
      where: {
        id: req.params.profileId
      },
      include: [{
        model: db.ImgTable
      }]
    }).then(function (dbFeatured) {
      res.json(dbFeatured);
    });
  });

  // Load Display: GET /api/display/:profileId
  app.get("/api/display/:profileId", function (req, res) {
    db.Profile.findAll({
      where: {
        profileId: req.params.profileId
      },
      include: [{
        model: db.MenuColumn
      },
      {
        model: db.Featured
      },
      {
        model: db.SideBar
      }]
    }).then(function (dbDisplay) {
      res.json(dbDisplay);
    });
  });

  // Load Menu: GET /api/menu/:profileId
  app.get("/api/display/:profileId", function (req, res) {
    db.Profile.findAll({
      where: {
        id: req.params.profileId
      },
      include: [{
        model: db.MenuColumn
      }]
    }).then(function (dbMenu) {
      res.json(dbMenu);
    });
  });

  //*************************************************
  //                  POST ROUTES
  //*************************************************

  // New Profile: POST /api/profile/create
  app.post("/api/profiles/create", function (req, res) {
    db.Profile.create(req.body).then(function (dbProfile) {
      res.json(dbProfile);
    });
  });

  // New Template: POST /api/template/create
  app.post("/api/template/create", function (req, res) {
    db.Featured.create(req.body).then(function (dbTemplate) {
      res.json(dbTemplate);
    });
  });

  // New Image: POST /api/image/new
  app.post("/api/image/new", function (req, res) {
    db.ImgTable.create(req.body).then(function (dbImg) {
      res.json(dbImg);
    });
  });

  // Edit Featured: load templates, POST /api/featured/:profileId/:templateId
  app.post("/api/featured/:profileId/:templateId", function (req, res) {
    db.Featured.create(
      req.body,
      {
        where: {
          id: [req.body.profileId, req.body.templateId]
        }
      }).then(function (dbFeatured) {
        res.json(dbFeatured);
      });
  });

  //*************************************************
  //                   PUT ROUTES
  //*************************************************

  // Save Edit: PUT /api/profile/edit/:id
  app.put("/api/profile/edit/:id", function (req, res) {
    db.Profile.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function (dbProfile) {
        res.json(dbProfile);
      });
  });

  // Edit Image: PUT /api/image/edit/:id
  app.put("/api/image/edit/:id", function (req, res) {
    db.ImgTable.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function (dbImg) {
        res.json(dbImg);
      });
  });

  // Edit Template: PUT /api/template/edit/:id
  app.put("/api/template/edit/:id", function (req, res) {
    db.Featured.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function (dbTemplate) {
        res.json(dbTemplate);
      });
  });

  // Edit Sidebar: PUT /api/sidebar/:profileId/:sideBarId
  app.put("/api/sidebar/:sideBarId", function (req, res) {
    db.SideBar.update(
      req.body,
      {
        where: {
          id: req.body.sideBarId
        }
      }).then(function (dbSidebar) {
        res.json(dbSidebar);
      });
  });

  // Edit Menu: PUT /api/menu/:profileId/:menuId
  app.put("/api/menu/menuId", function (req, res) {
    db.MenuColumn.update(
      req.body,
      {
        where: {
          id: req.body.menuId
        }
      }).then(function (dbMenu) {
        res.json(dbMenu);
      });
  });

  //*************************************************
  //                DELETE ROUTES
  //*************************************************

  // Remove Featured: DELETE /api/featured/:profileId/:templateId
  app.delete("/api/featured/:profileId/:templateId", function (req, res) {
    db.Featured.destroy({
      where: {
        id: [req.params.profileId, req.params.templateId]
      }
    }).then(function (dbFeatured) {
      res.json(dbFeatured);
    });
  });

  // Delete template/profile: DELETE /api/[template/profile]/:id
  app.delete("/api/profile/:id", function (req, res) {
    db.Profile.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbProfile) {
      res.json(dbProfile);
    });
  });

  // Delete template/profile: DELETE /api/[template/profile]/:id
  app.delete("/api/template/:id", function (req, res) {
    db.Featured.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbTemplate) {
      res.json(dbTemplate);
    });
  });
};