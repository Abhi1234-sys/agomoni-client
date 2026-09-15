import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* LOGO */}
      <NavLink to="/" className="logo">
  <img
    className="photodurga-ma"
    src="/iconn.jpeg" 
    alt="Durga Ma"
  />
        <span className="trident">
          <h2>𝒜𝑔𝑜𝓂𝑜𝓃𝒾</h2>
        </span>
      </NavLink>

      {/* 3-DOT MENU BUTTON (Only for Mobile) */}
      <div 
        className="mobile-dots-btn" 
        onClick={() => setIsOpen(!isOpen)}
      >
        ⋮
      </div>

      {/* NAVIGATION */}
      <div className={`nav-links ${isOpen ? "mobile-menu-open" : ""}`}>
        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/gallery"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Gallery
        </NavLink>

        <NavLink
          to="/journey"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            isActive ? "nav-link journey-link active" : "nav-link journey-link"
          }
        >
          Start Your Journey
        </NavLink>

        <NavLink
          to="/about"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            isActive ? "nav-link journey-link active" : "nav-link journey-link"
          }
        >
          About Us
        </NavLink>

        {/* 🚨 Emergency Link/Button */}
        <NavLink
          to="/emergency"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "nav-link emergency-nav-btn active"
              : "nav-link emergency-nav-btn"
          }
        >
          Emergency
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;