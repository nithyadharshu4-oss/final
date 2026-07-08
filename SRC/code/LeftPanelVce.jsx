import React from "react";
import "./LeftPanelVce.css";

const LeftPanelVce = () => {
  return (
    <div className="lpv-container">
      <div className="lpv-icon-badge">
        <svg
          width="28"
          height="28"
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
          <path
            d="M9 12L11 14L15.5 9.5"
            stroke="#FFFFFF"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h1 className="lpv-title">Security first.</h1>

      <p className="lpv-description">
        We take your account security seriously. Verify your identity to
        protect your internship applications and sensitive professional
        data.
      </p>

      <div className="lpv-footer">
        <span className="lpv-footer-text">Joined by 10k+ professionals</span>
      </div>
    </div>
  );
};

export default LeftPanelVce;