import React from "react";


function SearchResults(props) {
  return (
    <ul className="results">
      {props.results.map(result => (
        <li key={result} className="form-control">
          <img alt="Car" src={result}/>
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
