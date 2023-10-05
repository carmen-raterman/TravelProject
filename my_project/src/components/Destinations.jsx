import React, { useState } from 'react'
import Cards from './Cards';

function Destinations({ data, favorites, setFavorites }) {
  // const [favorites, setFavorites] = useState([]);
  
  const addToFavorites = (destination) => {
    setFavorites([...favorites, destination]);
  };

  return (
    <>
        <div>Choose your destination:</div>
        <Cards favorites={favorites} data={data} addToFavorites={addToFavorites} />
    </>
  )
}

export default Destinations;
