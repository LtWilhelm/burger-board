module.exports = function(sequelize, DataTypes) {
  let Featured = sequelize.define("Featured", {
    header: DataTypes.STRING,
    body: DataTypes.STRING,
    price: DataTypes.FLOAT,
    isAnimated: DataTypes.INTEGER
  },{
    timestamps: false
  });

  Featured.associate = (models) => {
    models.Featured.belongsToMany(models.Profile, {through: 'ProfileFeatured', timestamps: false});
  }

  return Featured;
};
