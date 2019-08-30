module.exports = function(sequelize, DataTypes) {
  let Profile = sequelize.define("Profile", {
    name: DataTypes.STRING
  },{
    timestamps: false
  });

  Profile.associate = (models) => {
    models.Profile.hasMany(models.MenuColumn, {as: 'menu', timestamps: false});
    models.Profile.hasMany(models.Featured, {as: 'featured', timestamps: false});
    models.Profile.hasOne(models.SideBar, {as: 'sidebar'});
  };

  return Profile;
};
