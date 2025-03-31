import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome!</h1>
      <p>Thank you for signing up. We're glad to have you here!</p>
      <button onClick={() => navigate('/')}>Go Back</button>
    </div>
  );
};

export default WelcomePage;