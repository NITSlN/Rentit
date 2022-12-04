import React, { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'

function Dropdown({ property, setProperty, dropdownList, type }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full z-10 text-gray-500">
      {/* Filter type */}
      <p className='pl-2'>{type}</p>
      <div
        className="border rounded-lg cursor-pointer py-3 px-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-left flex justify-between">
          {property}
          <BiChevronDown className="inline translate-y-1" />
        </p>

        {/* List of dropdown items  */}
        <div className={isOpen ? 'block absolute translate-y-4 -translate-x-4' : 'hidden'}>
          {dropdownList.map((item, index) => {
            return (
              <div
                className="dropdown-item"
                onClick={() => setProperty(item)}
                key={index}
              >
                {item}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Dropdown
