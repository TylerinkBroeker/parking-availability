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
  // getParkingSpacesByUserId: function() {
  //   return axios.get("/api/parkingspacesbyUserId/1");
  // },
  

  //GETS for MANAGERPAGE
  // Gets all parking lots with the given manager id
  // getManager: function() {
  //   return axios.get("/api/managers/:managerId");
  // }

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