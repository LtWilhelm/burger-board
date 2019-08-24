module.exports = function(sequelize, DataTypes) {
  var Featured = sequelize.define("Profile", {
    header: DataTypes.STRING,
    body: DataTypes.STRING,
    price: DataTypes.FLOAT
  });

  Featured.associate = (models) => {
    models.Featured.belongsTo(models.Profile);
    models.Featured.hasOne(models.ImgTable);
  }

  return Featured;
};
