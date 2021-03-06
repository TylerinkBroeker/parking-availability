import React from 'react';

export function ParkingGarage({ children }) {
  return (
    <div className="container">
      <div className="row">{children}</div>
    </div>
  );
}

export function ParkingSpace({ children }) {

  return (
    <div className="col-sm-2">
      {children}
    </div>
  )
}

export function ParkingSpaceGraphic({ children }) {

  return (
    <card>
      
    </card>
  )
}



// if(children === true) {
//   return (
//       <div style={{background: "green", margin: "2px"}} className="card col-sm-2">
//           Parking space number
//       </div>);
// } else {
//   return (
//       <div style={{background: "red", margin: "2px"}} className="card col-sm-2">
//           Parking space number
//       </div>);
// }