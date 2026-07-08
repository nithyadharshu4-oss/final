import { useNavigate } from "react-router-dom";
import "./PasswordResetSucess.css";

import shieldIcon from "../assets/lp-tick.png";
import leftImage from "../assets/click-image.png";
import tickIcon from "../assets/tick-image.png";

function PasswordResetSucess() {
  const navigate = useNavigate();

  return (
    <div className="reset-container">
      <div className="reset-left-panel">
        <div className="left-content">
          <div className="shield-circle">
            <img src={shieldIcon} alt="Shield" />
          </div>

          <h1>Password reset successfully</h1>

          <p>
            Your security is our priority. You can now log in with your new
            credentials.
          </p>

          <img
            src={leftImage}
            alt="Password Reset"
            className="left-image"
          />
        </div>
      </div>

      <div className="reset-right-panel">
        <div className="success-box">
          <div className="action-badge">
            <img src={tickIcon} alt="Tick" className="badge-icon" />
            <span>Action Complete</span>
          </div>

          <h2>Success</h2>

          <p>
            Your password has been updated. To keep your account secure, we
            recommend not sharing your password with anyone.
          </p>

          <button
            className="login-btn"
            onClick={() => navigate("/login")}
          >
            Back to Login
          </button>

          <hr />
        </div>
      </div>
    </div>
  );
}

export default PasswordResetSucess;