module.exports = function (sequelize, DataTypes) {
  let Tag = sequelize.define("Tag", {
    name: DataTypes.STRING
  },{
    timestamps: false
  });

  Tag.associate = (models) => {
    models.Tag.belongsToMany(models.ImgTable, {through: 'ImgTag', timestamps: false});
    models.Tag.belongsToMany(models.Profile, {through: 'ProfileTag', timestamps: false});
  }

  return Tag;
};
