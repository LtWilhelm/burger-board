module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define("Profile", {
    name: DataTypes.STRING
  });

  Profile.associate = (models) => {
    models.Profile.hasMany(models.MenuColumn);
    models.Profile.hasMany(models.Featured);
    models.Profile.hasMany(models.SideBar);
  }

  return Profile;
};
