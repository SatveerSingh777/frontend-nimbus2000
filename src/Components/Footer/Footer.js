
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="logo">📍 CivicReport</span>
        </div>
        <div className="footer-contact">
          <p className="helpline">Helpline: <a href="tel:+18001234567">1-800-123-4567</a></p>
          <p className="copyright">&copy; 2025 CivicReport. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;