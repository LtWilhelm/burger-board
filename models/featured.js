module.exports = function(sequelize, DataTypes) {
  let Featured = sequelize.define("Featured", {
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
