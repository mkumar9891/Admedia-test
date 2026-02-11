import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { TiLocationOutline } from "react-icons/ti";
function Footer() {
  return (
    <>
      {/* FOOTER START */}
      <footer className="footer-section">
        <div className="container footer-content">
          <div className="row gy-5">
            {/* ABOUT */}
            <div className="col-lg-4 col-md-6">
              <h4 className="footer-title">ABOUT ADMIDEA</h4>
              <p className="footer-about">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. 
              </p>
            </div>
            {/* QUICK LINKS */}
            <div className="col-lg-4 col-md-6">
              <h4 className="footer-title">QUICK LINKS</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">Featured products</a>
                </li>
                <li>
                  <a href="#">Why Choose us</a>
                </li>
                <li>
                  <a href="#">Newsletter</a>
                </li>
                <li>
                  <a href="#">Customer Testimonials</a>
                </li>
              </ul>
            </div>
            {/* CONTACT */}
            <div className="col-lg-4 col-md-12">
              <h4 className="footer-title">OUR CONTACT DETAILS</h4>
              <div className="contact-item">
                <MdOutlineEmail />
                <div className="contact-text">info@admedia.com</div>
              </div>
              <div className="contact-item">
                <FiPhoneCall />
                <div className="contact-text">(800) 296-7104</div>
              </div>
              <div className="contact-item">
                <TiLocationOutline className="mobile-view" />
                <div className="contact-text">
                  615 Channelside Dr. Suite 207 Tampa, FL 33602
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* FOOTER END 

      <footer className="footer-area bg-dark text-light pt-5 pb-3">
        <div className="container">
          <div className="row">
            {/* Column 1 
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="fw-bold mb-3">About Us</h5>
              <p>
                We provide the best digital services including web design, app
                development &amp; digital marketing solutions.
              </p>
            </div>
            {/* Column 2
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="fw-bold mb-3">Quick Links</h5>
              <ul className="footer-links list-unstyled">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            {/* Column 3 
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="fw-bold mb-3">Services</h5>
              <ul className="footer-links list-unstyled">
                <li>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <a href="#">App Development</a>
                </li>
                <li>
                  <a href="#">SEO &amp; Marketing</a>
                </li>
                <li>
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>
            {/* Column 4 
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="fw-bold mb-3">Contact Info</h5>
              <ul className="footer-contact list-unstyled">
                <li>
                  <i className="bi bi-geo-alt" /> New Delhi, India
                </li>
                <li>
                  <i className="bi bi-telephone" /> +91 9876543210
                </li>
                <li>
                  <i className="bi bi-envelope" /> info@example.com
                </li>
              </ul>
            </div>
          </div>
          <hr className="border-light" />
          {/* Bottom Footer 
          <div className="text-center">
            <p className="mb-0">© 2025 Your Company. All Rights Reserved.</p>
          </div>
        </div>
      </footer>*/}
    </>
  );
}

export default Footer;
