var bcrypt = require("bcryptjs");

module.exports = (sequelize, Sequelize) => {
    const Guest = sequelize.define('Guest', {
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
      userID: {
        type: Sequelize.INTEGER
      }
    });
    Guest.associate = function(models) {
        // We're saying that a Guest should belong to a User 
        // A Guest can't be created without a User due to the foreign key constraint
        Guest.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
    };
      return Guest;
};
    