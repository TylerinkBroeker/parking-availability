import React from 'react';

//Hit Garage table with passed in user/manager id

/* This may be modelled after book list activity, this component may be used for
    ANY listing purpose, Users, garages, spots etc.

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
-Each list item will ideally call/refresh the component it is referenceing
*/

function GarageList() {
    return (
        <div className="container">
            <ul>
                <li>Garage 1</li>
                <li>Garage 2</li>
                <li>Garage 3</li>
                <li>Garage 4</li>
                <li>Garage 5</li>
            </ul>
    </div>
    )
    
}

export default GarageList