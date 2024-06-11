import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { JsonDataProvider } from './context/JsonDataContext';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <JsonDataProvider>
    <App />
    </JsonDataProvider>
  </BrowserRouter>
);


// reportWebVitals();