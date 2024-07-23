import Layout from '@components/layout/layout';
import Detail from '@pages/Detail/detail';
import Favorites from '@pages/Favorites/favorites';
import Home from '@pages/home';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Route>
    </Routes>
  );
};

export default App;
