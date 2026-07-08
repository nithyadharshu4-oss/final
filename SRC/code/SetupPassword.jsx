import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SetupPassword.css";

import shieldIcon from "../assets/Resetpassword-shield.png";
import secureIcon from "../assets/Resetpassword-secure.png";
import lockIcon from "../assets/ResetPassword-lock.png";
import tickIcon from "../assets/ResetPassword-tick.png";
import rightArrow from "../assets/right-arrowFP.png";

function SetupPassword() {
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordMatch =
    newPassword !== "" &&
    confirmPassword !== "" &&
    newPassword === confirmPassword;

  const handleUpdate = () => {
    console.log("Password Updated");
    navigate("/password-reset-success");
  };

  const handleBack = () => {
    navigate("/login");
  };

  return (
    <div className="setup-page">
      <div className="setup-left">
        <div className="setup-left-content">
          <div className="setup-shield">
            <img src={shieldIcon} alt="Shield" />
          </div>

          <h1>Secure your account</h1>

          <p>
            Ensure your career progress is protected.
            Set a strong password to continue your
            journey with InternHub.
          </p>
        </div>
      </div>

      <div className="setup-right">
        <div className="setup-card">
          <div className="setup-icon">
            <img src={secureIcon} alt="Secure" />
          </div>

          <h2>Set New Password</h2>

          <p className="setup-description">
            Your new password must be different from
            previous passwords.
          </p>

          <div className="input-group">
            <label>New Password</label>

            <div className="input-box">
              <img src={lockIcon} alt="lock" />

              <input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="input-group">
            <label>Confirm Password</label>

            <div className="input-box">
              <img src={tickIcon} alt="tick" />

              <input
                type="password"
                placeholder="Re-enter password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="password-info">
            <div className="info-row">
              <span className="status">
                {newPassword.length >= 8 ? "✓" : "○"}
              </span>

              <span>At least 8 characters</span>
            </div>

            <div className="info-row">
              <span className="status">
                {passwordMatch ? "✓" : "○"}
              </span>

              <span>Passwords match</span>
            </div>
          </div>

          <button
            className="update-btn"
            onClick={handleUpdate}
          >
            Update Password
            <img src={rightArrow} alt="arrow" />
          </button>

          <button
            className="back-login"
            onClick={handleBack}
          >
            &lsaquo; Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default SetupPassword;