const db = require('../models');
  const Parkinglots = db.Parkinglot;
  console.log(db);
 
// Post a Parkinglot
exports.create = (req, res) => {  
  // Save Parkinglot to MySQL database
  Parkinglots.create({  
    street: req.body.street,
    postalcode: req.body.postalcode,
    totalspaces: req.body.totalspaces    
  }).then(Parkinglots => {
    // Send created parkinglot to client
    res.send(Parkinglots);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};