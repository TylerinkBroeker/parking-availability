const db = require('../models');
const parkingspaces = require('../routes/parkingspaces');
  const Parkingspaces = db.Parkingspace;
  console.log(db);
 
// Post a Parkingspace
exports.create = (req, res) => {  
  // Save Parkingspace to MySQL database
  Parkingspaces.create({  
    parkingspacenumber: req.body.parkingspacenumber,
    isAvailable: req.body.isAvailable,
    ParkinglotId: req.body.ParkinglotId
  }).then(parkingspace => {
    // Send created parkingspace to client
    res.send(parkingspace);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

// Fetch all Parkingspaces
exports.findAll = (req, res) => {
  Parkingspaces.findAll().then(parkingspaces => {
    // Send all Parkingspaces to Client
    res.send(parkingspaces);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

// Find a Parkingspace by Id
exports.findByPk = (req, res) => {  
  console.log("inside findByPk block")
  Parkingspaces.findByPk(req.params.parkingspaceId).then(Parkingspaces => {
    res.send(Parkingspaces);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

// Find all parkingspaces by UserId
exports.findByuserId = (req, res) => {  
  console.log("find by user Id")
  Parkingspaces.findAll({
    where: {
      userId: req.params.userId
    }
  }).then(parkingspaces => {
    res.send(parkingspaces);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

// Find all parkingspaces by ParkinglotId
exports.findByparkinglotId = (req, res) => {  
  console.log("find by parkinglotId")
  Parkingspaces.findAll({
    where: {
      parkinglotId: req.params.parkinglotId
    }
  }).then(parkingspaces => {
    res.send(parkingspaces);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

// PUT route for updating Parkingspaces.
exports.update = (req, res) => {
  console.log("--- Request params sent : ", req.params.parkingspaceId);
  console.log("--- Request body sent : ", req.body.isAvailable);
  Parkingspaces.update({
    isAvailable: req.body.isAvailable
  }, {
    where: {
      id: req.params.parkingspaceId
    }
  }).then(Parkingspaces => {
    res.send(Parkingspaces);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};