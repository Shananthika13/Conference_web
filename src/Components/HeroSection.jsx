import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="container hero-content">
        <h1 className="hero-title">National Conference on</h1>
        <h2 className="hero-subtitle">"DISRUPTIVE TECHNOLOGIES IN FASHION"</h2>
        <h3 className="hero-date">19 & 20 September 2025</h3>
        
        <div className="hero-buttons">
          <button className="btn btn-pink">
            DOWNLOAD BROCHURE
          </button>
          <button className="btn btn-purple">
            SUBMIT ABSTRACT
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;