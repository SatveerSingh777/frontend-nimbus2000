// CivicReport.jsx
import React from 'react';
import './About.css';
// import Navbar from '../Navbar/Navbar';

const AboutUs = () => {
  return (
    <div className="civic-report-app">
      {/* <Navbar/> */}
      <main className="hero-section">
        <div className="hero-content">
          <h1>About CivicReport</h1>
          <p>Empowering citizens to improve their communities through transparent and efficient civic issue reporting.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="card-icon">📱</div>
            <h3>Easy Reporting</h3>
            <p>Report civic issues in seconds with intuitive map-based interface. No complex forms or confusing processes.</p>
          </div>

          <div className="feature-card">
            <div className="card-icon">👥</div>
            <h3>Community Driven</h3>
            <p>Join thousands of citizens working together to make their neighborhoods better, one report at a time.</p>
          </div>

          <div className="feature-card">
            <div className="card-icon">📊</div>
            <h3>Track Progress</h3>
            <p>Monitor the status of reported issues from submission to resolution. Stay informed every step of the way.</p>
          </div>

          <div className="feature-card">
            <div className="card-icon">🔍</div>
            <h3>Transparent System</h3>
            <p>All reports are public and trackable, ensuring accountability and building trust in the process.</p>
          </div>
        </div>

        <div className="cta-section">
          <h2>Ready to Make a Difference?</h2>
          <p>Your reports help improve the community. Whether it's a pothole, broken streetlight, or any other civic issue, every report counts.</p>
          <button className="cta-button">Start Reporting Issues</button>
        </div>
      </main>

      <footer className="footer2">
        <p>CivicReport is committed to creating transparent, accessible, and effective civic engagement platforms.</p>
      </footer>
    </div>
  );
};

export default AboutUs;