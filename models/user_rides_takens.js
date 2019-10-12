module.exports = function(sequelize, DataTypes) {
    var user_rides_takens = sequelize.define("user_rides_takens", {
        driver_posted_rides_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        users_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    })
    return user_rides_takens;
}