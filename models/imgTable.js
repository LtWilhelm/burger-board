module.exports = function (sequelize, DataTypes) {
  let ImgTable = sequelize.define("ImgTable", {
    name: DataTypes.STRING,
    img_path: DataTypes.STRING
  });

  ImgTable.associate = (models) => {
    models.ImgTable.belongsToMany(models.MenuColumn, {through: 'MenuImg'});
    models.ImgTable.belongsToMany(models.Featured, {through: 'FeaturedImg'});
    models.ImgTable.belongsToMany(models.SideBar, {through: 'SideBarImg'});
  }

  return ImgTable;
};
