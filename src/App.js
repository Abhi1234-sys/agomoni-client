import React, { useEffect, useRef, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import "./App.css";
import About from "./pages/About";
import PandalExplorer from "./pages/PandalExplorer";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar";
import Dhaki from "./components/Dhaki";

import Home from "./pages/Home";
import Journey from "./pages/Journey";


function App() {

  // ==========================
  // COUNTDOWN
  // ==========================

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });


  // ==========================
  // DHAK AUDIO
  // ==========================

  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);


  // ==========================
  // DURGA PUJA COUNTDOWN
  // ==========================

  useEffect(() => {

    // Maha Shashthi 2026
    const pujaDate = new Date(
      "October 16, 2026 00:00:00"
    );

    const updateCountdown = () => {

      const now = new Date();

      const difference = pujaDate - now;


      if (difference <= 0) {

        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });

        return;
      }


      const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
      );


      const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      );


      const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
      );


      const seconds = Math.floor(
        (difference / 1000) % 60
      );


      setTimeLeft({
        days,
        hours,
        minutes,
        seconds
      });

    };


    updateCountdown();

    const timer = setInterval(
      updateCountdown,
      1000
    );


    return () => clearInterval(timer);

  }, []);


  // ==========================
  // PLAY / PAUSE DHAK
  // ==========================

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

      console.log(
        "Audio could not be played:",
        error
      );

    }

  };


  return (

    <BrowserRouter>

      <div className="app">

        {/* Background */}

        <div className="background-overlay"></div>


        {/* ================= NAVBAR ================= */}

        <Navbar />


        {/* ================= ROUTES ================= */}

        <Routes>

          <Route
            path="/"
            element={
              <Home
                timeLeft={timeLeft}
                isPlaying={isPlaying}
                toggleDhak={toggleDhak}
              />
            }
          />


          <Route
            path="/journey"
            element={<Journey />}
          />
          <Route
          path="/gallery"
          element={<Gallery/>}
          />
          <Route
            path="/pandal-explorer"
            element={<PandalExplorer />}
          />
          <Route path="/about" element={<About />} />

        </Routes>


        {/* ================= DHAKI ================= */}

        <Dhaki
          isPlaying={isPlaying}
          toggleDhak={toggleDhak}
        />


        {/* ================= AUDIO ================= */}

        <audio
          ref={audioRef}
          src="/dhak.mp3"
          loop
        />

      </div>

    </BrowserRouter>

  );
}

export default App;