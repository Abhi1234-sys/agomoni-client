import React, { useState, useRef } from "react";
import "./MahalayaToggle.css";

const MahalayaToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.volume = 0.35; // ২৫-৩৫% সফট ব্যাকগ্রাউন্ড ভলিউম
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error("Audio playback error:", err);
        });
    }
  };

  return (
    <div className="mahalaya-header-badge">
      {/* public/Audio/mahalaya.mp3 পাথ সেট করা হলো */}
      <audio
        ref={audioRef}
        src={process.env.PUBLIC_URL + "/Audio/mahalaya.mp3"}
        loop
        preload="auto"
      />

      <button
        className={`mahalaya-btn ${isPlaying ? "active" : ""}`}
        onClick={toggleAudio}
        title={isPlaying ? "Mute Chants" : "Play Mahalaya Chants"}
      >
        <span className="lamp-icon">🪔</span>
        <span className="btn-text">Mahalaya Chants</span>

        {isPlaying ? (
          <div className="sound-wave">
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : (
          <span className="sound-icon">🔈</span>
        )}
      </button>
    </div>
  );
};

export default MahalayaToggle;