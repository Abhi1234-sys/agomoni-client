import React, { useState, useEffect } from "react";
import "./KashfulProgressBar.css";

function KashfulProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const totalHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const currentScroll = window.scrollY;
    
    if (totalHeight > 0) {
      const scrolled = (currentScroll / totalHeight) * 100;
      setScrollProgress(scrolled);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="kashful-progress-container">
      <div
        className="kashful-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      >
        {/* প্রোগ্রেস বারের প্রান্তে মিষ্টি কাশফুল আইকন */}
        <div className="kashful-icon" title="শরতের কাশফুল">
          <svg viewBox="0 0 24 24" width="28" height="28">
            <path
              d="M12 2C12 2 13.5 7 16.5 9.5C18.5 11 21 12 21 12C21 12 17.5 14 15.5 16C13.5 18 12 22 12 22C12 22 10.5 18 8.5 16C6.5 14 3 12 3 12C3 12 5.5 11 7.5 9.5C10.5 7 12 2 12 2Z"
              fill="#FFFFFF"
            />
            <path
              d="M12 10V22"
              stroke="#D47A00"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default KashfulProgressBar;