import React from "react";
import "./style.css";


function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="garage">Garage:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          list="garages"
          type="text"
          className="form-control"
          placeholder="Postal Code"
          id="garage"
        />
        <datalist id="Postal Code">
          {props.garages.map(garage => (
            <option value={garage} key={garage} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
