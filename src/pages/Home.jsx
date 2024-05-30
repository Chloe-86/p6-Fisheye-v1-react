import React from "react";
import HeadePhotographerList from "../components/HeaderPhotographerList";
// import Banner from "./Banner";
import Header from '../components/Header';

const Home = () => {
  return (
    <>
     <Header />
    <section className="photographer_section grid-container home">
    <HeadePhotographerList /> 
    </section>
   
    </>
  );
};

export default Home;
