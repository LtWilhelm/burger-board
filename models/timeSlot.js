module.exports = function (sequelize, DataTypes) {
  var TimeSlot = sequelize.define("MenuColumn", {
    name: DataTypes.STRING
  });

  TimeSlot.associate = (models) => {
    models.TimeSlot.belongsToMany(models.ImgTable);
    models.TimeSlot.belongsToMany(models.Profile);
  }

  return TimeSlot;
};
