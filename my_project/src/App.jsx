import React, { useState, useEffect } from 'react'
import ButtonAppBar from './components/Appbar';
import AppRoutes from './components/AppRoutes';
import Destinations from './components/Destinations';
import Favorites from './components/Favorites';
import './App.css'

function App() {
  const [favorites, setFavorites] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        console.log("This fetch is working!", data)
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <div id="container">
        <div id="navbar">
          <ButtonAppBar />
        </div>
      </div>

      <div>
        <AppRoutes data={data} favorites={favorites} setFavorites={setFavorites} />
      </div>
    </>
  );
}

export default App;
