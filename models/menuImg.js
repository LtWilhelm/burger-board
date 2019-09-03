module.exports = function (sequelize, DataTypes) {
    let MenuImg = sequelize.define("MenuImg", {
        MenuColumnId: DataTypes.INTEGER,
        ImgTableId: DataTypes.INTEGER
    }, {
            timestamps: false,
            freezeTableName: true
        });


    return MenuImg;
};
