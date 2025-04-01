import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from '../Common/Navbar'; // Import the Navbar component
import './WelcomePage.css'; // Import the CSS file
import componentImage from '../Assets/Computing.png'; // Ensure the file path is correct
import WelcomeLogo from '../Assets/WelcomeLogo.png'; // Ensure the file path is correct

const WelcomePage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="welcome-container">
      {/* Navbar */}
      <Navbar />

      {/* Paragraph on the Left */}
      <div className="text-container">
        <img src={WelcomeLogo} alt="WelcomeLogo" className="Welcomelogo" />
        <h1>Welcome to Web Scraping</h1>
        <p>
          Web scraping refers to the process of extracting data from<br />
          websites using automated tools or scripts. It is commonly<br />
          done to gather large amounts of data that would be<br />
          time-consuming to collect manually.<br />
        </p>
        <p>
          Web scraping involves parsing the HTML or XML content of<br />
          web pages to find specific information, such as text, links,<br />
          images, or other elements, and then storing that data<br />
          for further analysis or use.<br />
        </p>
        <button className="continue-button" onClick={() => navigate('/webscraping')}>
          Continue
        </button>
      </div>

      {/* Image on the Right */}
      <div className="image-container">
        <img src={componentImage} alt="Component" className="component-image" />
      </div>
    </div>
  );
};

export default WelcomePage;