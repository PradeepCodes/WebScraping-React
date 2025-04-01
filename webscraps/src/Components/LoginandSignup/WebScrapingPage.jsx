import React from 'react';
import Navbar from '../Common/Navbar'; // Import the Navbar component
import './WebScrapingPage.css'; // Import the CSS file
//import logoImage from '../Assets/WelcomeLogo1.png'; // Ensure the file path is correct

const WebScrapingPage = () => {
  return (
    <div className="webscraping-container">
      {/* Navbar with Blue Background */}
  <Navbar />
    

      {/* Content */}
      <h1>Web Scraping</h1>

      {/* Search Box */}
      <div className="search-box">
        <input
          type="text"
          placeholder="    Enter your URL"
          className="search-input"
        />
        <button className="search-button">Search</button>
      </div>
      <p>Paste Link with <b>( Ctrl + V )</b> Key</p>
    </div>
  );
};

export default WebScrapingPage;