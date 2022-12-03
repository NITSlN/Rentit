import React, { useContext } from 'react'
import { HouseContext } from '../context/HouseContext'

import Dropdown from './Dropdown';
function PropertyDropdown() {
  const { property, setProperty, properties } = useContext(HouseContext)
  
  return (
    <Dropdown property={property} setProperty={setProperty} dropdownList={properties} type={"Property Type"}/>
  )
}

export default PropertyDropdown
