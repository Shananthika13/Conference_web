import React, { useState, useEffect } from 'react';
import './FashionTechConference.css';
import brochurePDF from './assets/documents/Final Brochure design.pdf';

const FashionTechConference = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false); // Close mobile menu when a link is clicked
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="conference-container">
      {/* Navigation Bar */}
      <nav className={`nav-bar ${isScrolled ? 'scrolled' : ''}`}>
          <div className="nav-brand">
            <img src="/psg_logo.png" alt="PSG Logo" className="nav-logo" />
            <div className="conference-name">NCDTF 2025</div>
          </div>
        <div className="container nav-container">
          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
          <div className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
            <a href="#home" onClick={handleNavLinkClick} className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
            <a href="#about" onClick={handleNavLinkClick} className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</a>
            <a href="#committee" onClick={handleNavLinkClick} className={`nav-link ${activeSection === 'committee' ? 'active' : ''}`}>Committee</a>
            <a href="#theme" onClick={handleNavLinkClick} className={`nav-link ${activeSection === 'theme' ? 'active' : ''}`}>Theme</a>
            <a href="#papers" onClick={handleNavLinkClick} className={`nav-link ${activeSection === 'papers' ? 'active' : ''}`}>Call for Papers</a>
            <a href="#dates" onClick={handleNavLinkClick} className={`nav-link ${activeSection === 'dates' ? 'active' : ''}`}>Important Dates</a>
            <a href="#registration" onClick={handleNavLinkClick} className={`nav-link ${activeSection === 'registration' ? 'active' : ''}`}>Registration</a>
            <a href="#sponsors" onClick={handleNavLinkClick} className={`nav-link ${activeSection === 'sponsors' ? 'active' : ''}`}>Sponsors</a>
            <a href="#contact" onClick={handleNavLinkClick} className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container hero-content">
          <div className="hero-title-group fade-in-up-0">
            <h1 className="hero-title">National Conference on</h1>
            <h2 className="hero-subtitle">"DISRUPTIVE TECHNOLOGIES IN FASHION"</h2>
          </div>
          <h3 className="hero-date fade-in-up-1">19 & 20 September 2025</h3>
          <p className="hero-venue fade-in-up-2">Department of Apparel and Fashion Design<br />PSG College of Technology, Coimbatore</p>
          <div className="hero-buttons fade-in-up-3">
            <button className="btn-primary" onClick={handleDownloadBrochure}>
              Download Brochure
            </button>
            <button className="btn-primary" onClick={() => window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdHWy5NHK16WlyP6rrO2_hOnzTCncLNST8uhwiJpAn2gP0c0Q/viewform'}>
              Submit Abstract
            </button>
            <button className="btn-primary" onClick={() => window.location.href = 'https://docs.google.com/document/d/1g6wtTWJL1f1S00SyNtLgsqa5KkEAbAQw/edit?usp=sharing&ouid=116410768831522929067&rtpof=true&sd=true'}>
              Abstract Template
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
      The conference on <strong>Disruptive Technologies in Fashion – NCDTF 25</strong> explores how innovations like AI-driven trend forecasting, sustainable materials, blockchain, and 3D printing are transforming the fashion industry. From design to consumer experiences, technologies such as wearables and AR are driving efficiency, sustainability, and personalization in a digital, eco-conscious world.
      </p>
      <div className="theme-grid">
        <div className="theme-card">
          <h4>AI & Trend Forecasting</h4>
          <p>AI-driven insights are enabling accurate forecasting of fashion trends, helping designers stay ahead and meet consumer demand effectively.</p>
        </div>
        <div className="theme-card">
          <h4>Blockchain & 3D Printing</h4>
          <p>Blockchain enhances transparency in the supply chain, while 3D printing supports on-demand, waste-reducing production models.</p>
        </div>
        <div className="theme-card">
          <h4>Wearables & AR</h4>
          <p>Wearable technology and augmented reality are transforming how consumers experience and interact with fashion, blending digital and physical worlds.</p>
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
              We invite authors to submit abstracts online in the prescribed format with a maximum of 300 words, in the following areas. <strong>Selected full papers will be published as Conference Proceedings with ISBN Number. Certificates will be given to all the authors.</strong>
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
              <div className="paper-topic">
                <span className="topic-icon">🛍️</span>
                <h4>E-Commerce and Digital Transformation in Fashion</h4>
              </div>
              <div className="paper-topic">
                <span className="topic-icon">📊</span>
                <h4>AI in Trend Forecasting</h4>
              </div>
              <div className="paper-topic">
                <span className="topic-icon">🎭</span>
                <h4>The Rise of Virtual Runways & Changing Fashion Shows</h4>
              </div>
              <div className="paper-topic">
                <span className="topic-icon">♻️</span>
                <h4>Circular Fashion for a Sustainable Clothing Economy</h4>
              </div>
              <div className="paper-topic">
                <span className="topic-icon">🎨</span>
                <h4>The Role of NFTs and Virtual Clothing</h4>
              </div>
              <div className="paper-topic">
                <span className="topic-icon">👗</span>
                <h4>Digital Fashion</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section id="dates" className="section bg-light">
        <div className="container">
          <h2 className="section-title">Important Dates</h2>
          <div className="dates-timeline">
            <div className="timeline-item">
              <div className="date">July 30, 2025</div>
              <div className="date-event">Submission of Abstracts</div>
            </div>
            <div className="timeline-connector"></div>
            <div className="timeline-item">
              <div className="date">Aug 10, 2025</div>
              <div className="date-event">Acceptance of Abstracts</div>
            </div>
            <div className="timeline-connector"></div>
            <div className="timeline-item">
              <div className="date">Aug 25, 2025</div>
              <div className="date-event">Full Paper Submission</div>
            </div>
            <div className="timeline-connector"></div>
            <div className="timeline-item">
              <div className="date">Sep 01, 2025</div>
              <div className="date-event">Registration starts on</div>
            </div>
            <div className="timeline-connector"></div>
            <div className="timeline-item">
              <div className="date">Sep 12, 2025</div>
              <div className="date-event">Last Date for Registration</div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration */}
      <section id="registration"className="section bg-gray">
  <div className="container">
    <h2 className="section-title">Registration</h2>


      {/* Registration */}
      <div className="registration-table-container">
      <table className="registration-table">
        <thead className="table-header">
          <tr>
            <th>Category</th>
            <th>Fees(INR)</th>
            
          </tr>
        </thead>
        <tbody>
          <tr className="table-row">
            <td>Industry Professionals</td>
            <td>₹ 5,000</td>
            
          </tr>
          <tr className="table-row alt-row">
            <td>Faculty/Research Scholars</td>
            <td>₹ 3,000</td>
            
          </tr>
          <tr className="table-row">
            <td>UG/PG Students</td>
            <td>₹ 1,500</td>
            
          </tr>
        </tbody>
      </table>

      {/* NOTE */}
      <div className="registration-note">
        <p className="note-title">The registration fee includes:</p>
        <p className="note-content">
          Conference kit, access to all presentations, conference lunch, and refreshments. Each participant will receive conference proceedings, conference souvenir, docket and a certificate.
          
          <p><b>*Fee includes 18% GST</b></p>
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
      <p className="accommodation-info">Accommodation can be arranged in College Guest House and College Hostel on a chargeable basis.</p>
    </div>
    <div className="button-container">
      <button className="register-button btn btn-primary-yellow" onClick={() => window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfMMF5r9pxcJ7miRCXiPGM3kiKqJzxgy4WRfS5XTh6xgkCfEQ/viewform'}>
        Register Now
      </button>
    </div>

  </div>
</section>

  {/* Committee Section */}
  <section id="committee" className="section bg-light">
    <div className="container">
      {/* Advisory Committee */}
      <div className="committee-section advisory">
        <h2 className="section-title">ADVISORY COMMITTEE</h2>
        <div className="advisory-grid">
          <div className="advisor-card">
            <div className="advisor-content">
              <h3>Dr. Kaustav SenGupta</h3>
              <div className="advisor-role">Associate Professor, Centre Coordinator and Chairperson I/C- NIFT Campus, Chennai.</div>
            </div>
          </div>
          <div className="advisor-card">
            <div className="advisor-content">
              <h3>Dr. Deepa Chandran</h3>
              <div className="advisor-role">Sustainability Head - Lifestyle Brands, Aditya Birla Fashion & Retail Limited, Bengaluru</div>
            </div>
          </div>
          <div className="advisor-card">
            <div className="advisor-content">
              <h3>Mr. Dharmender Khanna</h3>
              <div className="advisor-role">Head of Brand and Digital Transformation SSIPL Retail Limited, Haryana.</div>
            </div>
          </div>
          <div className="advisor-card">
            <div className="advisor-content">
              <h3>Mr. D. M. Kumar</h3>
              <div className="advisor-role">CEO, M/s Eastern Global Clothing, Tiruppur.</div>
            </div>
          </div>
          <div className="advisor-card">
            <div className="advisor-content">
              <h3>Mr. Shashank Johri</h3>
              <div className="advisor-role">Research and Design - UX Design for Sustainability, A Bunch of Designers (ABOD), Founder, Bengaluru.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Organizing Committee */}
      <div className="committee-section organizing">
        <h2 className="section-title">ORGANIZING COMMITTEE</h2>
        <div className="org-compact">
          <div className="org-row">
            <div className="org-member">
              <div className="member-role">Patron</div>
              <div className="member-info">
                <h3>Shri L. Gopalakrishnan</h3>
                <p>Managing Trustee, PSG & Sons' Charities, Coimbatore</p>
              </div>
            </div>
            <div className="org-member">
              <div className="member-role">Chairman</div>
              <div className="member-info">
                <h3>Dr. K. Prakasan</h3>
                <p>Principal, PSG College of Technology, Coimbatore</p>
              </div>
            </div>
          </div>
          <div className="org-row">
            <div className="org-member">
              <div className="member-role">Convener</div>
              <div className="member-info">
                <h3>Dr. D. Vijayalakshmi</h3>
                <p>Professor & Head, Department of Apparel & Fashion Design, PSG College of Technology, Coimbatore</p>
              </div>
            </div>
            <div className="org-member">
              <div className="member-role">Organizing Secretaries</div>
              <div className="member-info">
                <div className="secretary-group">
                  <h3>Dr. Nirmala Varghese</h3>
                  <h3>Dr. Mariyam Adnan</h3>
                  <p>Associate Professors, Department of Apparel & Fashion Design, PSG College of Technology, Coimbatore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Sponsors Section */}
  <section id="sponsors" className="section">
    <div className="container">
      <h2 className="section-title">Sponsorship Opportunities</h2>
      <div className="sponsor-info-text visually-appealing-bg">
        NCDTF 25 offers retailers and manufacturers a unique platform to showcase products, present to a focused audience, and advertise in a widely distributed conference souvenir.
      </div>
      
      {/* Existing sponsor cards */}
      <div className="sponsor-cards">
        <div className="sponsor-card platinum">
          <div className="sponsor-badge">Platinum</div>
          <div className="sponsor-amount">₹75,000</div>
          <div className="sponsor-benefits">
                  <ul>
                    <li>Speaker slot in Technical Session</li>
                    <li>Display Standee for Promotion</li>
                    <li>Logo in back drop</li>
                    <li>Corporate Literature added to bag</li>
                    <li>4 Complimentary Delegate Pass</li>
                    <li>Full Page color in Souvenir</li>
                  </ul>
          </div>
        </div>

        <div className="sponsor-card gold">
          <div className="sponsor-badge">Gold</div>
          <div className="sponsor-amount">₹50,000</div>
          <div className="sponsor-benefits">
                  <ul>
                   
                    <li>Display Standee for Promotion</li>
                    <li>Logo in back drop</li>
                    <li>Corporate Literature added to bag</li>
                    <li>3 Complimentary Delegate Pass</li>
                    <li>Half Page color in Souvenir</li>
                  </ul>
          </div>
        </div>

        <div className="sponsor-card silver">
          <div className="sponsor-badge">Silver Sponsor</div>
          <div className="sponsor-amount">₹30,000</div>
          <div className="sponsor-subtitle"></div>
          <div className="sponsor-benefits">
                  <ul>
                   
                    <li>Logo in back drop</li>
                    <li>Corporate Literature added to bag</li>
                    <li>2 Complimentary Delegate Pass</li>
                    <li>Quarter Page color in Souvenir</li>
                  </ul>
          </div>
        </div>

        <div className="sponsor-card lunch">
          <div className="sponsor-badge">Lunch Sponsor</div>
          <div className="sponsor-amount">₹30,000</div>
          <div className="sponsor-benefits">
            <ul>
              <li>Branding in Dining Area</li>
              <li>2 complimentary Delegatory Pass</li>
              <li>Quarter page color in Souvenir</li>
            </ul>
          </div>
        </div>

        <div className="sponsor-card mementoes">
          <div className="sponsor-badge">Mementoes Sponsor</div>
          <div className="sponsor-amount">₹25,000</div>
          <div className="sponsor-subtitle"></div>
          <div className="sponsor-benefits">
            <ul>
              <li>Branding in Mementos</li>
              <li>2 complimentary Delegatory Pass</li>
              <li>Quarter page color in Souvenir</li>
            </ul>
          </div>
        </div>

        <div className="sponsor-card high-tea">
          <div className="sponsor-badge">High Tea Sponsor</div>
          <div className="sponsor-amount">₹20,000</div>
          <div className="sponsor-benefits">
            <ul>
              <li>Branding in Dining Area</li>
              <li>1 complimentary Delegate Pass</li>
              <li>Quarter page color in Souvenir</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Exhibition Stalls */}
      <div className="modern-pricing-grid">
        <div className="pricing-category stalls">
          <div className="category-header">
            <h3>Exhibition Stalls</h3>
            
          </div>
          <div className="stall-showcase">
            <div className="stall-card standard">
              <div className="stall-visual">
                
                <div className="stall-size">9 × 9</div>
                <div className="stall-unit">feet</div>
              </div>
              <div className="stall-info">
                <div className="stall-type">Standard Stall</div>
                <div className="stall-price">₹25,000.00</div>
              </div>
            </div>
            
            <div className="stall-card premium">
              <div className="stall-visual">
                
                <div className="stall-size">18 × 18</div>
                <div className="stall-unit">feet</div>
              </div>
              <div className="stall-info">
                <div className="stall-type">Premium Stall</div>
                <div className="stall-price">₹50,000.00</div>
              </div>
            </div>
          </div>
        </div>

        {/* Souvenir Advertisement */}
        <div className="pricing-category souvenir">
          <div className="category-header">
            <h3>Souvenir Advertisement</h3>
            
          </div>
          <div className="modern-cards souvenir-cards">
            <div className="modern-card featured">
              <div className="card-accent"></div>
              <div className="card-content">
                <div className="ad-badge">Premium Position</div>
                <div className="ad-type">Front Cover Inner</div>
                <div className="ad-specs">Full Page (Colour)</div>
                <div className="price">₹25,000.00</div>
              </div>
            </div>
            <div className="modern-card featured">
              <div className="card-accent"></div>
              <div className="card-content">
                <div className="ad-badge">Premium Position</div>
                <div className="ad-type">Back Cover Outside</div>
                <div className="ad-specs">Full Page (Colour)</div>
                <div className="price">₹25,000.00</div>
              </div>
            </div>
            <div className="modern-card featured">
              <div className="card-accent"></div>
              <div className="card-content">
                <div className="ad-badge">Premium Position</div>
                <div className="ad-type">Back Cover Inner</div>
                <div className="ad-specs">Full Page (Colour)</div>
                <div className="price">₹20,000.00</div>
              </div>
            </div>
            <div className="modern-card">
              <div className="card-accent"></div>
              <div className="card-content">
                <div className="ad-type">Regular Page</div>
                <div className="ad-specs">Full Page (Colour)</div>
                <div className="price">₹15,000.00</div>
              </div>
            </div>

            <div className="modern-card">
              <div className="card-accent"></div>
              <div className="card-content">
                <div className="ad-type">Regular Page</div>
                <div className="ad-specs">Full Page (Black nd White)</div>
                <div className="price">₹10,000.00</div>
              </div>
            </div>


            <div className="modern-card half">
              <div className="card-accent"></div>
              <div className="card-content">
                <div className="ad-type">Half Page</div>
                <div className="ad-specs">Colour</div>
                <div className="price">₹8,000.00</div>
              </div>
            </div>
            <div className="modern-card half">
              <div className="card-accent"></div>
              <div className="card-content">
                <div className="ad-type">Half Page</div>
                <div className="ad-specs">Black & White</div>
                <div className="price">₹7,000.00</div>
              </div>
            </div>
            <div className="modern-card quarter">
              <div className="card-accent"></div>
              <div className="card-content">
                <div className="ad-type">Quarter Page</div>
                <div className="ad-specs">Colour</div>
                <div className="price">₹5,000.00</div>
              </div>
            </div>
            <div className="modern-card quarter">
              <div className="card-accent"></div>
              <div className="card-content">
                <div className="ad-type">Quarter Page</div>
                <div className="ad-specs">Black & White</div>
                <div className="price">₹4,000.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="button-container">
        <button className="register-button btn btn-primary-yellow" onClick={() => window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScH70vv_hrP16fRkEQZ0_bsgi69phIsNT4xul6lfegnZ774Fw/viewform?usp=header'}>
          Become a Sponsor
        </button>
      </div>
    </div>
  </section>

  {/* Modern Interactive Footer */}
  <footer className="modern-footer">
    {/* Scroll Buttons */}
    <div className="scroll-buttons">
      <button className="scroll-button up" onClick={scrollToTop} aria-label="Scroll to top">
        <i className="fas fa-chevron-up"></i>
      </button>
      <button className="scroll-button down" onClick={scrollToBottom} aria-label="Scroll to bottom">
        <i className="fas fa-chevron-down"></i>
      </button>
    </div>
    
    <div className="footer-waves">
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
    </div>
    
    <div className="footer-container">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="brand-logo">
            <h2>NCDTF 2025</h2>
            <div className="brand-tagline">Disruptive Technologies in Fashion</div>
          </div>
          <p className="brand-description">
            Where fashion meets the future: Experience innovation, inspiration, and the next wave of style at NCDTF 2025.
          </p>
          
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h4>Quick Access</h4>
            <ul>
              <li><a href="#home"><i className="fas fa-home"></i> Home</a></li>
              <li><a href="#about"><i className="fas fa-info-circle"></i> About</a></li>
              <li><a href="#theme"><i className="fas fa-microphone"></i> Themes</a></li>
              <li><a href="#papers"><i className="fas fa-calendar"></i> Papers</a></li>
            </ul>
          </div>
          
          <div className="link-group">
            <h4>Conference</h4>
            <ul>
              <li><a href="#registration"><i className="fas fa-ticket-alt"></i> Registration</a></li>
              <li><a href="#sponsors"><i className="fas fa-handshake"></i> Sponsors</a></li>
              <li><a href="#committee"><i className="fas fa-images"></i>Committee </a></li>
              <li><a href="#contact"><i className="fas fa-envelope"></i> Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-contact">
          <h4>Get In Touch</h4>
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-details">
                <strong>Location</strong>
                <span>PSG College of Technology<br/>Coimbatore - 641004, Tamil Nadu</span>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <strong>Email</strong>
                <span>ncdtf2025@psgtech.ac.in</span>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-details">
                <strong>Phone</strong>
                <span>+91 9843125007</span>
                <span>+91 9940224083</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright">
            <p>&copy; 2025 NCDTF - National Conference on Disruptive Technologies in Fashion. All rights reserved</p>
           
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>
);
};

export default FashionTechConference;