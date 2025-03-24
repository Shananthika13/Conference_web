import React from 'react';
import './FashionTechConference.css';

const FashionTechConference = () => {
  return (
    <div className="fashion-tech-container">
      {/* Navigation */}
      <nav className="navigation">
        <div className="logo">FASHIONX</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#speakers">Speakers</a>
          <a href="#schedules">Schedules</a>
          <a href="#tickets">Tickets</a>
          <a href="#register">Register</a>
          <a href="#gallery">Gallery</a>
          <a href="#sponsors">Sponsors</a>
        </div>
      </nav>

      {/* Hero Section - Full Screen */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Biggest Fashion Tech Conference.</h1>
          
          <div className="event-details">
            <div className="date-location">
              <span className="calendar-icon">📅</span>
              <span>May 15th to 18th</span>
            </div>
            <div className="date-location">
              <span className="location-icon">📍</span>
              <span>New York City, USA.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Space with Buttons */}
      <div className="dark-space">
        <div className="action-buttons">
          <button className="action-button brochure-button">Download Brochure</button>
          <button className="action-button abstract-button">Submit Abstract</button>
        </div>
      </div>

      {/* Pink Background Section */}
      <div className="pink-section">
        <div className="contact-container">
          <h2>Get in Touch</h2>
          <div className="contact-options">
            <div className="contact-option">
              <div className="contact-icon">📧</div>
              <h3>Contact Us</h3>
              <p>info@fashionx.com</p>
            </div>
            <div className="contact-option">
              <div className="contact-icon">🛠️</div>
              <h3>Technical Support</h3>
              <p>support@fashionx.com</p>
            </div>
          </div>
        </div>
      </div>

      

      {/* Contact Button */}
      <div className="contact-button">
        <button>📞</button>
      </div>
    </div>
  );
};

export default FashionTechConference;