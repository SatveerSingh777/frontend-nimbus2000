import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span className="logo">📍 CivicReport</span>
      </div>
      <ul className="nav-links">
        <li><a href="#issues">All Issues</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      <div className="nav-icon">
        <span className="star">⭐</span>
      </div>
    </nav>
  )
}

export default Navbar
