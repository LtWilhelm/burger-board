module.exports = function (sequelize, DataTypes) {
  let MenuColumn = sequelize.define("MenuColumn", {
    header: DataTypes.STRING,
    item_1: DataTypes.STRING,
    price_1: DataTypes.FLOAT,
    item_2: DataTypes.STRING,
    price_2: DataTypes.FLOAT,
    item_3: DataTypes.STRING,
    price_3: DataTypes.FLOAT,
    item_4: DataTypes.STRING,
    price_4: DataTypes.FLOAT,
    item_5: DataTypes.STRING,
    price_5: DataTypes.FLOAT,
    item_6: DataTypes.STRING,
    price_6: DataTypes.FLOAT,
    item_7: DataTypes.STRING,
    price_7: DataTypes.FLOAT,
    item_8: DataTypes.STRING,
    price_8: DataTypes.FLOAT,
    isAnimated: DataTypes.INTEGER
  },{
    timestamps: false
  });

  MenuColumn.associate = (models) => {
    models.MenuColumn.belongsTo(models.Profile);
    models.MenuColumn.belongsTo(models.Tag);
    models.MenuColumn.belongsTo(models.ImgTable, {as: 'background_img'});
  }

  return MenuColumn;
};
