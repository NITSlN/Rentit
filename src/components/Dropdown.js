import React, { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'

function Dropdown({ property, setProperty, list, type }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-[200px] z-10">
      <p className='text-gray-500 ml-2'>{type}</p>
      <div
        className="border rounded-lg cursor-pointer transition-all duration-200 py-3 px-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-left  relative p-1 text-gray-500">
          {property}
          <BiChevronDown className="inline" />
        </p>

        <div className={isOpen ? 'block absolute' : 'hidden'}>
          {list.map((prop, index) => {
            return (
              <div
                className="bg-gray-50 min-w-[200px] text-gray-500 first:rounded-tr-lg first:rounded-tl-lg last:rounded-br-lg last:rounded-bl-lg hover:bg-gray-100 px-8 py-2 "
                onClick={() => setProperty(prop)}
                key={index}
              >
                {prop}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Dropdown
