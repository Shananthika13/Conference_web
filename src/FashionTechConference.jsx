"use client"

import { useState, useEffect } from "react"
import "./FashionTechConference.css"
import brochurePDF from "./assets/documents/Brochure_latest.pdf" // Assuming this path is correct

const FashionTechConference = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDownloadBrochure = () => {
    window.open(brochurePDF, "_blank")
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    })
  }

  return (
    <div className="conference-container">
      {/* Navigation Bar */}
      <nav className="nav-bar">
        <div className="container nav-container">
          <div className="nav-brand">
            <img src="PSGCT-logo.png" alt="PSG Logo" className="logo-img psg-logo" />
            <img src="75yearsLogo_PSGCollegeofTech.png" alt="75 Years Logo" className="logo-img years-logo" />
            <img src="AFDA LOGO.png" alt="AFDA Logo" className="logo-img afda-logo" />
            <div className="conference-name">NCDTF 2026</div>
          </div>
          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
          <div className={`nav-links ${isMobileMenuOpen ? "mobile-active" : ""}`}>
            <a href="#home" onClick={handleNavLinkClick} className="nav-link">
              Home
            </a>
            <a href="#about" onClick={handleNavLinkClick} className="nav-link">
              About
            </a>
            <a href="#committee" onClick={handleNavLinkClick} className="nav-link">
              Committee
            </a>
            <a href="#papers" onClick={handleNavLinkClick} className="nav-link">
              Call for Papers
            </a>
            <a href="#dates" onClick={handleNavLinkClick} className="nav-link">
              Important Dates
            </a>
            <a href="#registration" onClick={handleNavLinkClick} className="nav-link">
              Registration
            </a>
            <a href="#sponsors" onClick={handleNavLinkClick} className="nav-link">
              Sponsors
            </a>
            <a href="#contact" onClick={handleNavLinkClick} className="nav-link">
              Contact
            </a>
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
          <h3 className="hero-date fade-in-up-1">30 & 31 January 2026</h3>
          <p className="hero-venue fade-in-up-2">
            Department of Apparel and Fashion Design
            <br />
            PSG College of Technology, Coimbatore
          </p>
          <div className="hero-buttons fade-in-up-3">
            <button className="btn-primary" onClick={handleDownloadBrochure}>
              Download Brochure
            </button>
            <button
              className="btn-primary"
              onClick={() =>
                (window.location.href =
                  "https://docs.google.com/forms/d/e/1FAIpQLSdHWy5NHK16WlyP6rrO2_hOnzTCncLNST8uhwiJpAn2gP0c0Q/viewform")
              }
            >
              Submit Abstract
            </button>
            <button
              className="btn-primary"
              onClick={() =>
                (window.location.href =
                  "https://docs.google.com/document/d/1g6wtTWJL1f1S00SyNtLgsqa5KkEAbAQw/edit?usp=sharing&ouid=116410768831522929067&rtpof=true&sd=true")
              }
            >
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
            <div className="about-card about-college">
              <h3 className="subsection-title">PSG COLLEGE OF TECHNOLOGY</h3>
              <p className="text-content">
                PSG College of Technology, established in 1951, is one of the premier institutions in India, founded by
                the PSG & Sons' Charities Trust, which dates back to 1926. An ISO 9001:2015 certified institution, the
                college is renowned for its academic excellence and commitment to quality education. It offers wide
                range of programmes including 21 undergraduate courses such as BE, BTech, and BSc, and 24 postgraduate
                programmes encompassing ME, MTech, five-year and two-year MSc, MBA, and MCA. In addition, PSG Tech is a
                recognized QIP (Quality Improvement Programme) centre for postgraduate and PhD research programmes,
                reflecting its strong focus on advanced learning and research.
              </p>
            </div>
            <div className="about-card about-department">
              <h3 className="subsection-title">DEPARTMENT OF APPAREL & FASHION DESIGN</h3>
              <p className="text-content">
                The Department of Apparel and Fashion Design offers a comprehensive five-year integrated M.Sc. Fashion
                Design & Merchandising programme, built on a three-pronged approach that focuses on design, production,
                and management. Over the past decade, the department has consistently nurtured a pool of versatile
                graduates who are well-prepared to meet the evolving challenges of the fashion industry by applying
                creative and responsible design solutions. Students benefit from access to state-of-the-art facilities,
                including specialized laboratories for Pattern Making, Garment Construction, Computer-Aided Design
                (CAD), WGSN Trend Forecasting, Embroidery, and Photography, along with a dedicated Design Studio that
                encourages innovation and creative exploration. The department actively promotes academic and
                professional growth through a diverse array of initiatives such as national conferences, expert talks,
                hands-on workshops, webinars, and various co-curricular and extra-curricular activities. These efforts
                are designed to enrich student learning, provide meaningful industry exposure, and support the holistic
                development of future fashion professionals.
              </p>
            </div>
            <div className="about-card about-conference">
              <h3 className="subsection-title">THE CONFERENCE</h3>
              <p className="text-content">
                The National Conference on Disruptive Technologies in Fashion (NCDTF 26) delves into the transformative
                impact of emerging technologies on the fashion industry. This event will spotlight cutting-edge
                innovations such as Al-driven trend forecasting, blockchain for supply chain transparency, 3D printing
                for on-demand production, and the use of sustainable materials. With the rise of wearable technology and
                augmented reality, the way fashion is consumed and experienced is being revolutionized. NCDTF 26 aims to
                bring together industry professionals, researchers, and academicians to foster collaboration, share
                insights, and discuss how these technologies are reshaping design, production, and management in
                fashion. А key focus will be on how these disruptive tools contribute to greater efficiency, enhanced
                personalization, and sustainable practices, ultimately reducing the environmental footprint of the
                fashion industry in an increasingly digital and eco-conscious world.
              </p>
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
              NCDTF 26 invites students, researchers, and industry professionals to participate in the conference
              through oral presentations. Authors are encouraged to submit abstracts online, following the prescribed
              format, with a maximum limit of 300 words. Submissions are welcome in the following thematic areas:
            </p>
            <div className="papers-grid">
              <div className="paper-topic">
                <span className="topic-icon">🔄</span>
                <h4>3D Printing: Revolutionizing Fashion Design</h4>
              </div>
              <div className="paper-topic">
                <span className="topic-icon">🤖</span>
                <h4>Artificial Intelligence & Machine Learning in Fashion</h4>
              </div>
              <div className="paper-topic">
                <span className="topic-icon">👕</span>
                <h4>Smart Fabrics and Wearable Technology</h4>
              </div>
              <div className="paper-topic">
                <span className="topic-icon">⛓️</span>
                <h4>Blockchain for Transparency and Traceability in Fashion</h4>
              </div>
              <div className="paper-topic">
                <span className="topic-icon">🕶️</span>
                <h4>Augmented Reality (AR): Enhancing Fashion Design & Retail Experiences</h4>
              </div>
              <div className="paper-topic">
                <span className="topic-icon">🎮</span>
                <h4>Virtual Reality (VR): Transforming the Fashion Shopping Journey</h4>
              </div>
              <div className="paper-topic">
                <span className="topic-icon">🌱</span>
                <h4>Sustainable Fashion through Technological Innovations</h4>
              </div>
              <div className="paper-topic">
                <span className="topic-icon">🛍️</span>
                <h4>E-Commerce and the Digital Transformation of Fashion</h4>
              </div>
              <div className="paper-topic">
                <span className="topic-icon">📊</span>
                <h4>AI-Powered Fashion Trend Forecasting</h4>
              </div>
              <div className="paper-topic">
                <span className="topic-icon">🎭</span>
                <h4>Virtual Runways and the Future of Fashion Shows</h4>
              </div>
              <div className="paper-topic">
                <span className="topic-icon">♻️</span>
                <h4>Circular Fashion: Creating a Sustainable Clothing Economy</h4>
              </div>
              <div className="paper-topic">
                <span className="topic-icon">👗</span>
                <h4>Emergence of Digital-Only Fashion Collections</h4>
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
              <div className="date">September 30, 2025</div>
              <div className="date-event">Submission of Abstracts</div>
            </div>
            <div className="timeline-connector"></div>
            <div className="timeline-item">
              <div className="date">October 10, 2025</div>
              <div className="date-event">Acceptance of Abstracts</div>
            </div>
            <div className="timeline-connector"></div>
            <div className="timeline-item">
              <div className="date">October 31, 2025</div>
              <div className="date-event">Full Paper Submission</div>
            </div>
            <div className="timeline-connector"></div>
            <div className="timeline-item">
              <div className="date">November 01, 2025</div>
              <div className="date-event">Registration starts on</div>
            </div>
            <div className="timeline-connector"></div>
            <div className="timeline-item">
              <div className="date">November 30, 2025</div>
              <div className="date-event">Last Date for Registration</div>
            </div>
          </div>
        </div>
      </section>

      {/* Publication & Certificates Section */}
      <section id="publication-certificates" className="section publication-section">
        <div className="container">
          <h2 className="section-title">Publication & Certificates</h2>
          <div className="pub-cert-grid">
            <div className="pub-cert-card">
              <span className="pub-cert-icon">📚</span>
              <h3>Publication</h3>
              <p>
                Selected full papers will be published in the <strong>Conference Proceedings</strong>, which will have
                an <strong>ISBN number</strong>.
              </p>
            </div>
            <div className="pub-cert-card">
              <span className="pub-cert-icon">🏆</span>
              <h3>Certificates</h3>
              <p>
                Certificates will be awarded to <strong>presenting authors</strong> and all{" "}
                <strong>registered co-authors</strong> for their contributions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration */}
      <section id="registration" className="section bg-gray">
        <div className="container">
          <h2 className="section-title">Registration</h2>

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
                  <td>Academicians</td>
                  <td>₹ 3,000</td>
                </tr>
                <tr className="table-row alt-row">
                  <td>Research Scholars</td>
                  <td>₹ 2,000</td>
                </tr>
                <tr className="table-row">
                  <td>UG/PG Students</td>
                  <td>₹ 1,000</td>
                </tr>
              </tbody>
            </table>

            <div className="registration-note">
              <p className="note-title">The registration fee includes:</p>
              <div className="note-content">
                Conference kit, access to all presentations, conference lunch, and refreshments. Each participant will
                receive conference proceedings, conference souvenir, docket and a certificate.
                <div>
                  <b>*Fee includes 18% GST</b>
                </div>
              </div>
            </div>

            <div className="payment-box">
              <h3>Mode of Payment for Registration</h3>
              <ul>
                <li>
                  <strong>Payment Type:</strong> Online payment
                </li>
                <li>
                  <strong>Account Number:</strong> 1481267367
                </li>
                <li>
                  <strong>Account Holder:</strong> PSG Centre for Non formal and Continuing Education (PSG CNCE)
                </li>
                <li>
                  <strong>Bank Name:</strong> Central Bank of India
                </li>
                <li>
                  <strong>Branch Name:</strong> Peelamedu
                </li>
                <li>
                  <strong>IFSC Code:</strong> CBIN0280913
                </li>
              </ul>
              <p className="accommodation-info">
                Accommodation can be arranged in College Guest House and College Hostel on a chargeable basis.
              </p>
            </div>

            <div className="button-container">
              <button
                className="register-button btn btn-primary-yellow"
                onClick={() =>
                  (window.location.href =
                    "https://docs.google.com/forms/d/e/1FAIpQLSfMMF5r9pxcJ7miRCXiPGM3kiKqJzxgy4WRfS5XTh6xgkCfEQ/viewform")
                }
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Committee Section */}
      <section id="committee" className="section bg-light">
        <div className="container">
          {/* Advisory Committee */}
          <div className="committee-section advisory">
            <h2 className="section-title">Advisory Committee</h2>
            <div className="advisory-grid">
              <div className="advisor-card">
                <div className="advisor-content">
                  <h3>Dr. Kaustav SenGupta</h3>
                  <div className="advisor-role">Link Chairperson, F&LA and Director, Vision Nxt, NIFT, Chennai</div>
                </div>
              </div>
              <div className="advisor-card">
                <div className="advisor-content">
                  <h3>Dr. Deepa Chandran</h3>
                  <div className="advisor-role">
                    Sustainability Head - Lifestyle Brands, Aditya Birla Fashion & Retail Limited, Bengaluru
                  </div>
                </div>
              </div>
              <div className="advisor-card">
                <div className="advisor-content">
                  <h3>Mr. Dharmender Khanna</h3>
                  <div className="advisor-role">
                    Head of Brand and Digital Transformation SSIPL Retail Limited, Gurgaon
                  </div>
                </div>
              </div>
              <div className="advisor-card">
                <div className="advisor-content">
                  <h3>Mr. D. M. Kumar</h3>
                  <div className="advisor-role">CEO, M/s Eastern Global Clothing, Tiruppur</div>
                </div>
              </div>
              <div className="advisor-card">
                <div className="advisor-content">
                  <h3>Mr. Shashank Johri</h3>
                  <div className="advisor-role">Founder, A Bunch of Designers (ABOD), Bengaluru</div>
                </div>
              </div>
            </div>
          </div>

          {/* Organizing Committee */}
          <div className="committee-section organizing">
            <h2 className="section-title">Organising Committee</h2>
            <div className="org-compact">
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
                    <p>
                      Associate Professors, Department of Apparel & Fashion Design, PSG College of Technology,
                      Coimbatore
                    </p>
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
          <h2 className="section-title">Partnership Opportunities</h2>
          <div className="sponsor-info-text">
            The Conference on Disruptive Technologies in Fashion (NCDTF 26) offers valuable opportunities for
            organizations to enhance their visibility and connect with a focused audience. Sponsors can present and
            display their products during the event. A conference souvenir will also be released, providing space for
            advertisements and helping promote products and services to a wider audience beyond the conference.
          </div>

          {/* Main Sponsor Table */}
          <div className="main-sponsor-section">
            <div className="sponsor-cards sponsor-cards-grid">
              <div className="sponsor-row">
                <div className="sponsor-card platinum">
                  <div className="sponsor-badge">Platinum</div>
                  <div className="sponsor-amount">₹50,000</div>
                  <div className="sponsor-benefits">
                    <ul>
                      <li>Logo Display</li>
                      <li>4 Delegate Pass</li>
                      <li>Full Page Colour Souvenir Advertisement</li>
                      <li>Audio-Visual: Will be played twice in a day</li>
                      <li>Corporate Literature added to Kit</li>
                    </ul>
                  </div>
                </div>

                <div className="sponsor-card gold">
                  <div className="sponsor-badge">Gold</div>
                  <div className="sponsor-amount">₹30,000</div>
                  <div className="sponsor-benefits">
                    <ul>
                      <li>Logo Display</li>
                      <li>3 Delegate Pass</li>
                      <li>Full Page B/W Souvenir Advertisement</li>
                      <li>Audio-Visual: Will be played once in a day</li>
                      <li>Corporate Literature added to Kit</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="sponsor-row">
                <div className="sponsor-card silver">
                  <div className="sponsor-badge">Silver</div>
                  <div className="sponsor-amount">₹20,000</div>
                  <div className="sponsor-benefits">
                    <ul>
                      <li>Logo Display</li>
                      <li>2 Delegate Pass</li>
                      <li>Half Page Colour Souvenir Advertisement</li>
                    </ul>
                  </div>
                </div>

                <div className="sponsor-card bronze">
                  <div className="sponsor-badge">Bronze</div>
                  <div className="sponsor-amount">₹10,000</div>
                  <div className="sponsor-benefits">
                    <ul>
                      <li>Logo Display</li>
                      <li>1 Delegate Pass</li>
                      <li>Half Page B/W Souvenir Advertisement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Exhibition Stall */}
          <section id="exhibition-stall" className="section exhibition-stall-section">
            
            <div className="sponsor-card stall">
              <div className="sponsor-badge">Stall</div>
              <div className="sponsor-amount">₹30,000</div>
              <div className="sponsor-benefits">
                <ul>
                  <li>9 × 9 feet stall space</li>
                  <li>Product display opportunity</li>
                  <li>Direct customer interaction</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Souvenir Advertisement */}
          <div className="modern-pricing-grid">
            <div className="pricing-category souvenir">
              <div className="category-header">
                <h2 className="section-title">Souvenir</h2>
              </div>
              <div className="modern-cards souvenir-cards">
                <div className="modern-card featured">
                  <div className="card-accent"></div>
                  <div className="card-content">
                    <div className="ad-type">Full Page (Colour) Back Side Cover (Outside)</div>
                    <div className="price">₹15,000</div>
                  </div>
                </div>

                <div className="modern-card featured">
                  <div className="card-accent"></div>
                  <div className="card-content">
                    <div className="ad-type">Full Page (Colour) Front Side Cover (Inner side)</div>
                    <div className="price">₹13,000</div>
                  </div>
                </div>

                <div className="modern-card featured">
                  <div className="card-accent"></div>
                  <div className="card-content">
                    <div className="ad-type">Full Page (Colour) Back Side Cover (Inner side)</div>
                    <div className="price">₹12,000</div>
                  </div>
                </div>

                <div className="modern-card">
                  <div className="card-accent"></div>
                  <div className="card-content">
                    <div className="ad-type">Full Page (Colour)</div>
                    <div className="price">₹10,000</div>
                  </div>
                </div>

                <div className="modern-card">
                  <div className="card-accent"></div>
                  <div className="card-content">
                    <div className="ad-type">Full Page (B/W)</div>
                    <div className="price">₹8,000</div>
                  </div>
                </div>

                <div className="modern-card half">
                  <div className="card-accent"></div>
                  <div className="card-content">
                    <div className="ad-type">Half Page (Colour)</div>
                    <div className="price">₹7,000</div>
                  </div>
                </div>

                <div className="modern-card half">
                  <div className="card-accent"></div>
                  <div className="card-content">
                    <div className="ad-type">Half Page (B/W)</div>
                    <div className="price">₹5,000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="button-container">
            <button
              className="register-button btn btn-primary-yellow"
              onClick={() =>
                (window.location.href =
                  "https://docs.google.com/forms/d/e/1FAIpQLScH70vv_hrP16fRkEQZ0_bsgi69phIsNT4xul6lfegnZ774Fw/viewform?usp=header")
              }
            >
              Become a Sponsor
            </button>
          </div>
        </div>
      </section>

      {/* Modern Interactive Footer */}

      <section id="contact">
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
                  <h2>NCDTF 2026</h2>
                  <div className="brand-tagline">Disruptive Technologies in Fashion</div>
                </div>
                <p className="brand-description">
                  Where fashion meets the future: Experience innovation, inspiration, and the next wave of style at
                  NCDTF 2026.
                </p>
              </div>

              <div className="footer-links">
                <div className="link-group">
                  <h4>Quick Access</h4>
                  <ul>
                    <li>
                      <a href="#home">
                        <i className="fas fa-home"></i> Home
                      </a>
                    </li>
                    <li>
                      <a href="#about">
                        <i className="fas fa-info-circle"></i> About
                      </a>
                    </li>
                    <li>
                      <a href="#papers">
                        <i className="fas fa-microphone"></i> Papers
                      </a>
                    </li>
                    <li>
                      <a href="#dates">
                        <i className="fas fa-calendar"></i> Dates
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="link-group">
                  <h4>Conference</h4>
                  <ul>
                    <li>
                      <a href="#registration">
                        <i className="fas fa-ticket-alt"></i> Registration
                      </a>
                    </li>
                    <li>
                      <a href="#sponsors">
                        <i className="fas fa-handshake"></i> Sponsors
                      </a>
                    </li>
                    <li>
                      <a href="#committee">
                        <i className="fas fa-users"></i> Committee
                      </a>
                    </li>
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
                      <span>
                        PSG College of Technology
                        <br />
                        Coimbatore - 641004, Tamil Nadu
                      </span>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="contact-details">
                      <strong>Email</strong>
                      <span>ncdtf.afd@psgtech.ac.in</span>
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
                  <p>
                    &copy; 2026 NCDTF - National Conference on Disruptive Technologies in Fashion. All rights reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  )
}

export default FashionTechConference
