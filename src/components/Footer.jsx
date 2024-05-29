import React from 'react';
import logo from '../assets/img/logo.svg'
import '../styles/footer.css'

const Footer = () => {
  return (
      <footer>
      <img src={logo} alt="logo" />
      <p>© 2020. All rights reserved</p>
      </footer>
  );
}

export default Footer;
