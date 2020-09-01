var bcrypt = require("bcryptjs");

module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define('users', {
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
        type: DataTypes.STRING,
        allowNull: false
      },
      parkingspace: {
        type: Sequelize.INTEGER
      }
    });
    
//     Users.prototype.validPassword = function(password) {
//         return bcrypt.compareSync(password, this.password);
//       };
//       // Hooks are automatic methods that run during various phases of the Users Model lifecycle
//       // In this case, before a User is created, we will automatically hash their password
//       Users.addHook("beforeCreate", function(users) {
//         users.password = bcrypt.hashSync(users.password, bcrypt.genSaltSync(10), null);
//       });
    
//       Users.associate = function(models) {
//         // Associating User with Guests
//         // When a User is deleted, also delete any associated Guests
//         Users.hasMany(models.Guests, {
//           onDelete: "cascade"
//         });
//       };
//       return Users;
// };
