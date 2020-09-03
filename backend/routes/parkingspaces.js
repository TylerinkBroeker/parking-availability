const parkingspaces = require('../controllers/parkingspaces.controller.js');

module.exports = function (app) {

    // Create a new User
    app.post('/api/parkingspaces/create', parkingspaces.create);

    // // Retrieve all Users
    app.get('/api/parkingspaces', parkingspaces.findAll);

}