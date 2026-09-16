import React, { useEffect } from "react";
import "./AlponaTrail.css";

const AlponaTrail = () => {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    const createAlponaParticle = (x, y) => {
      const particle = document.createElement("div");
      particle.className = "alpona-particle";

      // Mobile screen-এ সাইজ একটু বড় এবং স্পষ্ট রাখা
      const size = isMobile 
        ? Math.random() * 16 + 18 
        : Math.random() * 12 + 14;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;

      // র‍্যান্ডম রোটেশন
      const rotation = Math.random() * 360;
      particle.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;

      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 800);
    };

    // Mouse Move (Desktop)
    const handleMouseMove = (e) => {
      createAlponaParticle(e.clientX, e.clientY);
    };

    // Touch Move (Mobile) - আঙুলের থেকে সামান্য উপরে offset রাখা হয়েছে
    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        const touch = e.touches[0];
        // y - 18px করায় আঙুলের চাপেই আলপনা ঢেকে যাবে না
        createAlponaParticle(touch.clientX, touch.clientY - 18);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return null;
};

export default AlponaTrail;