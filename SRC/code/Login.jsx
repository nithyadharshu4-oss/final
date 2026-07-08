import React from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-container">
      <LeftPanel />
      <RightPanel />
    </div>
  );
}