import React, { useState, useEffect } from 'react';
import './FashionTechConference.css';
import brochurePDF from './assets/documents/Final Brochure design.pdf';

const FashionTechConference = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadBrochure = () => {
    window.open(brochurePDF, '_blank');
  };

  return (
    <div className="conference-container">
      {/* Navigation Bar */}
      <nav className={`nav-bar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="conference-logo">NCDTF 2025</div>
          <div className="nav-links">
            <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
            <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</a>
            <a href="#theme" className={`nav-link ${activeSection === 'theme' ? 'active' : ''}`}>Theme</a>
            <a href="#papers" className={`nav-link ${activeSection === 'papers' ? 'active' : ''}`}>Call for Papers</a>
            <a href="#dates" className={`nav-link ${activeSection === 'dates' ? 'active' : ''}`}>Important Dates</a>
            <a href="#registration" className={`nav-link ${activeSection === 'registration' ? 'active' : ''}`}>Registration</a>
            <a href="#committee" className={`nav-link ${activeSection === 'committee' ? 'active' : ''}`}>Committee</a>
            <a href="#sponsors" className={`nav-link ${activeSection === 'sponsors' ? 'active' : ''}`}>Sponsors</a>
            <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container hero-content">
          <h1 className="hero-title">National Conference on</h1>
          <h2 className="hero-subtitle">"DISRUPTIVE TECHNOLOGIES IN FASHION"</h2>
          <h3 className="hero-date">19 & 20 September 2025</h3>
          <p className="hero-venue">Department of Apparel and Fashion Design<br />PSG College of Technology, Coimbatore</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={handleDownloadBrochure}>
              Download Brochure
            </button>
            <button className="btn btn-primary">
              Submit Abstract
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About The Conference</h2>
          <div className="about-grid">
            <div className="about-card">
              <h3 className="subsection-title">PSG COLLEGE OF TECHNOLOGY</h3>
              <p className="text-content">
                PSG College of Technology, an ISO 9001:2015 certified institution, is one of the foremost institutions founded by the PSG & Sons' Charities Trust (1926). Established in 1951, the college offers a comprehensive range of academic programs including 21 Undergraduate programs (BE/BTech/BSc), 24 Postgraduate programs (ME/MTech/MSc/MBA/MCA), and research programs as a recognized QIP centre for Postgraduate and PhD programs.
              </p>
            </div>
            <div className="about-card">
              <h3 className="subsection-title">DEPARTMENT OF APPAREL & FASHION DESIGN</h3>
              <p className="text-content">
                The Department of Apparel and Fashion Design offers a unique five-year integrated M.Sc. Fashion Design and Merchandising degree program, pioneering at the university level. Over the past decade, it has cultivated a rich pool of specialists equipped to meet the challenges of the dynamic fashion industry. Our students are trained to think both creatively and conscientiously, preparing them for leadership roles in the fashion sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Theme Section */}
      <section id="theme" className="section bg-light">
        <div className="container">
          <h2 className="section-title">Conference Theme</h2>
          <div className="theme-content">
            <p className="text-content">
              The fashion industry is experiencing a revolutionary transformation through disruptive technologies, particularly in artificial intelligence (AI). These innovations are reshaping every aspect of the industry, from design and production to retail and consumer interaction, while promoting efficiency, sustainability, and innovation.
            </p>
            <div className="theme-grid">
              <div className="theme-card">
                <h4>Design Innovation</h4>
                <p>AI-driven tools and generative design software enabling fashion designers to create innovative, customized clothing based on data trends and consumer preferences.</p>
              </div>
              <div className="theme-card">
                <h4>Supply Chain Optimization</h4>
                <p>Advanced AI systems optimizing the supply chain through accurate demand prediction and waste reduction strategies.</p>
              </div>
              <div className="theme-card">
                <h4>Sustainable Practices</h4>
                <p>Integration of technology to promote sustainable fashion practices and reduce environmental impact.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call for Papers */}
      <section id="papers" className="section">
        <div className="container">
          <h2 className="section-title">Call for Papers</h2>
          <div className="papers-content">
            <p className="text-content">
              We invite authors to submit abstracts for oral and poster presentations, with a maximum of 300 words, in the following areas:
            </p>
            <div className="papers-grid">
              <div className="paper-topic">
                <span className="topic-icon">🔄</span>
                <h4>3D Printing and Fashion Design</h4>
              </div>
              <div className="paper-topic">
                <span className="topic-icon">🤖</span>
                <h4>Artificial Intelligence and Machine Learning in Fashion</h4>
              </div>
              <div className="paper-topic">
                <span className="topic-icon">📱</span>
                <h4>Wearable Technology and Smart Fabrics</h4>
              </div>
              <div className="paper-topic">
                <span className="topic-icon">⛓️</span>
                <h4>Blockchain and Transparency in Fashion</h4>
              </div>
              <div className="paper-topic">
                <span className="topic-icon">🕶️</span>
                <h4>Virtual and Augmented Reality in Fashion Retail</h4>
              </div>
              <div className="paper-topic">
                <span className="topic-icon">🌱</span>
                <h4>Sustainable Fashion and Technological Innovations</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section id="dates" className="section bg-light">
        <div className="container">
          <h2 className="section-title">Important Dates</h2>
          <div className="dates-grid">
            <div className="date-card">
              <div className="date">July 04, 2025</div>
              <div className="date-event">Abstract Submission Deadline</div>
            </div>
            <div className="date-card">
              <div className="date">July 15, 2025</div>
              <div className="date-event">Abstract Acceptance Notification</div>
            </div>
            <div className="date-card">
              <div className="date">August 01, 2025</div>
              <div className="date-event">Full Paper Submission</div>
            </div>
            <div className="date-card">
              <div className="date">August 22, 2025</div>
              <div className="date-event">Registration Deadline</div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration */}
      <section className="section bg-gray">
  <div className="container">
    <h2 className="section-title">Registration</h2>

    {/* REGISTRATION TABLE */}
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

      {/* NOTE */}
      <div className="registration-note">
        <p className="note-title">The registration fee includes:</p>
        <p className="note-content">
          Conference kit, access to all presentations, conference lunch, and refreshments. Each participant will receive conference proceedings, conference souvenir, docket and a certificate.
        </p>
      </div>
    </div>

    {/* MODE OF PAYMENT */}
    <div className="payment-box">
      <h3>Mode of Payment for Registration</h3>
      <ul>
        <li><strong>Payment Type:</strong> Internet/Mobile Banking / GPay / Paytm</li>
        <li><strong>Account Number:</strong> 1481267367</li>
        <li><strong>Account Holder:</strong> PSG Centre for Non formal and Continuing Education (PSG CNCE)</li>
        <li><strong>Bank Name:</strong> Central Bank of India</li>
        <li><strong>Branch Name:</strong> Peelamedu</li>
        <li><strong>IFSC Code:</strong> CBIN0280913</li>
      </ul>
    </div>
    <div className="button-container">
  <button className="register-button">Register Now</button>
</div>

  </div>
</section>




      {/* Committee Section */}
      <section id="committee" className="section bg-light">
        <div className="container">
          <h2 className="section-title">Advisory & Organizing Committee</h2>
          
          <div className="committee-grid">
            <div className="committee-card">
              <h3>Chief Patron</h3>
              <p>Shri L. Gopalakrishnan</p>
              <p className="designation">Managing Trustee</p>
              <p>PSG & Sons' Charities</p>
            </div>

            <div className="committee-card">
              <h3>Patron</h3>
              <p>Dr. P. Prakash</p>
              <p className="designation">Principal</p>
              <p>PSG College of Technology</p>
            </div>

            <div className="committee-card">
              <h3>Co-Patron</h3>
              <p>Dr. G. Chandramohan</p>
              <p className="designation">Vice Principal</p>
              <p>PSG College of Technology</p>
            </div>
          </div>

          <div className="committee-section">
            <h3 className="committee-subtitle">Conference Chair</h3>
            <div className="committee-members">
              <div className="member">
                <p><strong>Dr. K. Sangeetha</strong></p>
                <p>Associate Professor & Head</p>
                <p>Department of Apparel and Fashion Design</p>
              </div>
            </div>
          </div>

          <div className="committee-section">
            <h3 className="committee-subtitle">Organizing Secretaries</h3>
            <div className="committee-members">
              <div className="member">
                <p><strong>Dr. S. Kavitha</strong></p>
                <p>Associate Professor</p>
              </div>
              <div className="member">
                <p><strong>Dr. V. Maheshwari</strong></p>
                <p>Assistant Professor</p>
              </div>
            </div>
          </div>

          <div className="committee-section">
            <h3 className="committee-subtitle">Organizing Committee</h3>
            <div className="committee-members organizing-grid">
              <div className="member">Dr. R. Surjit</div>
              <div className="member">Dr. M. Parthiban</div>
              <div className="member">Dr. R. Rathinamoorthy</div>
              <div className="member">Dr. P. Suntharamoorthy</div>
              <div className="member">Dr. J. Srinivasan</div>
              <div className="member">Dr. T. Ramachandran</div>
              <div className="member">Dr. C. Vigneswaran</div>
              <div className="member">Dr. V. Subramaniam</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="section">
        <div className="container">
          <h2 className="section-title">Sponsorship Opportunities</h2>
          
          <div className="sponsors-content">
            <div className="sponsors-table-container">
              <table className="sponsors-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Amount (₹)</th>
                    <th>Benefits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Platinum Sponsor</td>
                    <td>70,000</td>
                    <td>
                      <ul>
                        <li>Logo placement on all conference materials</li>
                        <li>Exhibition space at prime location</li>
                        <li>4 complimentary registrations</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Gold Sponsor</td>
                    <td>50,000</td>
                    <td>
                      <ul>
                        <li>Logo placement on conference website</li>
                        <li>Exhibition space</li>
                        <li>2 complimentary registrations</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Delegate Kit Sponsor</td>
                    <td>30,000</td>
                    <td>
                      <ul>
                        <li>Logo on delegate kits</li>
                        <li>1 complimentary registration</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Lunch Sponsor (Per Day)</td>
                    <td>75,000</td>
                    <td>
                      <ul>
                        <li>Banner display at lunch area</li>
                        <li>Special mention during lunch</li>
                        <li>2 complimentary registrations</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Refreshments Sponsor (Per Day)</td>
                    <td>25,000</td>
                    <td>
                      <ul>
                        <li>Banner display at refreshment area</li>
                        <li>1 complimentary registration</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-light">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <div className="contact-grid">
            <div className="contact-card">
              <h3>Conference Secretariat</h3>
              <p>Department of Apparel and Fashion Design</p>
              <p>PSG College of Technology</p>
              <p>Coimbatore - 641004</p>
              <p>Tamil Nadu, India</p>
              <p>Email: ncdtf2025@psgtech.ac.in</p>
              <p>Phone: +91-422-2572177</p>
            </div>
            <div className="contact-card">
              <h3>For Queries</h3>
              <div className="contact-person">
                <p><strong>Dr. K. Sangeetha</strong></p>
                <p>Associate Professor & Head</p>
                <p>Department of Apparel and Fashion Design</p>
                <p>Mobile: +91-9942211177</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">NCDTF 2025</div>
            <div className="footer-info">
              <p>Department of Apparel and Fashion Design</p>
              <p>PSG College of Technology</p>
              <p>Coimbatore - 641004, Tamil Nadu, India</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 NCDTF. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FashionTechConference;