// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as 
//the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");


// Creating our User model
//Set it as export because we will need it required on the server
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vehicle_make: {
      type: DataTypes.STRING,
    },
    vehicle_model: {
      type: DataTypes.STRING,
    },
    vehicle_color: {
      type: DataTypes.STRING,
    },
    license_plate: {
      type: DataTypes.STRING,
    },
    license_number: {
      type: DataTypes.STRING,
    },
  });

  User.associate = function(models) {
    User.hasMany(models.driver_posted_rides, {
      onDelete: "cascade"
    })

    User.hasMany(models.user_rides_takens, {
      onDelete: "cascade"
    })
  }

  
  // Creating a custom method for our User model. 
  //This will check if an unhashed password entered by the 
  //user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.beforeCreate( function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};
