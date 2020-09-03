var bcrypt = require("bcryptjs");

module.exports = (sequelize, Sequelize) => {
    const Manager = sequelize.define('Manager', {
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
    });
    
     Manager.prototype.validPassword = function(password) {
         return bcrypt.compareSync(password, this.password);
       };
       // Hooks are automatic methods that run during various phases of the Users Model lifecycle
       // In this case, before a User is created, we will automatically hash their password
       Manager.addHook("beforeCreate", function(users) {
         manager.password = bcrypt.hashSync(users.password, bcrypt.genSaltSync(10), null);
       });
    
       Manager.associate = function(models) {
         // Associating Manager with Parkinglot
         // When a Manager is deleted, also delete any associated Parkinglot
         Manager.hasMany(models.Parkinglot, {
           onDelete: "cascade"
         });
       };
       return Manager;
};
