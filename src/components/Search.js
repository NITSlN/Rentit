import React, { useContext } from 'react';

// import components
import LocationDropDown from './LocationDropDown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';
import MoveInDate from './MoveInDate';

// import context
import { HouseContext } from '../context/HouseContext';


const Search = () => {
  const { handleClick } = useContext(HouseContext);
  return (
    <div className='search-panel'>
      <LocationDropDown />
      <MoveInDate/>
      <PriceRangeDropdown />
      <PropertyDropdown />
      <button
        onClick={() => {
          handleClick();
        }}
        className='search-button'
      >
        Search
      </button>
    </div>
  );
};

export default Search;