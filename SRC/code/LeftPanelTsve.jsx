import React from "react";
import "./LeftPanelTsve.css";

const LeftPanelTsve = () => {
  return (
    <div className="lpt-container">
      <div className="lpt-top">
        <h1 className="lpt-title">Secure Your Account</h1>

        <p className="lpt-description">
          Protecting your professional profile and application history is
          our top priority. Choose a method to verify your identity.
        </p>

        <div className="lpt-badge-row">
          <div className="lpt-badge-icon">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L4 5V11C4 16.55 7.84 21.74 12 23C16.16 21.74 20 16.55 20 11V5L12 2Z"
                stroke="#FFFFFF"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="lpt-badge-text">
            <span className="lpt-badge-title">256-bit Encryption</span>
            <span className="lpt-badge-subtitle">
              Bank-grade security standards
            </span>
          </div>
        </div>
      </div>

      <div className="lpt-footer">
        <span className="lpt-footer-text">&copy; 2024 InternMS</span>
      </div>
    </div>
  );
};

export default LeftPanelTsve;