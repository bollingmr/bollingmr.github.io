import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <img
            src="/assets/logo-name.svg"
            alt="Michael Bolling Logo"
          />
        </NavLink>
      </div>
      <nav className={isMobileMenuOpen ? "nav open" : "nav"}>
        <ul>
          <li>
            <NavLink
              to="/"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div
        className="hamburger"
        onClick={toggleMobileMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Header;
