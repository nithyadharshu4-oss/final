import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RightPanelFp.css";

const RightPanelFp = ({
  maskedEmail = "j**n@g***l.com",
  maskedPhone = "+91 9**** *5678",
}) => {
  const [selectedMethod, setSelectedMethod] = useState("email");
  const navigate = useNavigate();

  const handleSend = () => {
    console.log("Sending verification code via:", selectedMethod);
    navigate("/forgotpasswordotp");
  };

  const handleBackToLogin = () => {
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="rpf2-container">
     
      <div className="rpf2-topnav">
        <a href="#" className="rpf2-topnav-link">
          Help
        </a>

        <button
          className="rpf2-topnav-link rpf2-topnav-btn"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>

      {/* Icon */}
      <div className="rpf2-icon-badge">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 4V9H4.58152M19.9381 11C19.446 7.05369 16.0796 4 12 4C8.64262 4 5.76829 6.06817 4.58152 9M4.58152 9H9M20 20V15H19.4185M19.4185 15C18.2317 17.9318 15.3574 20 12 20C7.92038 20 4.55399 16.9463 4.06189 13M19.4185 15H15"
            stroke="#4F3FF0"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

    
      <h2 className="rpf2-title">Forgot Password?</h2>

      <p className="rpf2-subtitle">
        Choose your preferred method to receive a one-time verification code.
      </p>

      <span className="rpf2-label">Verification Method</span>

      
      <div className="rpf2-options">
        <div
          className={`rpf2-option ${
            selectedMethod === "email" ? "rpf2-option-selected" : ""
          }`}
          onClick={() => setSelectedMethod("email")}
        >
          <div
            className={`rpf2-radio ${
              selectedMethod === "email" ? "rpf2-radio-checked" : ""
            }`}
          >
            {selectedMethod === "email" && (
              <div className="rpf2-radio-dot" />
            )}
          </div>

          <div className="rpf2-option-text">
            <span className="rpf2-option-title">Email Address</span>
            <span className="rpf2-option-subtitle">
              Send code to {maskedEmail}
            </span>
          </div>
        </div>

        <div
          className={`rpf2-option ${
            selectedMethod === "sms" ? "rpf2-option-selected" : ""
          }`}
          onClick={() => setSelectedMethod("sms")}
        >
          <div
            className={`rpf2-radio ${
              selectedMethod === "sms" ? "rpf2-radio-checked" : ""
            }`}
          >
            {selectedMethod === "sms" && (
              <div className="rpf2-radio-dot" />
            )}
          </div>

          <div className="rpf2-option-text">
            <span className="rpf2-option-title">SMS / Text Message</span>
            <span className="rpf2-option-subtitle">
              Send code to {maskedPhone}
            </span>
          </div>
        </div>
      </div>

  
      <button className="rpf2-send-btn" onClick={handleSend}>
        Send Verification Code
        <span className="rpf2-arrow">&rarr;</span>
      </button>

     
      <button
        className="rpf2-back-link"
        onClick={handleBackToLogin}
      >
        &lsaquo; Back to Login
      </button>
    </div>
  );
};

export default RightPanelFp;