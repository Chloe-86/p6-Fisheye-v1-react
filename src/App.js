import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RouterComponent from './router/Router';
import './app.css'
import './styles/main.css'

const App = () => {
  return (
    <>
      <Header />
      <main>
      <RouterComponent />
      </main>
      <Footer />
    </>
  );
}

export default App;
