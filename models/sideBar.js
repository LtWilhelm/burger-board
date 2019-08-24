module.exports = function (sequelize, DataTypes) {
  var ImgTable = sequelize.define("MenuColumn", {
    header: DataTypes.STRING,
    body: DataTypes.STRING
  });

  ImgTable.associate = (models) => {
    models.Featured.belongsTo(models.Profile);
    models.Featured.hasOne(models.ImgTable);
  }

  return ImgTable;
};
