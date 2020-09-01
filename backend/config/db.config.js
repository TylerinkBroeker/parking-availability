const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
//Models/tables
db.users = require('../model/users.model.js')(sequelize, Sequelize);
db.guests = require('../model/guests.model.js')(sequelize, Sequelize);
db.managers = require('../model/managers.model.js')(sequelize, Sequelize);
db.parkinglots = require('../model/parkinglots.model.js')(sequelize, Sequelize);
db.parkingspaces = require('../model/parkingspaces.model.js')(sequelize, Sequelize);
 
 
module.exports = db;