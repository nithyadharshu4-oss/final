import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./RightPanelVce.css";

const RESEND_SECONDS = 58;

const RightPanelVce = ({ maskedEmail = "j**n@g***l.com" }) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);

  const inputRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (secondsLeft <= 0) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft]);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    if (!pasted) return;

    const updatedOtp = new Array(6).fill("");

    pasted.split("").forEach((digit, i) => {
      updatedOtp[i] = digit;
    });

    setOtp(updatedOtp);

    inputRefs.current[Math.min(pasted.length, 5)]?.focus();
  };

  const handleResend = () => {
    if (secondsLeft > 0) return;

    setSecondsLeft(RESEND_SECONDS);
    setOtp(new Array(6).fill(""));
    inputRefs.current[0]?.focus();
  };

  const handleVerify = () => {
    const code = otp.join("");

    if (code.length < 6) {
      alert("Please enter the complete 6-digit verification code.");
      return;
    }

    console.log("Verifying code:", code);

    // Example:
    // navigate("/dashboard");
  };

  const handleBackToOptions = () => {
    navigate("/twostep");
  };

  return (
    <div className="rpv-container">
      <h2 className="rpv-title">Enter Verification Code</h2>

      <p className="rpv-subtitle">
        We've sent a 6-digit code to your email{" "}
        <strong>{maskedEmail}</strong>
      </p>

      <div className="rpv-otp-row" onPaste={handlePaste}>
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            className="rpv-otp-box"
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>

      <button className="rpv-verify-btn" onClick={handleVerify}>
        Verify Identity <span className="rpv-arrow">→</span>
      </button>

      <p className="rpv-resend">
        Didn't receive the code?{" "}
        {secondsLeft > 0 ? (
          <span className="rpv-resend-timer">
            Resend in {formatTime(secondsLeft)}
          </span>
        ) : (
          <span className="rpv-resend-link" onClick={handleResend}>
            Resend now
          </span>
        )}
      </p>

      <div className="rpv-divider"></div>

      <div className="rpv-links">
        <button
          type="button"
          className="rpv-back-link"
          onClick={handleBackToOptions}
        >
          🔒 Back to verification options
        </button>

        <a href="#" className="rpv-support-link">
          Contact Support
        </a>
      </div>
    </div>
  );
};

export default RightPanelVce;