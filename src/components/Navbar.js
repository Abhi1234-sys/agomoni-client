import React from "react";
import { NavLink } from "react-router-dom";


function Navbar() {

  return (

    <nav className="navbar">

      {/* LOGO */}

      <NavLink
        to="/"
        className="logo"
      >
      <img className="photodurga-ma"
            src="/Navbar durga ma.png"
            alt="Durga Ma"
      />
        <span className="trident">
          <h2>আগমনী</h2>
        </span>

        

      </NavLink>


      {/* NAVIGATION */}

      <div className="nav-links">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "nav-link active"
              : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
  to="/gallery"
  className={({ isActive }) =>
    isActive
      ? "nav-link active"
      : "nav-link"
  }
>
  Gallery
</NavLink>
         
        <NavLink
          to="/journey"
          className={({ isActive }) =>
            isActive
              ? "nav-link journey-link active"
              : "nav-link journey-link"
          }
        >
          Start Your Journey
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "nav-link journey-link active"
              : "nav-link journey-link"
          }
        >
          About Us
        </NavLink>

      </div>

    </nav>

  );
}


export default Navbar;