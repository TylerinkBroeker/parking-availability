module.exports = (sequelize, Sequelize) => {
    const Parkingspace = sequelize.define('Parkingspace', {
      parkingspacenumber: {
        type: Sequelize.STRING
      },
      isAvailable: {
        type: Sequelize.BOOLEAN
      }
    });
    Parkingspace.associate = function(models) {
      // We're saying that a Parkingspace should belong to a Parkinglot
      // A Parkingspace can't be created without a Parkinglot due to the foreign key constraint
      Parkingspace.belongsTo(models.Parkinglot)
    };
//User.belongsTo(Company, {foreignKey: 'fk_company'});

    // Parkingspace.associate = function(models) {
    //   // We're saying that a Parkingspace should belong to a User
    //   // A Parkingspace can't be created without a User due to the foreign key constraint
    //   Parkingspace.belongsTo(models.User, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };

    return Parkingspace;
};