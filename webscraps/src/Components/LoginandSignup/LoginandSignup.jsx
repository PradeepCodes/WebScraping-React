import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginandSignup.css';

import user_icon from '../Assets/user.png';
import password_icon from '../Assets/hide.png';
import email_icon from '../Assets/email.png';
import spiderlogo from '../Assets/Scraplogo.png';

const LoginandSignup = () => {
  const [action, setAction] = useState("Signup");
  const [isLostPasswordChecked, setIsLostPasswordChecked] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignupClick = () => {
    console.log("Signup button clicked");
    navigate('/welcome'); // Navigate to the Welcome page
  };

  const handleLoginClick = () => {
    setAction("Login");
    console.log("Login button clicked");
  };

  return (
    <div className="container">
      {/* Add the spider logo */}
      <div className="spider-logo">
        <img src={spiderlogo} alt="Spider Logo" />
      </div>
      <div className="header">
        <div><h1>Create your account</h1></div>
      </div>
      <div className="inputs">
        <div className="input">
          <label htmlFor="name">Name</label>
          <div className="input-field">
            <img src={user_icon} alt="User Icon" />
            <input id="name" type="text" placeholder="Enter your name" />
          </div>
        </div>
        <div className="input">
          <label htmlFor="email">Email Address</label>
          <div className="input-field">
            <img src={email_icon} alt="Email Icon" />
            <input id="email" type="email" placeholder="Enter your email" />
          </div>
        </div>
        <div className="input">
          <label htmlFor="password">Password</label>
          <div className="input-field">
            <img src={password_icon} alt="Password Icon" />
            <input id="password" type="password" placeholder="Enter your password" />
          </div>
        </div>
      </div>
      <div className="forgot-password">
        <label>
          <input
            type="checkbox"
            checked={isLostPasswordChecked}
            onChange={(e) => setIsLostPasswordChecked(e.target.checked)}
          />
          &nbsp;By Signing up, you agree to our <button className="link-button" onClick={() => alert('Terms of Conditions')}>Terms of Conditions</button>
        </label>
      </div>
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={handleSignupClick} // Navigate to Welcome page
        >
          Signup
        </div>
        <div
          className={action === "Signup" ? "submit gray" : "submit"}
          onClick={handleLoginClick}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginandSignup;