module.exports = (sequelize, Sequelize) => {
    const Parkingspace = sequelize.define('Parkingspace', {
      parkingspacenumber: {
        type: Sequelize.STRING
      }
    });
    Parkingspace.associate = function(models) {
      // We're saying that a Parkingspace should belong to a Parkinglot
      // A Parkingspace can't be created without a Parkinglot due to the foreign key constraint
      Parkingspace.belongsTo(models.Parkinglot, {
        foreignKey: {
          allowNull: false
        }
      });
    };

    Parkingspace.associate = function(models) {
      // We're saying that a Parkingspace should belong to a User
      // A Parkingspace can't be created without a User due to the foreign key constraint
      Parkingspace.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };

    return Parkingspace;
};