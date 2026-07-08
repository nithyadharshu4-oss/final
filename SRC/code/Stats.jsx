import React from "react";
import "./Stats.css";

const STATS = [
  { value: "500+", label: "Universities" },
  { value: "10k+", label: "Global Companies" },
  { value: "1M+", label: "Placements" },
];

export default function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="stats-bar__container">
        {STATS.map((stat, index) => (
          <div className="stats-bar__item" key={stat.label}>
            {index !== 0 && <span className="stats-bar__divider" aria-hidden="true" />}
            <div className="stats-bar__content">
              <p className="stats-bar__value">{stat.value}</p>
              <p className="stats-bar__label">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}