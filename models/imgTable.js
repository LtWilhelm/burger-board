module.exports = function (sequelize, DataTypes) {
  var ImgTable = sequelize.define("MenuColumn", {
    name: DataTypes.STRING,
    img_path: DataTypes.STRING
  });

  ImgTable.associate = (models) => {
    models.ImgTable.belongsToMany(models.MenuColumn);
    models.ImgTable.belongsToMany(models.Featured);
    models.ImgTable.belongsToMany(models.SideBar);
  }

  return ImgTable;
};
