module.exports = (sequelize, Sequelize) => {
    const Parkinglot = sequelize.define('Parkinglot', {
      parkinglotID: {
        type: Sequelize.INTEGER
      }
    });

    Parkinglot.associate = function(models) {
      // Associating User with Guests
      // When a User is deleted, also delete any associated Guests
      Parkinglot.hasMany(models.Parkingspace, {
        onDelete: "cascade"
      });
    };
      return Parkinglot;
};