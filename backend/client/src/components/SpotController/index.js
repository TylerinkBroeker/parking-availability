import React from 'react';
import './style.css';

//API call to get spot info

//Current spot(s) listed (or in dropdown) in current garage
//Toggle to set car as available or not

//THANKS AGAIN TO W3 SCHOOLS FOR THE TOGGLE AND CSS FOR IT!

function SpaceToggle() {
  return (
    <input type="checkbox" name="name" id="id" onClick={() => console.log("switch!")}/>
)
}

export default SpaceToggle;

{/* <input type="checkbox" name="name" id="id" onClick={() => console.log("switch!")}/> */}

// return (
//   <div>
//   <label className="switch">
//       <input type="checkbox" name="name" id="id" />
//       <span className="slider"></span>
//   </label>
// </div>
// )

