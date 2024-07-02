import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // eslint-disable-line no-unused-vars
import App from './App';  // eslint-disable-line no-unused-vars
// import reportWebVitals from './reportWebVitals';
import { JsonDataProvider } from './context/JsonDataContext'; // eslint-disable-line no-unused-vars


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <JsonDataProvider>
    <App />
    </JsonDataProvider>
  </BrowserRouter>
);


// reportWebVitals();