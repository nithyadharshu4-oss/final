import React from "react";
import "./Features.css";
import iconAutomatedMatching from "../assets/icon-automated-matching.png";
import iconRealTimeTracking from "../assets/icon-real-time-tracking.png";
import iconSecureDocuments from "../assets/icon-secure-documents.png";
import iconArrow from "../assets/icon-arrow.png";

const FEATURES = [
  {
    icon: iconAutomatedMatching,
    // iconBg: "#e7edfd",
    title: "Automated Matching",
    description:
      "Our AI-driven algorithm pairs candidates with their ideal roles based on skills, culture fit, and academic requirements.",
  },
  {
    icon: iconRealTimeTracking,
    // iconBg: "#e3f5ec",
    title: "Real-time Tracking",
    description:
      "Monitor progress from application to final evaluation with granular dashboards for all stakeholders.",
  },
  {
    icon: iconSecureDocuments,
    // iconBg: "#e9e9ec",
    title: "Secure Documents",
    description:
      "Enterprise-grade encryption for contracts, NDAs, and compliance certifications with automated reminders.",
  },
];

export default function Features() {
  return (
    <section className="features">
      <div className="features__container">
        <div className="features__header">
          <div className="features__heading-group">
            <h2 className="features__heading">Engineered for Efficiency</h2>
            <p className="features__subheading">
              Complex placement workflows simplified into an intuitive, high-speed
              ecosystem designed for scale.
            </p>
          </div>

          <a className="features__link" href="#all-features">
            Explore all features
            <img className="features__link-icon" src={iconArrow} alt="" aria-hidden="true" />
          </a>
        </div>

        <div className="features__grid">
          {FEATURES.map((feature) => (
            <div className="features__card" key={feature.title}>
              <div
                className="features__icon"
                style={{ backgroundColor: feature.iconBg }}
              >
                <img src={feature.icon} alt="" aria-hidden="true" />
              </div>
              <h3 className="features__card-title">{feature.title}</h3>
              <p className="features__card-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}