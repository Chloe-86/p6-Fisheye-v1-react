import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import PageDetail from '../pages/PageDetail';
import NotFound from '../components/NotFound';
import { useJsonDataContext } from '../context/JsonDataContext';

const Router = () => {
  const { jsonData } = useJsonDataContext();

  // Si les données ne sont pas encore disponibles, affichez un message de chargement
  if (!jsonData) {
    return <div aria-live="polite">Loading...</div>;
  }

  // Une fois que les données sont disponibles, retournez le composant de routage avec les routes
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/:id" element={<PageDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;
