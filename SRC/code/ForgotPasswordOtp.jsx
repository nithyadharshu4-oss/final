import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPasswordOtp.css";

import shieldIcon from "../assets/shieldvce.png";
import rightArrow from "../assets/right-arrowFP.png";
import secureHandshake from "../assets/SecureHandshake-FPOtp.png";
import endEncrypted from "../assets/EndForgotPOtp.png";

function OTPVerification() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleVerify = () => {
    navigate("/setuppassword");
  };

  return (
    <div className="otp-page">
      <div className="otp-left">
        <div className="otp-left-content">
          <div className="shield-circle">
            <img src={shieldIcon} alt="Shield" />
          </div>

          <h1>Verify Identity</h1>

          <p>
            We've sent a 6-digit code to your chosen method.
            <br />
            Please enter it to continue.
          </p>
        </div>
      </div>

      <div className="otp-right">
        <div className="otp-card">
          <h2>Enter Verification Code</h2>

          <p className="description">
            We've sent a 6-digit code to your registered Email and phone
            number. The code will expire in
            <span> 09:59 </span>
            minutes.
          </p>

          <div className="otp-inputs">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
              />
            ))}
          </div>

          <button className="verify-btn" onClick={handleVerify}>
            Verify and Continue
            <img src={rightArrow} alt="arrow" />
          </button>

          <p className="resend">
            Didn't receive the code?
            <span> Resend (in 00:55)</span>
          </p>

          <hr />

          <div className="security">
            <div>
              <img src={endEncrypted} alt="" />
              <span>END-TO-END ENCRYPTED</span>
            </div>

            <div>
              <img src={secureHandshake} alt="" />
              <span>SECURE HANDSHAKE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OTPVerification;