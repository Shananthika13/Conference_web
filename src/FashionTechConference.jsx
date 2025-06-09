import React from 'react';
import './FashionTechConference.css';

const FashionTechConference = () => {
  return (
    <div className="conference-container">
      {/* Navigation Bar */}
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

      {/* Hero Section */}
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

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About The Conference</h2>
          
          <div className="about-grid">
            <div>
              <h3 className="subsection-title">PSG COLLEGE OF TECHNOLOGY</h3>
              <p className="text-content">
              PSG College of Technology, an ISO 9001:2015 certified institution is one of the
foremost institutions founded by the PSG & Sons’ Charities Trust (1926). The College
was established in the year 1951. The College offers 21 Undergraduate programmes
including BE / BTech / BSc, 24 Postgraduate programmes including ME / MTech / MSc (5
year integrated) / MSc (2 year) / MBA / MCA and research programmes with the
college being a recognized QIP centre for Postgraduate and PhD programmes.
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

      {/* Conference Theme */}
      <section className="section bg-gray">
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

      {/* Objectives */}
      <section className="section">
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

      {/* Call for Papers */}
      <section className="section bg-gray">
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

      {/* Important Dates */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Important Dates</h2>
          
          <div className="dates-table-container">
            <table className="dates-table">
              <thead className="table-header">
                <tr>
                  <th>Event</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-row">
                  <td>Submission of Abstracts</td>
                  <td>July 04, 2025</td>
                </tr>
                <tr className="table-row alt-row">
                  <td>Acceptance of Abstracts</td>
                  <td>July 15, 2025</td>
                </tr>
                <tr className="table-row">
                  <td>Full Paper Submission</td>
                  <td>Aug 01, 2025</td>
                </tr>
                <tr className="table-row alt-row">
                  <td>Registration</td>
                  <td>Aug 08, 2025</td>
                </tr>
                <tr className="table-row">
                  <td>Last date for Registration</td>
                  <td>Aug 22, 2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Registration */}
      <section className="section bg-gray">
        <div className="container">
          <h2 className="section-title">Registration</h2>
          
          <div className="registration-table-container">
            <table className="registration-table">
              <thead className="table-header">
                <tr>
                  <th>Category</th>
                  <th>Early Bird (Before Aug 08)</th>
                  <th>Regular (After Aug 08)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-row">
                  <td>Industry Professionals</td>
                  <td>₹ 5,000</td>
                  <td>₹ 6,000</td>
                </tr>
                <tr className="table-row alt-row">
                  <td>Faculty/Research Scholars</td>
                  <td>₹ 3,000</td>
                  <td>₹ 3,500</td>
                </tr>
                <tr className="table-row">
                  <td>UG/PG Students</td>
                  <td>₹ 1,500</td>
                  <td>₹ 1,750</td>
                </tr>
              </tbody>
            </table>
            
            <div className="registration-note">
              <p className="note-title">The registration fee includes:</p>
              <p className="note-content">Conference kit, access to all presentations, conference lunch, and refreshments. Each participant will receive conference proceedings, conference souvenir, docket and a certificate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Sponsorship Opportunities</h2>
          
          <div className="sponsor-table-container">
            <table className="sponsor-table">
              <thead className="table-header">
                <tr>
                  <th>Type</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-row">
                  <td>Platinum Sponsor</td>
                  <td>₹ 70,000.00</td>
                </tr>
                <tr className="table-row alt-row">
                  <td>Delegate Buffet Lunch (Per Day)</td>
                  <td>₹ 75,000.00</td>
                </tr>
                <tr className="table-row">
                  <td>Delegate Badges</td>
                  <td>₹ 10,000.00</td>
                </tr>
                <tr className="table-row alt-row">
                  <td>Delegate Refreshments (Per Day)</td>
                  <td>₹ 25,000.00</td>
                </tr>
                <tr className="table-row">
                  <td>Mementoes</td>
                  <td>₹ 25,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section bg-gray">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          
          <div className="contact-container">
            <div className="contact-card">
              <p className="contact-info"><strong>Accommodation:</strong> Can be arranged in College Guest house and College Hostel available on chargeable basis.</p>
              <p className="contact-info"><strong>Phone:</strong> +91 4225692392, +91 9940224083</p>
              <p className="contact-info"><strong>E-mail:</strong> ncdtf25_afd@psgtech.ac.in</p>
              
              <div className="committee-info">
                <h3 className="committee-title">Organizing Committee</h3>
                <p><strong>Chief Patron:</strong> Shri L. Gopalakrishnan</p>
                <p><strong>Patron:</strong> Dr. P. Prakash</p>
                <p><strong>Convener:</strong> Dr. D. Vijayalakshmi</p>
                <p><strong>Organizing Secretaries:</strong> Dr. Nirmala Varghese, Dr. Mariyam Adnan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <p className="footer-text">Organized by</p>
          <p className="footer-department">Department of Apparel & Fashion Design</p>
          <p className="footer-college">PSG College of Technology, Coimbatore - 04</p>
          
          <div className="footer-copyright">
            <p>© 2025 NCDTF. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FashionTechConference;