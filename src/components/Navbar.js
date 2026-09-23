import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MahalayaToggle from "./MahalayaToggle"; // Adjust path according to your project structure if needed (e.g., "../components/MahalayaToggle")

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* LOGO */}
      <NavLink to="/" className="logo">
        <img
  className="photodurga-ma"
  src="/iconnn.png" 
  alt="Durga Ma"
  loading="lazy"
/>
<img
  className="agomoni-text-img"
  src="/WebName.png"
  alt="Agomoni"
  loading="lazy"
/>
      </NavLink>

      {/* HEADER ACTIONS (Mahalaya Chants + Mobile 3-Dot Button) */}
      <div 
        className="nav-actions" 
        style={{ display: "flex", alignItems: "center", gap: "12px" }}
      >
        {/* Always visible on mobile before opening the 3-dot menu */}
        <MahalayaToggle />

        {/* 3-DOT MENU BUTTON (Only for Mobile) */}
        <div 
          className="mobile-dots-btn" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      {/* NAVIGATION LINKS */}
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