import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginandSignup from './Components/LoginandSignup/LoginandSignup';
import WelcomePage from './Components/LoginandSignup/WelcomePage';
import WebScrapingPage from './Components/LoginandSignup/WebScrapingPage'; // Import the new page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginandSignup />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/webscraping" element={<WebScrapingPage />} /> {/* Add the new route */}
      </Routes>
    </Router>
  );
}

export default App;
