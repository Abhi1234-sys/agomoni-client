import { useEffect } from "react";
import "./AlponaTrail.css";

function AlponaTrail() {
  useEffect(() => {
    let lastSpawn = 0;

    const handleMouseMove = (e) => {
      const now = Date.now();
      // পারফর্ম্যান্স ঠিক রাখতে প্রতি ৫০ms পর পর মোটিফ তৈরি হবে
      if (now - lastSpawn < 50) return;
      lastSpawn = now;

      createAlponaMotif(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const createAlponaMotif = (x, y) => {
    const motif = document.createElement("div");
    motif.className = "alpona-trail-particle";

    // ট্র্যাডিশনাল পদ্ম-আলপনা SVG
    motif.innerHTML = `
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <circle cx="50" cy="50" r="14" fill="none" stroke="currentColor" stroke-width="3" />
        <path d="M50 10 L50 30 M50 70 L50 90 M10 50 L30 50 M70 50 L90 50" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
        <path d="M22 22 L36 36 M64 64 L78 78 M22 78 L36 64 M64 36 L78 22" stroke="currentColor" stroke-width="2" />
        <circle cx="50" cy="50" r="5" fill="currentColor" />
      </svg>
    `;

    const size = Math.random() * 10 + 20; // ২০px থেকে ৩০px সাইজ
    const rotation = Math.random() * 360;

    motif.style.left = `${x - size / 2}px`;
    motif.style.top = `${y - size / 2}px`;
    motif.style.width = `${size}px`;
    motif.style.height = `${size}px`;

    document.body.appendChild(motif);

    setTimeout(() => {
      motif.remove();
    }, 800);
  };

  return null;
}

export default AlponaTrail;