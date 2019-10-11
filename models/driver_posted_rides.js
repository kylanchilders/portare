module.exports = function(sequelize, DataTypes) {
    var driver_posted_rides = sequelize.define("driver_posted_rides", {
        drivers_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
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
    return driver_posted_rides;
}