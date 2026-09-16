import React, { useEffect } from "react";
import "./ShiuliShower.css";

function ShiuliShower() {
  useEffect(() => {
    const handleClick = (e) => {
      
      if (e.target.closest("button, a, input, select, textarea, [role='button']")) {
        return;
      }

      const x = e.clientX;
      const y = e.clientY;

      
      const flowerCount = 6;
      for (let i = 0; i < flowerCount; i++) {
        createFlower(x, y);
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  const createFlower = (startX, startY) => {
    const flower = document.createElement("div");
    flower.className = "shiuli-flower-particle";

    flower.innerHTML = `
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <g fill="#FFFFFF">
          <circle cx="50" cy="20" r="16" />
          <circle cx="80" cy="50" r="16" />
          <circle cx="50" cy="80" r="16" />
          <circle cx="20" cy="50" r="16" />
          <circle cx="30" cy="30" r="14" />
          <circle cx="70" cy="30" r="14" />
          <circle cx="70" cy="70" r="14" />
          <circle cx="30" cy="70" r="14" />
        </g>
        <circle cx="50" cy="50" r="12" fill="#FF5500" />
        <circle cx="50" cy="50" r="5" fill="#CC2200" />
      </svg>
    `;

    
    const screenBottomDistance = window.innerHeight - startY + 60;

    const size = Math.random() * 10 + 18; 
    const offsetX = (Math.random() - 0.5) * 50;
    const offsetY = (Math.random() - 0.5) * 20;
    const fallY = screenBottomDistance; 
    const swayX = (Math.random() - 0.5) * 140; 
    const duration = Math.random() * 2 + 3.8; 
    const rotate = Math.random() * 720 - 360; 

    flower.style.left = `${startX + offsetX}px`;
    flower.style.top = `${startY + offsetY}px`;
    flower.style.width = `${size}px`;
    flower.style.height = `${size}px`;

    flower.style.setProperty("--fall-y", `${fallY}px`);
    flower.style.setProperty("--sway-x", `${swayX}px`);
    flower.style.setProperty("--rotate", `${rotate}deg`);
    flower.style.animation = `shiuliSlowFallAnim ${duration}s ease-in-out forwards`;

    document.body.appendChild(flower);

    setTimeout(() => {
      flower.remove();
    }, duration * 1000);
  };

  return null;
}

export default ShiuliShower;