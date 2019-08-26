module.exports = function(sequelize, DataTypes) {
  let Profile = sequelize.define("Profile", {
    name: DataTypes.STRING
  });

  return Profile;
};
