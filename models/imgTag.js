module.exports = function (sequelize, DataTypes) {
    let ImgTag = sequelize.define("ImgTag", {
        ImgTableId: DataTypes.INTEGER,
        TagId: DataTypes.INTEGER
    }, {
            timestamps: false,
            freezeTableName: true
        });


    return ImgTag;
};
