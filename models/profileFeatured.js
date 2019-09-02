module.exports = function (sequelize, DataTypes) {
    let ProfileFeatured = sequelize.define("ProfileFeatured", {
        ProfileId: DataTypes.INTEGER,
        FeaturedId: DataTypes.INTEGER
    }, {
            timestamps: false,
            freezeTableName: true
        });

    ProfileFeatured.associate = (models) => {
        models.ProfileFeatured.belongsTo(models.Profile);
        models.ProfileFeatured.belongsTo(models.Featured);
    }

    return ProfileFeatured;
};
