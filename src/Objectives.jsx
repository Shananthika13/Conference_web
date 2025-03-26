import React from 'react';
import './Objectives.css';

const Objectives = () => {
  return (
    <section id="objectives" className="section">
      <div className="container">
        <h2 className="section-title">Objectives of the Conference</h2>
        
        <div className="objectives-content">
          <ul className="objectives-list">
            <li className="objective-item">
              <span className="bullet">•</span>
              <span>To discuss the impact of emerging technologies innovations that are transforming the fashion industry from AI blocks such as 3D printing and wearable technology.</span>
            </li>
            <li className="objective-item">
              <span className="bullet">•</span>
              <span>To foster collaborations by creating network opportunities for industry-professional academics.</span>
            </li>
            <li className="objective-item">
              <span className="bullet">•</span>
              <span>To discuss the aspects of the technology in various facets of the industry like Design, Production &amp; Management.</span>
            </li>
            <li className="objective-item">
              <span className="bullet">•</span>
              <span>To explore the implementation of disruptive technologies on sustainable practices reduce the environmental impact of the fashion industry.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Objectives;