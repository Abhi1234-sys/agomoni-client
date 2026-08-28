import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span className="footer-title">© 2026 আগমণী</span>
        <span className="footer-text">| Bankura Puja Porikroma |</span>
        <span className="footer-dot">•</span>
        <Link 
          to="/admin" 
          className="secret-admin-trigger" 
          title="Admin Control"
        >
          🔒
        </Link>
      </div>
    </footer>
  );
};

export default Footer;