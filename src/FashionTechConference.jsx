import React, { useState, useEffect } from 'react';
import './FashionTechConference.css';

const FashionTechConference = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Set the conference date - example: May 15, 2025
    const conferenceDate = new Date('May 15, 2025 09:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = conferenceDate - now;
      
      if (distance < 0) {
        clearInterval(timer);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      } else {
        setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

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

      {/* Hero Section */}
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
          
          <div className="countdown">
            <div className="countdown-item">
              <div className="countdown-number">{hours}</div>
              <div className="countdown-label">Hours</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-number">{minutes}</div>
              <div className="countdown-label">Minutes</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-number">{seconds}</div>
              <div className="countdown-label">Seconds</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="nav-arrows">
        <button className="prev-arrow">◀</button>
        <button className="next-arrow">▶</button>
      </div>

      {/* Contact Button */}
      <div className="contact-button">
        <button>📞</button>
      </div>
    </div>
  );
};

export default FashionTechConference;