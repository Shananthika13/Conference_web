import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="nav-bar">
      <div className="container nav-container">
        <div className="conference-logo">NCDTF 2025</div>
        <div className="nav-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#speakers" className="nav-link">Speakers</a>
          <a href="#schedule" className="nav-link">Schedule</a>
          <a href="#register" className="nav-link">Register</a>
          <a href="#gallery" className="nav-link">Gallery</a>
          <a href="#sponsors" className="nav-link">Sponsors</a>
        </div>
        <button className="mobile-menu-button">☰</button>
      </div>
    </nav>
  );
};

export default Navigation;