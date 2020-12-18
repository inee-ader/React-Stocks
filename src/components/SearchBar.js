import React from 'react';

const SearchBar = ({filterBy, sortType, checked}) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={checked === "Alphabetically"} onChange={sortType}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={checked === "Price"} onChange={sortType}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={filterBy} >
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>

    </div>
  );
}


export default SearchBar;
