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
    <div className='px-[30px] py-6 mb-12 mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 items-center relative lg:-top-4 border-2 border-purple-100 rounded-lg'>
      <LocationDropDown />
      <MoveInDate/>
      <PriceRangeDropdown />
      <PropertyDropdown />
      <button
        onClick={() => {
          handleClick();
        }}
        className='hover:bg-violet-700 bg-violet-500 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg'
      >
        Search
      </button>
    </div>
  );
};

export default Search;