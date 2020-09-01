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
db.users = require('../models/users.js')(sequelize, Sequelize);
db.guests = require('../models/guests.js')(sequelize, Sequelize);
db.managers = require('../models/managers.js')(sequelize, Sequelize);
db.parkinglots = require('../models/parkinglots.js')(sequelize, Sequelize);
db.parkingspaces = require('../models/parkingspaces.js')(sequelize, Sequelize);
 
 
module.exports = db;