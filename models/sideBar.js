module.exports = function (sequelize, DataTypes) {
  let SideBar = sequelize.define("SideBar", {
    header: DataTypes.STRING,
    body: DataTypes.STRING
  });

  SideBar.associate = (models) => {
    models.SideBar.belongsTo(models.Profile);
  }

  return SideBar;
};
