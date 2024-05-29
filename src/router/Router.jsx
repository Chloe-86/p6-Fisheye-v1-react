import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import Home from '../components/Home';
import About from '../components/About';
import Template from '../pages/Template';
import NotFound from '../components/NotFound';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/data" element={<list />} />
        <Route path="/pages/:id" element={<Template />} /> 
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </div>
  );
}

export default Router;
