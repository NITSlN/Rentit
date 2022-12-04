import React from 'react'

function House({house}) {
    const {name,image,address,bedrooms,bathrooms,surface,price} = house
  return (
    <div className="scale-90 cursor-pointer hover:-translate-y-2 transition-all duration-[.3s] max-w-sm rounded text-left overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={image}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div>
          <strong className="text-xl text-purple-500">${price}</strong>/month
        </div>
        <div className="font-bold text-xl my-2">{name}</div>
        <p className="text-gray-500 text-base">
          {address}
        </p>
        <div className="h-[1px] my-3 bg-gray-300" />
        <div className="flex justify-between text-gray-500">
          <div>{bedrooms} Bedrooms</div>
          <div>{bathrooms} Bathrooms</div>
          <div>{surface}</div>
        </div>
      </div>
    </div>
  )
}

export default House
