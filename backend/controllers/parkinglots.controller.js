const db = require('../models');
const parkinglots = require('../routes/parkinglots');
  const Parkinglots = db.Parkinglot;
  console.log(db);
 
// Post a Parkinglot
exports.create = (req, res) => {  
  // Save Parkinglot to MySQL database
  Parkinglots.create({  
    street: req.body.street,
    postalcode: req.body.postalcode,
    totalspaces: req.body.totalspaces,
    ManagerId: req.body.ManagerId    
  }).then(Parkinglots => {
    // Send created parkinglot to client
    res.send(Parkinglots);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

// Fetch all Parking Lots
exports.findAll = (req, res) => {
  console.log("inside findAll block")
  Parkinglots.findAll().then(Parkinglots => {
    // Send all Parkinglots to Client
    res.send(Parkinglots);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};


// Find all parkinglots by Postal Code
exports.findBypostalcode = (req, res) => {  
  console.log("find by postal code")
  Parkinglots.findAll({
    where: {
      postalcode: req.params.postalcode
    }
  }).then(parkinglots => {
    res.send(parkinglots);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

//Find all parkinglots by managerId
exports.findBymanagerId = (req, res) => {  
  console.log("find by managerId")
  Parkinglots.findAll({
    where: {
      managerId: req.params.managerId
    }
  }).then(parkinglots => {
    res.send(parkinglots);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

// Find a single Parkinglot by Id
exports.findByPk = (req, res) => {  
  console.log("inside findByPk block")
  Parkinglots.findByPk(req.params.parkinglotId).then(Parkinglots => {
    res.send(Parkinglots);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};