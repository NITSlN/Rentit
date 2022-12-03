import React, { createContext, useEffect, useState } from 'react'

//importing data
import { housesData } from '../data'

export const HouseContext = createContext()

const HouseContextProvider = ({ children }) => {

  const [houses, setHouses] = useState(housesData)
  const [country, setCountry] = useState('All')
  const [countries, setCountries] = useState([])
  const [property, setProperty] = useState('All')
  const [properties, setProperties] = useState([])
  const [price, setPrice] = useState('All')
  const [date, setDate] = useState('All')

  const [loading, setLoading] = useState(false)

  // Getting all countries
  useEffect(() => {
    // return all countries
    const allCountries = houses.map((house) => {
      return house.country
    })

    // remove duplicates
    const uniqueCountries = ['All', ...new Set(allCountries)]

    // set countries state
    setCountries(uniqueCountries)
  }, [])

  // Getting all property type
  useEffect(() => {
    // return only countries
    const allProperties = houses.map((house) => {
      return house.type
    })

    // remove duplicates
    const uniqueProperties = ['All', ...new Set(allProperties)]

    // set countries state
    setProperties(uniqueProperties)
  }, [])

  // Checks if filtered is applied or not
  const isDefault = (str) => {
    if (str === 'All') return true
    return false
  }
  const handleClick = () => {
    setLoading(true)
    
    var filteredHouse = housesData
    // if price filtered is applied
    if (!isDefault(price)) {
      const priceArr = price.split(' - ')
      const minPrice = parseInt(priceArr[0])
      const maxPrice = parseInt(priceArr[1])

      filteredHouse = filteredHouse.filter((house) => {
        const housePrice = parseInt(house.price)
        if (housePrice <= maxPrice && housePrice >= minPrice) return house
      })
      console.log('price')
    }
    // if country filtered is applied
    if (!isDefault(country) && filteredHouse.length > 1) {
      filteredHouse = filteredHouse.filter((house) => {
        return house.country === country
      })
      console.log('country')
    }
    // if property filtered is applied
    if (!isDefault(property) && filteredHouse.length > 1) {
      filteredHouse = filteredHouse.filter((house) => {
        return house.type === property
      })
      console.log('prop')
    }
    // if date filtered is applied

    if (!isDefault(date)) {
      filteredHouse = filteredHouse.filter((house) => {
        const houseDate = new Date(house.date)
        const moveInDate = new Date(date)
        const oneDayDuration = 86400000

        if (
          houseDate < moveInDate ||
          houseDate - moveInDate < oneDayDuration * 10 // if house is available after 10 days of move in
        )
          return house
      })
    }
    console.log(filteredHouse)
    setHouses(filteredHouse)
    setLoading(false)
  }
  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        handleClick,
        houses,
        loading,
        date,
        setDate,
      }}
    >
      {children}
    </HouseContext.Provider>
  )
}

export default HouseContextProvider
