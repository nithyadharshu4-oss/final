import React from "react";
import "./LeftPanelFp.css";

const LeftPanelFp = () => {
  return (
    <div className="lpf2-container">
      <div className="lpf2-top">
        <h1 className="lpf2-title">
          Regain access to your professional future.
        </h1>

        <p className="lpf2-description">
          We're here to help you get back on track. Secure your account and
          continue exploring the best internship opportunities worldwide.
        </p>
      </div>

      <div className="lpf2-footer">
        <span className="lpf2-footer-text">&copy; 2024 InternMS</span>
        <span className="lpf2-footer-dot">&middot;</span>
        <a href="#" className="lpf2-footer-link">
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default LeftPanelFp;