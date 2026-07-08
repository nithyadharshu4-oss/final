import React from "react";
import LeftPanelFp from "./LeftPanelFp";
import RightPanelFp from "./RightPanelFp";
import "./TwoStepFp.css";

const TwoStep = () => {
  return (
    <div className="ts2-page">
      <div className="ts2-left">
        <LeftPanelFp />
      </div>
      <div className="ts2-right">
        <RightPanelFp
          maskedEmail="j**n@g***l.com"
          maskedPhone="+91 9**** *5678"
        />
      </div>
    </div>
  );
};

export default TwoStep;