import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Destinations from './Destinations';
import Favorites from './Favorites';
// import Contact from './Contact';
import Home from './Home'
// import ButtonAppBar from './Appbar';

function AppRoutes({ data, favorites, setFavorites }) {
  return (
    <>
      {/* <ButtonAppBar /> */}
      <Routes>
        <Route element={<Home />} index />
        <Route path="/home" element={<Home />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} setFavorites={setFavorites} />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/destinations" element={<Destinations data={data} favorites={favorites} setFavorites={setFavorites} />} />
      </Routes>
    </>

  );
}

export default AppRoutes;
