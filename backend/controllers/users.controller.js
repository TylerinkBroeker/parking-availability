const db = require('../models/user');
const Users = db.users;
 
// Post a User
exports.create = (req, res) => {  
  // Save User to MySQL database
  Users.create({  
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    parkingspace: req.body.parkingspace
  }).then(users => {
    // Send created user to client
    res.send(users);
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