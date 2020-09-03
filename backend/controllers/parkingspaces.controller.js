const db = require('../models');
  const Users = db.parkingspace;
  console.log(db);
 
// Post a User
exports.create = (req, res) => {  
  // Save User to MySQL database
  parkingspace.create({  
    parkingspace: req.body.parkingspace
  }).then(parkingspace => {
    // Send created user to client
    res.send(parkingspace);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

// Fetch all Users
exports.findAll = (req, res) => {
  Users.findAll().then(users => {
    // Send all Users to Client
    res.send(users);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};