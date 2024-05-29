import React from 'react';
import Header from './components/Header';
// import Footer from './components/Footer';
import Router from './router/Router';
import './app.css'
import './styles/main.css'

const App = () => {
  return (
    <>
      <Header />
      <main>
      <Router />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
