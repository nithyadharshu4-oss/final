import "./LeftPanel.css";

function LeftPanel() {
  return (
    <div className="left-panel">
      <div className="left-panel__top">
        <div className="left-panel__logo">InternHub</div>

        <h1 className="left-panel__headline">
          Your next big leap
          <br />
          starts here.
        </h1>

        <p className="left-panel__description">
          Connect with industry leaders, manage your applications, and
          accelerate your career path with our comprehensive internship
          management platform.
        </p>

        <div className="left-panel__stats">
          <div className="left-panel__stat">
            <div className="left-panel__stat-number">500+</div>
            <div className="left-panel__stat-label">PARTNER COMPANIES</div>
          </div>
          <div className="left-panel__stat">
            <div className="left-panel__stat-number">10k+</div>
            <div className="left-panel__stat-label">SUCCESS STORIES</div>
          </div>
        </div>
      </div>

      <div className="left-panel__footer">© 2024 InternMS</div>
    </div>
  );
}

export default LeftPanel;