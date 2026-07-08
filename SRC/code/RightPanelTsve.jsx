import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RightPanelTsve.css";

const RightPanelTsve = ({
  maskedEmail = "j**n@g***l.com",
  maskedPhone = "+91 9****'5678",
}) => {
  const [selectedMethod, setSelectedMethod] = useState("email");
  const navigate = useNavigate();

  const handleSend = () => {
    console.log("Sending verification code via:", selectedMethod);
    navigate("/otpverify");
  };

  const handleBackToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="rpt-container">
      <h2 className="rpt-title">Two-Step Verification</h2>
      <p className="rpt-subtitle">Choose how you'd like to verify your identity.</p>

      <div className="rpt-options">
        <div
          className={`rpt-option ${selectedMethod === "email" ? "rpt-option-selected" : ""}`}
          onClick={() => setSelectedMethod("email")}
        >
          <div className="rpt-option-icon rpt-icon-email">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 6.5C3 5.67 3.67 5 4.5 5H19.5C20.33 5 21 5.67 21 6.5V17.5C21 18.33 20.33 19 19.5 19H4.5C3.67 19 3 18.33 3 17.5V6.5Z"
                stroke="#4F3FF0"
                strokeWidth="1.6"
              />
              <path
                d="M4 6.5L12 13L20 6.5"
                stroke="#4F3FF0"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="rpt-option-text">
            <span className="rpt-option-title">Email Verification</span>
            <span className="rpt-option-subtitle">{maskedEmail}</span>
          </div>
          <div className={`rpt-radio ${selectedMethod === "email" ? "rpt-radio-checked" : ""}`}>
            {selectedMethod === "email" && <div className="rpt-radio-dot" />}
          </div>
        </div>

        <div
          className={`rpt-option ${selectedMethod === "mobile" ? "rpt-option-selected" : ""}`}
          onClick={() => setSelectedMethod("mobile")}
        >
          <div className="rpt-option-icon rpt-icon-mobile">
            <svg width="16" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="2" width="12" height="20" rx="2" stroke="#4F3FF0" strokeWidth="1.6" />
              <line x1="10.5" y1="18" x2="13.5" y2="18" stroke="#4F3FF0" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </div>
          <div className="rpt-option-text">
            <span className="rpt-option-title">Mobile Verification</span>
            <span className="rpt-option-subtitle">{maskedPhone}</span>
          </div>
          <div className={`rpt-radio ${selectedMethod === "mobile" ? "rpt-radio-checked" : ""}`}>
            {selectedMethod === "mobile" && <div className="rpt-radio-dot" />}
          </div>
        </div>
      </div>

      <button className="rpt-send-btn" onClick={handleSend}>
        Send Verification Code <span className="rpt-arrow">&rarr;</span>
      </button>

      <button className="rpt-back-link" onClick={handleBackToLogin}>
        &larr; Back to Login
      </button>

      <div className="rpt-divider" />

      <p className="rpt-help-text">
        Need help? <a href="#" className="rpt-support-link">Contact Support</a>
      </p>
    </div>
  );
};

export default RightPanelTsve;