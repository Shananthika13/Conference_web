import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About The Conference</h2>
        
        <div className="about-grid">
          <div>
            <h3 className="subsection-title">PSG COLLEGE OF TECHNOLOGY</h3>
            <p className="text-content">
              PSG College of Technology, an ISO 9001:2008 certified institution is one of the foremost institutions founded by PSG & Sons Charities Trust (1926). The College was established in the year 1951. The College has 15 engineering and technology departments. As a pioneer of educational innovations in the country, the college offers courses across engineering and science at Bachelors, Masters, M.Phil, MS, and Ph.D levels on full time and part-time basis.
            </p>
          </div>
          
          <div>
            <h3 className="subsection-title">DEPARTMENT OF APPAREL & FASHION DESIGN</h3>
            <p className="text-content">
              Department of Apparel and Fashion Design offers a five-year integrated M.Sc. Fashion Design and Merchandising degree, first of its kind at university level. Over the past 10 years, it has nurtured a large resource of specialists who can take the challenges of the dynamic fashion industry. The students are trained to think creatively and conscientiously.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;