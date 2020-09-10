// const db = require('../models');
//   const Managers = db.Manager;
//   console.log(db);
 
// // Post a Manager
// exports.create = (req, res) => {  
//   // Save Manager to MySQL database
//   Managers.create({  
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//     email: req.body.email,
//     password: req.body.password,
//   }).then(Managers => {
//     // Send created Manager to client
//     res.send(Mangers);
//   }).catch(err => {
//     res.status(500).send("Error -> " + err);
//   })
// };