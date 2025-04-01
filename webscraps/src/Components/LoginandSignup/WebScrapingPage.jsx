import React from 'react';
import Navbar from '../Common/Navbar'; // Import the Navbar component
import './WebScrapingPage.css'; // Import the CSS file
import logoImage from '../Assets/WelcomeLogo1.png'; // Ensure the file path is correct

const WebScrapingPage = () => {
  return (
    <div className="webscraping-container">
      {/* Navbar Container with Background */}
      <div
        style={{
          backgroundColor:' #245DAC', // Blue background color
          padding: '10px 20px', // Padding for inner spacing
          borderRadius: '5px', // Rounded corners
          marginBottom: '20px', // Add spacing below the navbar
        }}
      >
        <div className="row">
          {/* Logo */}
          <div className="col-12" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={logoImage}
              alt="Logo"
              style={{
                 // Add spacing between the logo and the navbar
                 width: '20%',
                marginLeft:'4%'
              }}
            />
            <Navbar />
          </div>
        </div>
      </div>
      <div className="webscraping-content-wrapper">
        {/* Content */}
        <h1>Web Scraping</h1>

        {/* Search Box */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter your URL"
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>

        {/* Instruction */}
        <p>Paste Link with <b>( Ctrl + V )</b> Key</p>
      </div>
    </div>
  );
};

export default WebScrapingPage;