import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RightPanel.css";

import mailIcon from "../assets/mail.jpg";
import lockIcon from "../assets/lock.jpg";
import eyeIcon from "../assets/eye.jpg";
import eyeOffIcon from "../assets/eye-off.jpg";
import googleIcon from "../assets/google.jpg";

function RightPanel() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      email,
      password,
      keepSignedIn,
    });

    // Navigate to TwoStepFp.jsx
    navigate("/twostep");
  };

  return (
    <div className="right-panel">
      <div className="right-panel__card">
        <h2 className="right-panel__title">Welcome Back</h2>

        <p className="right-panel__subtitle">
          Manage your career journey.
        </p>

        <form className="right-panel__form" onSubmit={handleSubmit}>
          <label className="right-panel__label" htmlFor="email">
            Email Address
          </label>

          <div className="right-panel__input-wrapper">
            <img
              src={mailIcon}
              alt=""
              className="right-panel__input-icon"
            />

            <input
              id="email"
              type="email"
              className="right-panel__input"
              placeholder="Enter Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="right-panel__label-row">
            <label
              className="right-panel__label"
              htmlFor="password"
            >
              Password
            </label>

            {/* Forgot Password -> TwoStep.jsx */}
            <Link
              to="/twostepfp"
              className="right-panel__forgot-link"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="right-panel__input-wrapper">
            <img
              src={lockIcon}
              alt=""
              className="right-panel__input-icon"
            />

            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className="right-panel__input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              className="right-panel__eye-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              <img
                src={showPassword ? eyeOffIcon : eyeIcon}
                alt=""
                className="right-panel__eye-icon"
              />
            </button>
          </div>

          <label className="right-panel__checkbox-row">
            <input
              type="checkbox"
              checked={keepSignedIn}
              onChange={(e) =>
                setKeepSignedIn(e.target.checked)
              }
            />

            <span>Keep me signed in</span>
          </label>

          <button
            type="submit"
            className="right-panel__submit"
          >
            Sign In
            <span className="right-panel__submit-arrow">
              →
            </span>
          </button>
        </form>

        <div className="right-panel__divider">
          <span>OR CONTINUE WITH</span>
        </div>

        <button
          type="button"
          className="right-panel__google-btn"
        >
          <img
            src={googleIcon}
            alt=""
            className="right-panel__google-icon"
          />
          Google
        </button>

        <p className="right-panel__signup-text">
          Don't have an account?{" "}
          <a
            href="#create-account"
            className="right-panel__signup-link"
          >
            Create Account
          </a>
        </p>
      </div>
    </div>
  );
}

export default RightPanel;