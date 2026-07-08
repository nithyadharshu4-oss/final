import React from "react";
import "./Hero.css";
import heroBgShape from "../assets/hero-bg-shape.png";
import dashboardLaptop from "../assets/dashboard-laptop.png";
import iconSparkle from "../assets/icon-sparkle.png";
import floatingSuccessCard from "../assets/floating-success-card.png";

export default function Features() {
  return (
    <section className="hero">
      <img className="hero__bg-shape" src={heroBgShape} alt="" aria-hidden="true" />

      <div className="hero__container">
        <div className="hero__text">
          <span className="hero__badge">
            <img className="hero__badge-icon" src={iconSparkle} alt="" aria-hidden="true" />
            Next-Generation Placement OS
          </span>

          <h1 className="hero__heading">
            Seamless Internships.
            <span className="hero__heading-accent">Smarter Management.</span>
          </h1>

          <p className="hero__subheading">
            Bridging the gap between ambitious talent and global opportunities.
            The definitive operating system for universities, students, and
            world-class employers.
          </p>

          <div className="hero__actions">
            <button className="hero__btn hero__btn--primary" type="button">
              Get Started
              <svg
                className="hero__btn-icon"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="hero__btn hero__btn--secondary" type="button">
              Book a Demo
            </button>
          </div>
        </div>

        <div className="hero__media">
          <div className="hero__media-panel">
            <img
              className="hero__media-img"
              src={dashboardLaptop}
              alt="Internship management dashboard shown on a laptop"
            />
          </div>

          <img
            className="hero__floating-card"
            src={floatingSuccessCard}
            alt="Success rate increased by 24 percent"
          />
        </div>
      </div>
    </section>
  );
}