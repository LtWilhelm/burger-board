module.exports = function (sequelize, DataTypes) {
    let ProfileTag = sequelize.define("ProfileTag", {
        ProfileId: DataTypes.INTEGER,
        TagId: DataTypes.INTEGER
    }, {
            timestamps: false,
            freezeTableName: true
        });


    return ProfileTag;
};
