module.exports = function(sequelize, DataTypes) {
    var driver_posted_rides = sequelize.define("driver_posted_rides", {
        pickup_location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        trail_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        pickup_time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        dropoff_time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        slots_available: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cost: {
            type: DataTypes.DECIMAL(4,2),
            allowNull: false
        }
    })

    driver_posted_rides.associate = function(models){
        driver_posted_rides.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })

        driver_posted_rides.hasMany(models.user_rides_takens, {
            onDelete: "cascade"
          })
    }

    return driver_posted_rides;
}