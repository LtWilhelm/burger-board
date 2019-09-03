module.exports = function (sequelize, DataTypes) {
  let ImgTable = sequelize.define("ImgTable", {
    img_name: DataTypes.STRING,
    img_path: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    }
  },{
    timestamps: false
  });

  ImgTable.associate = (models) => {
    models.ImgTable.belongsToMany(models.MenuColumn, {through: 'MenuImg', timestamps: false});
    models.ImgTable.belongsToMany(models.Featured, {through: 'FeaturedImg', timestamps: false});
    models.ImgTable.belongsToMany(models.SideBar, {through: 'SideBarImg', timestamps: false});
  }

  return ImgTable;
};
