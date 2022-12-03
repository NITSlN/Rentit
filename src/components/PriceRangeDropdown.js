import React, { useContext } from 'react'
import { HouseContext } from '../context/HouseContext'
import Dropdown from './Dropdown'
function PriceRangeDropdown() {

  const { price, setPrice } = useContext(HouseContext)
  const prices = [
      'All',
      '4000 - 5000',
      '3000 - 3999',
      '2000 - 2999',
      '1000 - 1999'
  ]
  return (
    <Dropdown property={price} setProperty={setPrice} dropdownList={prices} type={"Price Range"}/>
  )
}

export default PriceRangeDropdown
