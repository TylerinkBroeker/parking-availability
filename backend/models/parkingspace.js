module.exports = (sequelize, Sequelize) => {
    const Parkingspace = sequelize.define('Parkingspace', {
      parkinglotID: {
        type: Sequelize.INTEGER
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
    return Parkingspace;
};