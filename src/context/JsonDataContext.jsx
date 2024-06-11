import React, { createContext, useContext, useState, useEffect } from 'react';

const JsonDataContext = createContext(null);

export const useJsonDataContext = () => useContext(JsonDataContext);

export const JsonDataProvider = ({ children }) => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    // Effectue un fetch pour récupérer les données JSON
    fetch(`${process.env.PUBLIC_URL}/data/data.json`)
      .then(response => response.json())
      .then(data => setJsonData(data))
      .catch(error => console.error('Erreur lors du fetch :', error));
  }, []);

  return (
    <JsonDataContext.Provider value={{ jsonData, setJsonData }}>
      {children}
    </JsonDataContext.Provider>
  );
};
