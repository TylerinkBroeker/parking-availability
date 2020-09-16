import axios from "axios";



export default {

  //GETS for USERPAGE
  // Gets user info by user id
  getUserById: function() {
    return axios.get("/api/users/1");//Remember to change to be logged in user's id
  },
  // Gets all parkingspaces with the given user id
  getParkingSpacesByUserId: function() {
    return axios.get("/api/parkingspacesbyUserId/1");
  },
  // Gets all parkinglots with the given user id
  getParkingSpacesByUserId: function() {
    return axios.get("/api/parkingspacesbyUserId/1");
  },
  // // Gets all parkinglots by zip code
  // getParkingLotByZip: function() {
  //   return axios.get("/api/parkinglotsByZip");
  // },
  // // Gets all parkinglots
  getAllParkingLots: function() {
    return axios.get("/api/parkinglots");
  },

  //GETS for MANAGERPAGE
  // Gets all parking lots with the given manager id
  // getManager: function() {
  //   return axios.get("/api/managers/:managerId");
  // }
  // Gets all parking lots with the given manager id
  getLotByManagerId: function() {
    return axios.get("/api/parkinglotsbymanagerId/1");
  },
  // Gets all parking lots with the given manager id
  // getSpacesByLotId: function(lotId) {
  //   return axios.get("/api/parkingspacebylotId/" + lotId);
  // },

  //POST
  // Saves new garage to garage table
  saveGarage: function(garageData) {
    return axios.post("/api/parkinglots/create", garageData);
  },
  // Creates a new parking space
  createParkingSpace: function(spaceData) {
    return axios.post("/api/parkingspaces/create", spaceData)
  },
  //Creates a new user
  createUser: function(userData) {
    return axios.post("/api/users/create", userData)
  },
  //Creates a new manager
  createManager: function(managerData) {
    return axios.post("/api/managers/create", managerData)
  }

};

/*
export default {

GET
getManager(id)
getUser(id)
getGarage(id)
getSpot(id)
getSpots
getGarages

POST
addGarage
addSpot
addManager
addUser

PUT
addSpotToUser
addGarageToUser
addUserToGarage

}

*/