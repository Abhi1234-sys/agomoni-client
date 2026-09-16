import React from "react";
import { Link } from "react-router-dom";

function Journey() {
  return (
    <main className="journey-page">
      <div className="journey-content">
        
        {/* ALPONA MOTIF SECTION */}
        <div className="journey-alpona" style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>
          <svg
            width="180"
            height="55"
            viewBox="0 0 200 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity: 0.9 }}
          >
            {/* Center Circle & Lotus Petals */}
            <circle cx="100" cy="30" r="8" stroke="#d4af37" strokeWidth="2" fill="none" />
            <circle cx="100" cy="30" r="3" fill="#d4af37" />
            
            <path d="M100 14 C104 20, 104 24, 100 22 C96 24, 96 20, 100 14 Z" fill="#d4af37" />
            <path d="M100 46 C104 40, 104 36, 100 38 C96 36, 96 40, 100 46 Z" fill="#d4af37" />
            <path d="M84 30 C90 34, 94 34, 92 30 C94 26, 90 26, 84 30 Z" fill="#d4af37" />
            <path d="M116 30 C110 34, 106 34, 108 30 C106 26, 110 26, 116 30 Z" fill="#d4af37" />

            {/* Outer Decorative Ring */}
            <circle cx="100" cy="30" r="16" stroke="#d4af37" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />

            {/* Left Traditional Paisley/Curve Flourish */}
            <path d="M80 30 C60 15, 40 45, 10 30" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M75 30 C58 8, 35 48, 18 30" stroke="#d4af37" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            <path d="M50 26 C42 16, 30 20, 35 30 C40 40, 52 34, 50 26 Z" fill="#d4af37" opacity="0.85" />
            <circle cx="25" cy="22" r="2.5" fill="#d4af37" />
            <circle cx="15" cy="26" r="2" fill="#d4af37" />
            <circle cx="8" cy="30" r="1.5" fill="#d4af37" />

            {/* Right Traditional Paisley/Curve Flourish */}
            <path d="M120 30 C140 15, 160 45, 190 30" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M125 30 C142 8, 165 48, 182 30" stroke="#d4af37" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            <path d="M150 26 C158 16, 170 20, 165 30 C160 40, 148 34, 150 26 Z" fill="#d4af37" opacity="0.85" />
            <circle cx="175" cy="22" r="2.5" fill="#d4af37" />
            <circle cx="185" cy="26" r="2" fill="#d4af37" />
            <circle cx="192" cy="30" r="1.5" fill="#d4af37" />
          </svg>
        </div>

        <p className="journey-small-title">
          ✦ YOUR PUJA ADVENTURE ✦
        </p>

        <h1>
          Start Your
          <span> Journey</span>
        </h1>

        <p className="journey-description">
          Explore the city, discover beautiful pandals,
          find useful places and experience Durga Puja
          like never before.
        </p>

        {/* OPTIONS */}
        <div className="journey-grid">

          {/* PARKING */}
          <div className="journey-card">
            <div className="card-icon">
              🚗
            </div>
            <h2>Nearby Parking</h2>
            <p>
              Find parking spaces near your location.
            </p>
            <Link to="/nearby-parking" className="explore-button">
              Explore
            </Link>
          </div>

          {/* RESTAURANT */}
          <div className="journey-card">
            <div className="card-icon">
              🍽️
            </div>
            <h2>Nearby Restaurants</h2>
            <p>
              Discover restaurants and food places nearby.
            </p>
            <Link to="/nearby-restaurants" className="explore-button">
              Explore
            </Link>
          </div>

          {/* TOILET */}
          <div className="journey-card">
            <div className="card-icon">
              🚻
            </div>
            <h2>Public Toilets</h2>
            <p>
              Find nearby public toilet facilities.
            </p>
            <Link to="/public-toilets" className="explore-button">
              Explore
            </Link>
          </div>

          {/* PANDAL EXPLORER */}
          <div className="journey-card">
            <div className="card-icon">
              🛕
            </div>
            <h2>Pandal Explorer</h2>
            <p>
              Discover famous Durga Puja pandals.
            </p>
            <Link to="/pandal-explorer" className="explore-button">
              Explore
            </Link>
          </div>

        </div>

        {/* BACK */}
        <Link to="/" className="back-home">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}

export default Journey;