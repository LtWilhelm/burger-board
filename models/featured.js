module.exports = function(sequelize, DataTypes) {
  let Featured = sequelize.define("Featured", {
    template_name: DataTypes.STRING,
    template_header: DataTypes.STRING,
    template_body: DataTypes.STRING,
    template_price: DataTypes.FLOAT,
    isAnimated: DataTypes.INTEGER
  },{
    timestamps: false
  });

  Featured.associate = (models) => {
    models.Featured.belongsToMany(models.Profile, {through: 'ProfileFeatured'});
    models.Featured.belongsTo(models.ImgTable, {as: 'background_img'});
  }

  return Featured;
};
