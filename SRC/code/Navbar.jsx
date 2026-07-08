import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__container">
        <Link className="navbar__logo" to="/">
          Intern<span className="navbar__logo-accent">MS</span>
        </Link>

        <nav className={"navbar__nav" + (menuOpen ? " navbar__nav--open" : "")}>
          <Link
            className="navbar__link"
            to="/login"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>

          <Link
            className="navbar__btn"
            to="/register"
            onClick={() => setMenuOpen(false)}
          >
            Register
          </Link>
        </nav>

        <button
          className={"navbar__toggle" + (menuOpen ? " navbar__toggle--open" : "")}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}