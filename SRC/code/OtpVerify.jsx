import React from "react";
import LeftPanelVce from "./LeftPanelVce";
import RightPanelVce from "./RightPanelVce";
import "./OtpVerify.css";

const OtpVerify = () => {
  return (
    <div className="ov-page">
      <div className="ov-wrapper">
        <div className="ov-left">
          <LeftPanelVce />
        </div>
        <div className="ov-right">
          <RightPanelVce maskedEmail="j**n@g***l.com" />
        </div>
      </div>
    </div>
  );
};

export default OtpVerify;