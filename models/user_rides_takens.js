module.exports = function(sequelize, DataTypes) {
    var user_rides_takens = sequelize.define("user_rides_takens", {
        
    })

    user_rides_takens.associate = function(models){
        user_rides_takens.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
        user_rides_takens.belongsTo(models.driver_posted_rides, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return user_rides_takens;
}