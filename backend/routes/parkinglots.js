
const parkinglots = require('../controllers/parkinglots.controller.js');

module.exports = function(app) {
 
    // Create a new Parkinglot
    app.post('/api/parkinglots/create', parkinglots.create);
 
    // // Retrieve all Parkinglots
    app.get('/api/parkinglots', parkinglots.findAll);
 
    // // // Retrieve a single Parkinglot by Id
    // app.get('/api/parkinglots/:parkinglotId', parkinglots.findByPk);
   
    // // // Update a Parkinglot with Id
    // app.put('/api/parkinglots/:parkinglotId', parkinglots.update);
 
    // // Delete a Parkinglot with Id
    // app.delete('/api/parkinglots/:parkinglotId', parkinglots.delete);
}