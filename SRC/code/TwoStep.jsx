import React from "react";
import LeftPanelTsve from "./LeftPanelTsve";
import RightPanelTsve from "./RightPanelTsve";
import "./TwoStep.css";

const TwoStep = () => {
  return (
    <div className="ts-page">
      <div className="ts-left">
        <LeftPanelTsve />
      </div>
      <div className="ts-right">
        <RightPanelTsve
          maskedEmail="j**n@g***l.com"
          maskedPhone="+91 9****'5678"
        />
      </div>
    </div>
  );
};

export default TwoStep;