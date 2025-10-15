// Home.jsx
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-heading">Welcome to CivicReport</h1>
        <p className="hero-para">
            Empowering citizens to report and resolve civic issues in their communities quickly and efficiently.
        </p>
        <button className="hero-button">Report Issue +</button>
      </div>
    </div>
  );
};

export default Home;