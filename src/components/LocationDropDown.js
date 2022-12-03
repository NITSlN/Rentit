import React, { useContext } from 'react'
import { HouseContext } from '../context/HouseContext';
import Dropdown from './Dropdown';

function LocationDropDown() {
  const { country, setCountry,countries } = useContext(HouseContext);

  return (
    <Dropdown property={country} setProperty={setCountry} dropdownList={countries} type={"Choose Location"}/>
  )
}

export default LocationDropDown