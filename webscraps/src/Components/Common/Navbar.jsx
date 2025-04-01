import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; // Create a CSS file for the navbar styles

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <ul className="navbar-list">
      <li onClick={() => navigate('/')}>Home</li>
      <li>Webscraping</li>
      <li>Contact Us</li>
      <li onClick={() => navigate('/')}>Signout</li>
    </ul>
  );
};

export default Navbar;