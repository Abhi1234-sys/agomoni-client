import React from "react";
import "./AlponaDivider.css";

function AlponaDivider({ title }) {
  return (
    <div className="alpona-divider-container">
      <div className="alpona-line"></div>
      <div className="alpona-svg-wrapper">
        <svg
          viewBox="0 0 500 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="alpona-svg"
        >
          {/* Central Lotus Motif */}
          <circle cx="250" cy="30" r="6" fill="currentColor" />
          <circle
            cx="250"
            cy="30"
            r="12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />

          {/* Lotus Petals */}
          <path
            d="M250 10 C254 18, 254 18, 250 20 C246 18, 246 18, 250 10 Z"
            fill="currentColor"
          />
          <path
            d="M250 50 C254 42, 254 42, 250 40 C246 42, 246 42, 250 50 Z"
            fill="currentColor"
          />
          <path
            d="M230 30 C238 34, 238 34, 240 30 C238 26, 238 26, 230 30 Z"
            fill="currentColor"
          />
          <path
            d="M270 30 C262 34, 262 34, 260 30 C262 26, 262 26, 270 30 Z"
            fill="currentColor"
          />

          {/* Left Swirls & Dots */}
          <path
            d="M220 30 Q190 10 160 30 T100 30 T40 30 T0 30"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M220 30 Q190 50 160 30"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="2 2"
            fill="none"
          />
          <circle cx="160" cy="30" r="3" fill="currentColor" />
          <circle cx="100" cy="30" r="3" fill="currentColor" />
          <circle cx="50" cy="30" r="3" fill="currentColor" />

          {/* Right Swirls & Dots */}
          <path
            d="M280 30 Q310 10 340 30 T400 30 T460 30 T500 30"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M280 30 Q310 50 340 30"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="2 2"
            fill="none"
          />
          <circle cx="340" cy="30" r="3" fill="currentColor" />
          <circle cx="400" cy="30" r="3" fill="currentColor" />
          <circle cx="450" cy="30" r="3" fill="currentColor" />
        </svg>

        {title && <span className="alpona-divider-title">{title}</span>}
      </div>
      <div className="alpona-line"></div>
    </div>
  );
}

export default AlponaDivider;