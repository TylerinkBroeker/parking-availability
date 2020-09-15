const db = require('../models');
const parkingspaces = require('../routes/parkingspaces');
  const Parkingspaces = db.Parkingspace;
  console.log(db);
 
// Post a Parkingspace
exports.create = (req, res) => {  
  // Save Parkingspace to MySQL database
  Parkingspaces.create({  
    Parkingspaces: req.body.parkingspace
  }).then(parkingspace => {
    // Send created parkingspace to client
    res.send(parkingspace);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

exports.findByuserId = (req, res) => {  
  console.log("find by user Id")
  Parkingspaces.findAll({
    where: {
      UserId: req.params.userId
    }
  }).then(parkingspaces => {
    res.send(parkingspaces);
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