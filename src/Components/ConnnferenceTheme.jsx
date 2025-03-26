import React from 'react';
import './ConferenceTheme.css';

const ConferenceTheme = () => {
  return (
    <section id="theme" className="section bg-gray">
      <div className="container">
        <h2 className="section-title">Conference Theme</h2>
        
        <div className="theme-content">
          <p className="text-content">
            Disruptive technologies in fashion, especially those related to artificial intelligence (AI), are revolutionizing the industry by enhancing efficiency, sustainability, and innovation. These technologies influence all stages of fashion—from design to retail—transforming how brands interact with consumers and create products.
          </p>
          <p className="text-content">
            In design, AI-driven tools like generative design software help fashion designers create innovative, customized clothing based on data trends and consumer preferences. AI also optimizes the supply chain, predicting demand more accurately, and reducing overproduction and waste.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConferenceTheme;