import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import Home from '../components/Home';
// import About from '../components/About';
import PageDetail from '../pages/PageDetail';
// import NotFound from '../components/NotFound';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/:id" element={<PageDetail />} /> 
        {/* <Route path="/about" element={<About />} />
        <Route path="/data" element={<list />} />
        <Route path="*" element={<NotFound />} />  */}
      </Routes>
    </div>
  );
}

export default Router;
