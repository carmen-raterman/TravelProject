import React from 'react'
import CardItems from './CardItems'

function Cards({ favorites, addToFavorites, data, destinations }) {
  return (
    <>
        <CardItems data={data} favorites={favorites} addToFavorites={addToFavorites} />

    </>
  )
}

export default Cards;