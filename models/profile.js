module.exports = function (sequelize, DataTypes) {
  let Profile = sequelize.define("Profile", {
    profile_name: DataTypes.STRING
  }, {
      timestamps: false
    });

  Profile.associate = (models) => {
    models.Profile.hasMany(models.MenuColumn, { as: 'menu'});
    models.Profile.hasMany(models.Featured, { as: 'featured'});
    models.Profile.hasOne(models.SideBar, { as: 'sidebar' });
  };

  return Profile;
};