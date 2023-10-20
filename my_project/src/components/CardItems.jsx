import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function CardItems({ destination, addToFavorites, favorites }) {
  const [data, setData] = useState([]);
  const [favoriteCards, setFavoriteCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter favorite cards whenever favorites or data changes
    const filteredCards = data.filter((destination) =>
      isFavorite(destination)
    );
    setFavoriteCards(filteredCards);
  }, [data, favorites]);

  const isFavorite = (destination) => {
    if (!favorites || !Array.isArray(favorites)) {
      return false;
    }
    return favorites.includes(destination.name.common || 'Country');
  };

  return (
    <>
      {data.map((destination, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={destination.flags?.png || ''}
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
          <Button
            size="small"
            color="primary"
            onClick={() => {
              console.log('Clicked Add to Favorites');
              addToFavorites(destination.name.common || 'Country');
            }}
            disabled={isFavorite(destination)}
          >
            {isFavorite(destination) ? 'Added to Favorites' : 'Add to Favorites'}
          </Button>
        </Card>
      ))}
    </>
  );
}
