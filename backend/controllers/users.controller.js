const db = require('../models');
  const Users = db.User;
  console.log(db);
 
// Post a User
exports.create = (req, res) => {  
  // Save User to MySQL database
  Users.create({  
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    parkingspace: req.body.parkingspace
  }).then(Users => {
    // Send created user to client
    res.send(Users);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

// Fetch all Users
exports.findAll = (req, res) => {
  console.log("inside findAll block")
  Users.findAll().then(Users => {
    // Send all Users to Client
    res.send(Users);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

// Find a User by Id
exports.findByPk = (req, res) => {  
  console.log("inside findByPk block")
  Users.findByPk(req.params.userId).then(Users => {
    res.send(Users);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};
 
// PUT route for updating Users. We can get the updated user data from req.body 
exports.update = (req, res) => {
  console.log("inside update block")
  Users.update({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    parkingspace: req.body.parkingspace
  }, {
    where: {
      id: req.body.id
    }
  }).then(Users => {
    res.send(Users);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};