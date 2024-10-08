// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <div>
    <h2>Welcome to the Plant Store</h2>
    <p>Your one-stop shop for all kinds of houseplants!</p>
    <Link to="/products">
      <button>Get Started</button>
    </Link>
  </div>
);

export default LandingPage;
