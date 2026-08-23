import React, { useRef, useState } from "react";
import "./Dhaki.css";

function Dhaki() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleDhak = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log("Audio could not be played:", error);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/dhak.mp3"
        loop
      />

      <div className="real-dhaki-container">

        {/* Ambient glow */}
        <div className="dhaki-glow"></div>

        {/* Dhaki */}
        <div
          className={`real-dhaki ${
            isPlaying ? "dhaki-playing" : ""
          }`}
        >
          <img
            src="/Dhaki1.png"
            alt="Dhaki playing Dhak"
          />
        </div>

        {/* Play button */}
        <button
          className="dhaki-control"
          onClick={toggleDhak}
          aria-label={isPlaying ? "Stop Dhak" : "Play Dhak"}
        >
          {isPlaying ? "🔊" : "🥁"}
        </button>

      </div>
    </>
  );
}

export default Dhaki;