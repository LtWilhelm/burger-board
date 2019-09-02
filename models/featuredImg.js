module.exports = function (sequelize, DataTypes) {
    let FeaturedImg = sequelize.define("FeaturedImg", {
        FeaturedId: DataTypes.INTEGER,
        ImgTableId: DataTypes.INTEGER
    }, {
            timestamps: false,
            freezeTableName: true
        });


    return FeaturedImg;
};
