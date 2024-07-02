
import PhotographerList from "../components/PhotographerList"; // eslint-disable-line no-unused-vars
import { NavLink } from "react-router-dom"; // eslint-disable-line no-unused-vars
import bigLogo from "../assets/img/icons/bigLogo.svg";
import "../assets/styles/header.css";
import "../assets/styles/PhotographersList.css"
import HeaderTemplate from "../Templates/HeaderTemplate"; // eslint-disable-line no-unused-vars

const Home = () => {
  return (
    <>
    <HeaderTemplate 
      logo={
        <NavLink to="/" aria-label="Fisheye Home page">
          <img className="logo" src={bigLogo} alt="Fisheye logo" />
        </NavLink>}
        nav={<h1 tabIndex="0">Nos photographes</h1>}
    />
    <main>
    <section className="photographer_section grid-container home">
    <h2 className="visually-hidden">Liste des photographes</h2>
    <PhotographerList/> 
    </section>
    </main>
    </>
  );
};

export default Home;
