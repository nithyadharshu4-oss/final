import "./VerificationCard.css";

function VerificationCard({ icon, title, subtitle, selected, onClick }) {
  return (
    <div
      className={`verification-card ${selected ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="card-left">
        <div className="icon-container">
          <img src={icon} alt={title} className="card-icon" />
        </div>

        <div className="card-content">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>

      <div className={`radio-button ${selected ? "selected" : ""}`}></div>
    </div>
  );
}

export default VerificationCard;