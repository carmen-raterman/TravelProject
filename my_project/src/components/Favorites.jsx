import React, { useState } from 'react';
import FavoritesItems from './FavoritesItems';
import CardItems from './CardItems';

function Favorites({ favorites, setFavorites }) {
  // const [favorites, setFavorites] = useState([]);
  const [isFavoritesPage, setIsFavoritesPage] = useState(true);

  const addToFavorites = (value) => {
    console.log(`Adding to favorites: ${value}`)
    setFavorites([...favorites, value]);
  };

  const removeFromFavorites = (index) => {
    console.log(`Removing favorite at index ${index}`);
    const newFavorites = [...favorites];
    newFavorites.splice(index, 1);
    setFavorites(newFavorites);
  };

  // const clearFavorites = () => {
  //   console.log(`Clearing favorites from clearFavorites function`)
  //   setFavorites([]);
  // };

  return (
    <>
      <div>Favorites</div>
      <button onClick={removeFromFavorites}>Clear Favorites</button>
      {isFavoritesPage && (
        <>
          <CardItems addToFavorites={addToFavorites} favorites={favorites} />
          <FavoritesItems favorites={favorites} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} />
        </>
      )}
    </>
  );
}

export default Favorites;
