// const db = require('../models');
//   const Guests = db.Guest;
//   console.log(db);
 
// // Post a Guest
// exports.create = (req, res) => {  
//   // Save Guest to MySQL database
//   Guests.create({  
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//     email: req.body.email,
//     password: req.body.password,
//     userId: req.body.userId
//   }).then(Guests => {
//     // Send created Guest to client
//     res.send(Guests);
//   }).catch(err => {
//     res.status(500).send("Error -> " + err);
//   })
// };