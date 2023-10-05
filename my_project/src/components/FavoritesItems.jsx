import React, { useState } from 'react'

function FavoritesItems({ favorites, addToFavorites, removeFromFavorites }) {
    // const [favorites, setFavorites] = useState([])
    const [value, setValue] = useState('');

    if (!Array.isArray(favorites)) {
        // Handle the case where favorites is not an array
        return null;
    };

    const onSubmit = (e) => {
        e.preventDefault();

        addToFavorites(value);
        // setFavorites([...favorites, value]);

        setValue('');
    };


  return (
    <>
        <form onSubmit={onSubmit}>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Add a favorite destination"
            />
            <button type="Submit"> Add </button>
        </form>

          <ul>
              {favorites.map((favorite, index) => (
                  <li key={index}>
                      {favorite}
                      <button
                          onClick={() => {
                              console.log(`Removing favorite at index ${index}`);
                              removeFromFavorites(index);
                          }}
                      >
                          Remove
                      </button>
                  </li>
              ))}
          </ul>
        
    </>
  )
}

export default FavoritesItems;