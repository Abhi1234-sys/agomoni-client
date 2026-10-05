import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BackButton.css";

function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
  setShowButton(true);

  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY <= 20) {
      setShowButton(true);
    } else if (currentScrollY > lastScrollY + 5) {
      setShowButton(false);
    } else if (currentScrollY < lastScrollY - 5) {
      setShowButton(true);
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [location.pathname]);

  // Don't show on Home
  if (location.pathname === "/") {
    return null;
  }

  // Pages where Back button should appear
  const allowedPages = [
    "/gallery",
    "/journey",
    "/pandal-explorer",
    "/emergency",
    "/about",
    "/puja-details",
    "/nearby-parking",
    "/public-toilets",
    "/nearby-restaurants",
    "/admin"
  ];

  if (!allowedPages.includes(location.pathname)) {
    return null;
  }

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button
      className={`royal-back-button ${
        showButton ? "back-visible" : "back-hidden"
      }`}
      onClick={handleBack}
      aria-label="Go back"
    >
      <span className="back-arrow">←</span>
      {/* <span className="back-text">BACK</span>
      <span className="back-flower">✦</span> */}
    </button>
  );
}

export default BackButton;