import React from "react";
import { List, ListItem } from '../List';

function SearchResults(props) {

  console.log(props.results)
  return (
    <ul className="search-results">
      {props.results.map(result => (
        // <li key={result} className="form-control">
        //   <img alt="Car" src={result} className="img-fluid" />
        // </li>
        <ListItem key={result.id}>
          <div>
            Garage at {result.street} street
                                </div>
        </ListItem>
      ))}
    </ul>
  );
}

export default SearchResults;
