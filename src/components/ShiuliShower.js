import { useEffect } from "react";
import "./ShiuliShower.css"; // নিশ্চিত করুন ফাইলটি src/components/ ফোল্ডারে আছে

function ShiuliShower() {
  useEffect(() => {
    const handleShower = (e) => {
      // বাটন বা লিংক এ টাচ/ক্লিক করলে ইভেন্ট স্কিপ করবে
      if (
        e.target &&
        e.target.closest &&
        e.target.closest("button, a, input, select, textarea, [role='button']")
      ) {
        return;
      }

      // মাউস ও টাচ—উভয় ডিভাইসের জন্যই স্থানাঙ্ক (coordinates) গ্রহণ
      let x = e.clientX;
      let y = e.clientY;

      if (e.touches && e.touches.length > 0) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      }

      if (x === undefined || y === undefined) return;

      const flowerCount = 6;
      for (let i = 0; i < flowerCount; i++) {
        createFlower(x, y);
      }
    };

    // pointerdown ডেস্কটপ ও মোবাইল টাচ—উভয় ডিভাইসেই স্মুথ কাজ করে
    window.addEventListener("pointerdown", handleShower);

    return () => {
      window.removeEventListener("pointerdown", handleShower);
    };
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