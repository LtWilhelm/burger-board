module.exports = function (sequelize, DataTypes) {
  let SideBar = sequelize.define("SideBar", {
    header: DataTypes.STRING,
    body: DataTypes.STRING,
    isAnimated: DataTypes.INTEGER
  },{
    timestamps: false
  });

  SideBar.associate = (models) => {
    models.SideBar.belongsTo(models.Profile);
    models.SideBar.belongsTo(models.ImgTable, {as: 'background_img'});
  }

  return SideBar;
};
