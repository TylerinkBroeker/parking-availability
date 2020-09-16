
const parkingspaces = require('../controllers/parkingspaces.controller.js');

module.exports = function(app) {
 
    // Create a new Parkingspace
    app.post('/api/parkingspaces/create', parkingspaces.create);
 
    // // Retrieve all Parkingspaces
    app.get('/api/parkingspaces', parkingspaces.findAll);
 
    // // Retrieve a single Parkingspace by Id
    app.get('/api/parkingspaces/:parkingspaceId', parkingspaces.findByPk);
   
    // // Update a Parkingspace with Id
    app.put('/api/parkingspaces/:parkingspaceId', parkingspaces.update);

    // // Retrieve all Parkingspaces by User Id
    app.get('/api/parkingspacesbyuserId/:userId', parkingspaces.findByuserId);
 
    // Retrieve all Parkingspaces by ParkinglotId
    app.get('/api/parkingspacesbyparkinglotId/:parkinglotId', parkingspaces.findByparkinglotId);

    // // Delete a Parkingspace with Id
    // app.delete('/api/parkingspaces/:parkingspaceId', parkingspaces.delete);
}