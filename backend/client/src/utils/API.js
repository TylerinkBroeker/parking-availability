import axios from "axios";



export default {

  //GETS for USERPAGE
  // Gets user info by user id
  getUserById: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Gets all parkingspaces with the given user id
  getParkingSpacesByUserId: function(id) {
    return axios.get("/api/parkingspacesbyUserId/" + id);
  },
  // Gets all parkinglots with the given user id
  getParkingSpacesByLotId: function(id) {
    return axios.get("/api/parkingspacesbyparkinglotId/" + id);
  },
  // // Gets all parkinglots by zip code
  getByPostalCode: function(data) {
    return axios.get("/api/parkinglotsbypostalcode/" + data);
  },
  // // Gets all parkinglots
  getAllParkingLots: function() {
    return axios.get("/api/parkinglots");
  },
  // Gets parkingspace by id
  getParkingSpacesById: function(id) {
    return axios.get("/api/parkingspaces/" + id);
  }, 
  // Gets parking lot by id
  getParkingLotById: function(id) {
    return axios.get("/api/parkinglots/" + id);
  },

  //GETS for MANAGERPAGE
  // Gets all parking lots with the given manager id
  // getManager: function() {
  //   return axios.get("/api/managers/:managerId");
  // }
  // Gets all parking lots with the given manager id
  getLotByManagerId: function(id) {
    return axios.get("/api/parkinglotsbymanagerId/" + id);
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
  },

  //PUT
  updateSpaceAvailability: function(spaceData, id) {
    return axios.put("/api/parkingspaces/" + id, spaceData)
  }
  

};

/*
export default {

GET
getManager(id)
getUser(id)

POST
addManager

PUT
addSpotToUser
addGarageToUser
addUserToGarage

}

*/