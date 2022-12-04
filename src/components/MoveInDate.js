import React, { useContext } from 'react'
import { HouseContext } from '../context/HouseContext'

function MoveInDate() {
  const { setDate } = useContext(HouseContext)
  return (
    <div className='w-full'>
      <p className="text-left text-gray-500 pl-2">Move In Date</p>
      <input className='border w-full text-gray-500 rounded-lg py-4 px-4 date-input' type="date" onChange={(e)=>setDate(e.target.value)}></input>
    </div>
  )
}

export default MoveInDate
