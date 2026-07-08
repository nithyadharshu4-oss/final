import React from "react";
import "./Footer.css";
import iconWebsite from "../assets/icon-website.png";
import iconEmail from "../assets/icon-email.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <h2 className="footer__logo">InternMS</h2>
          <p className="footer__description">
            The ultimate platform for managing internships, connecting
            talent, and building the future of work.
          </p>
          <div className="footer__social">
            <a href="mailto:contact@internms.com"
              className="footer__icon-btn"
              aria-label="Email"
            >
              <img src={iconEmail} alt="" aria-hidden="true" />
            </a>
            <a href="#" className="footer__icon-btn" aria-label="Website">
              <img src={iconWebsite} alt="" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="footer__column">
          <h3 className="footer__heading">Product</h3>
          <ul className="footer__links">
            <li>
              <a href="#">For Students</a>
            </li>
            <li>
              <a href="#">For Employers</a>
            </li>
            <li>
              <a href="#">For Universities</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <h3 className="footer__heading">Company</h3>
          <ul className="footer__links">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; 2024 InternMS. All rights reserved.</p>
        <p className="footer__made-with">
          Made with <span className="footer__heart">&hearts;</span> for the
          future workforce
        </p>
      </div>
    </footer>
  );
};

export default Footer;