import React, { useState } from "react";
import "./StudentSection.css";
import officeTeamImg from "../assets/office-image.png";

const TABS = ["Students", "Employers", "Universities"];

const FEATURES = [
  {
    title: "One-click Applications",
    description: "Apply to top-tier firms instantly with your verified profile.",
  },
  {
    title: "AI Career Coaching",
    description: "Personalized insights to help you stand out and land the role.",
  },
  {
    title: "Verified Credentials",
    description: "A portable digital record of your internship success.",
  },
];

export default function StudentSection() {
  const [activeTab, setActiveTab] = useState("Students");

  return (
    <section className="student-section">
      <div className="student-section__content">
        <div className="student-section__text">
          <h2 className="student-section__heading">
            For Students:
            <span className="student-section__heading-accent">
              Your Career Launchpad.
            </span>
          </h2>

          <ul className="student-section__features">
            {FEATURES.map((feature) => (
              <li className="student-section__feature" key={feature.title}>
                <span className="student-section__check" aria-hidden="true">
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5L4.2 8.2L11 1.4"
                      stroke="#2563EB"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div className="student-section__feature-body">
                  <p className="student-section__feature-title">{feature.title}</p>
                  <p className="student-section__feature-desc">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="student-section__tabs" role="tablist">
            {TABS.map((tab) => (
              <button
                key={tab}
                role="tab"
                type="button"
                aria-selected={activeTab === tab}
                className={
                  "student-section__tab" +
                  (activeTab === tab ? " student-section__tab--active" : "")
                }
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="student-section__media">
          <div className="student-section__media-frame">
            <img
              src={officeTeamImg}
              alt="Team working together in a modern office"
              className="student-section__media-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}