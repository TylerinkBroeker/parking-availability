
const users = require('../controllers/users.controller.js');

module.exports = function(app) {
 
    // Create a new User
    app.post('/api/users/create', users.create);
 
    // // Retrieve all Users
    app.get('/api/users', users.findAll);
 
    // // Retrieve a single User by Id
    app.get('/api/users/:userId', users.findByPk);
   
    // // Update a User with Id
    app.put('/api/users/:userId', users.update);
 
    // // Delete a User with Id
    // app.delete('/api/users/:userId', users.delete);
}

