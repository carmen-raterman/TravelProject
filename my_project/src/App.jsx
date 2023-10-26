import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";
import ButtonAppBar from "./components/Appbar"
import Hero from "./components/Hero"
import { Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material';

const Cards = ({ destinations, addToFavorites, removeFromFavorites, isFavoriteFunction }) => {
  const location = useLocation();

  const isFavorites = location.pathname === "/favorites";

  return (
    <>
      {destinations.map((destination, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={destination.flags?.png || ""}
              alt={destination.name?.common || 'Country'}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {destination.name?.common || 'Country'}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {`Capital: ${destination.capital || 'N/A'}`}
              </Typography>
            </CardContent>
          </CardActionArea>
          {isFavorites ? (
            <Button
              size="small"
              color="primary"
              onClick={() => {
                console.log('Clicked Remove from Favorites');
                removeFromFavorites(destination.name?.common || 'Country');
              }}
            >
              Remove from Favorites
            </Button>
          ) : (
            <Button
              size="small"
              color="primary"
              onClick={() => {
                console.log('Clicked Add to Favorites');
                addToFavorites(destination.name.common || 'Country');
              }}
              disabled={isFavoriteFunction(destination)}
            >
              {isFavoriteFunction(destination) ? 'Added to Favorites' : 'Add to Favorites'}
            </Button>

            // <Button
            //   size="small"
            //   color="primary"
            //   onClick={() => {
            //     console.log('Clicked Add to Favorites');
            //     addToFavorites(destination.name.common || 'Country'); // Pass the name here
            //   }}
            //   disabled={isFavorite(destination)}
            // >
            //   {isFavorite(destination) ? 'Added to Favorites' : 'Add to Favorites'}
            // </Button>

            // <Button
            //   size="small"
            //   color="primary"
            //   onClick={() => {
            //     console.log('Clicked Add to Favorites');
            //     addToFavorites(destination.name?.common || 'Country');
            //   }}
            // >
            //   Add to Favorites
            // </Button>
          )}
        </Card>
      ))}
    </>
  );
};

function App() {
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setData(data);
    };

    getData();
  }, []);

  const isFavoriteFunction = (destination) => {
    return favorites.some((d) => d.name.common === destination.name?.common);
  };
  

  const addToFavorites = (destination) => {
    // Find the selected destination object from the data array
    const selectedDestination = data.find((d) => d.name.common === destination);
  
    if (selectedDestination) {
      // Check if it's not already in the favorites
      if (!favorites.some((d) => d.name.common === destination)) {
        setFavorites([...favorites, selectedDestination]);
      }
    }
  };
  
  // const addToFavorites = (destination) => {
  //   // Find the selected destination object from the data array
  //   const selectedDestination = data.find((d) => d.name.common === destination);

  //   if (selectedDestination) {
  //     // Check if it's not already in the favorites
  //     if (!favorites.some((d) => d.name.common === destination)) {
  //       setFavorites([...favorites, selectedDestination]);
  //     }
  //   }
  // };

  const removeFromFavorites = (destination) => {
    // Filter out the destination to be removed from favorites
    const updatedFavorites = favorites.filter((d) => d.name.common !== destination);
    setFavorites(updatedFavorites);
  };


  return (
    <>
      <ButtonAppBar />
      <Routes>
        <Route element={<Hero />} index />
        <Route path="/home" element={<Hero />} />
        <Route path="/" element={<Hero />} />
        <Route
          path="/destinations"
          element={
            <Cards destinations={data} isFavoriteFunction={isFavoriteFunction} favorites={favorites} removeFromFavorites={removeFromFavorites} addToFavorites={addToFavorites} />
          }
        />
        <Route
          path="/favorites"
          element={
            <Cards
              destinations={favorites}
              favorites={favorites}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
              isFavoriteFunction={isFavoriteFunction}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;