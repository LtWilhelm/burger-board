module.exports = function (sequelize, DataTypes) {
  let Tag = sequelize.define("Tag", {
    name: DataTypes.STRING
  });

  Tag.associate = (models) => {
    models.Tag.belongsToMany(models.ImgTable, {through: 'ImgTag'});
    models.Tag.belongsToMany(models.Profile, {through: 'ProfileTag'});
  }

  return Tag;
};
