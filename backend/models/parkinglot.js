module.exports = (sequelize, Sequelize) => {
    const Parkinglot = sequelize.define('Parkinglot', {
      // managerId: {
      //   type: Sequelize.INTEGER
      // },
      street: {
        type: Sequelize.STRING
      },
      postalcode: {
        type: Sequelize.INTEGER
      },
      totalspaces: {
        type: Sequelize.INTEGER
      }
    });

    Parkinglot.associate = function(models) {
      // Associating Parking Lot with Parking Spaces
      // When a Parking Lot is deleted, also delete any associated Parking Spaces
      Parkinglot.hasMany(models.Parkingspace, {
        onDelete: "cascade"
      });
    };

    Parkinglot.associate = function(models) {
      // We're saying that a Guest should belong to a User 
      // A Guest can't be created without a User due to the foreign key constraint
      Parkinglot.belongsTo(models.Manager)
  };

      return Parkinglot;
};