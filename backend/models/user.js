var bcrypt = require("bcryptjs");

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
      firstname: {
        type: Sequelize.STRING
      },

      lastname: {
        type: Sequelize.STRING
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      // parkingspace: {
      //   type: Sequelize.INTEGER
      // }
    });
    
     User.prototype.validPassword = function(password) {
         return bcrypt.compareSync(password, this.password);
       };
       // Hooks are automatic methods that run during various phases of the Users Model lifecycle
       // In this case, before a User is created, we will automatically hash their password
       User.addHook("beforeCreate", function(user) {
         user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
       });
    
       User.associate = function(models) {
         // Associating User with Guests
         // When a User is deleted, also delete any associated Guests
         User.hasMany(models.Guest, {
           onDelete: "cascade"
         });
       };

       User.associate = function(models) {
        // Associating User with ParkingSpace
        // When a User is deleted, also delete any associated Parkingspaces
        User.hasMany(models.Parkingspace, {
          onDelete: "cascade"
        });
      };

       return User;
};
