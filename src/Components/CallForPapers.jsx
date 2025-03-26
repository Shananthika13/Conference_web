import React from 'react';
import './CallForPapers.css';

const CallForPapers = () => {
  return (
    <section id="papers" className="section bg-gray">
      <div className="container">
        <h2 className="section-title">Call for Papers</h2>
        
        <div className="papers-content">
          <p className="text-content">
            Authors are invited to submit abstracts for oral and Abstract Design with a maximum of 300 words in the following areas:
          </p>
          
          <ul className="papers-list">
            <li className="paper-item">
              <span className="bullet">•</span>
              <span>3D Printing and Fashion Design</span>
            </li>
            <li className="paper-item">
              <span className="bullet">•</span>
              <span>Artificial Intelligence and Machine Learning in Fashion</span>
            </li>
            <li className="paper-item">
              <span className="bullet">•</span>
              <span>Wearable Technology and Smart Fabrics</span>
            </li>
            <li className="paper-item">
              <span className="bullet">•</span>
              <span>Blockchain and Transparency in Fashion</span>
            </li>
            <li className="paper-item">
              <span className="bullet">•</span>
              <span>Virtual and Augmented Reality in Fashion Retail</span>
            </li>
            <li className="paper-item">
              <span className="bullet">•</span>
              <span>Sustainable Fashion and Technological Innovations</span>
            </li>
            <li className="paper-item">
              <span className="bullet">•</span>
              <span>E-Commerce and Digital Transformation in Fashion</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CallForPapers;