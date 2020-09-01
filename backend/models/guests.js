module.exports = (sequelize, Sequelize) => {
    const Guests = sequelize.define('guests', {
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
    Guests.associate = function(models) {
        // We're saying that a Guest should belong to a User 
        // A Guest can't be created without a User due to the foreign key constraint
        Guests.belongsTo(models.Users, {
          foreignKey: {
            allowNull: true
          }
        });
    };
      return Guests;
};
    