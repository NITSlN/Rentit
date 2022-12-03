import React, { useContext } from 'react'
import { HouseContext } from '../context/HouseContext'
import House from './House'

function HouseList() {
  const { houses, loading } = useContext(HouseContext)
  return (
    <section className="mb-20">
      {loading ? (
        <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
        <div className="border-t-transparent border-solid animate-spin  rounded-full border-violet-400 border-8 h-24 w-24"></div>
    </div>
      ) : (
        houses.length<1?<p className='text-center p-12 text-2xl'> Nothing Found!</p>: (
          <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
            {houses.map((house, index) => {
              return (
                <div key={index}>
                  <House house={house} />
                </div>
              )
            })}
          </div>
        </div>
        )
      )}
    </section>
  )
}

export default HouseList
