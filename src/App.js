import React, { useEffect, useRef, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Dhaki from "./components/Dhaki";
import Footer from "./components/Footer";
import ShiuliShower from "./components/ShiuliShower";

// Pages import
import Home from "./pages/Home";
import Journey from "./pages/Journey";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import PandalExplorer from "./pages/PandalExplorer";
import NearbyRestaurants from "./pages/NearbyRestaurants";
import NearbyParking from "./pages/NearbyParking";
import PublicToilets from "./pages/PublicToilets";
import AdminDashboard from "./pages/AdminDashboard";
import EmergencyHelp from "./pages/EmergencyHelp";

function App() {
  
  // COUNTDOWN
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  
  // DHAK AUDIO

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  
  // DURGA PUJA COUNTDOWN

  useEffect(() => {
    // Maha Shashthi 2026
    const pujaDate = new Date("October 16, 2026 00:00:00");

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

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds
      });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  
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
    <BrowserRouter>
      <div className="app">
        {/* Background */}
        <div className="background-overlay"></div>

        {/* SHIULI PETAL SHOWER EFFECT */}
        <ShiuliShower />

        {/*NAVBAR */}
        <Navbar />

        {/* ROUTES*/}
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
          <Route path="/journey" element={<Journey />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pandal-explorer" element={<PandalExplorer />} />
          <Route path="/nearby-restaurants" element={<NearbyRestaurants />} />
          <Route path="/nearby-parking" element={<NearbyParking />} />
          <Route path="/public-toilets" element={<PublicToilets />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/emergency" element={<EmergencyHelp />} />
        </Routes>

        {/*FOOTER */}
        <Footer />

        {/*DHAKI*/}
        <Dhaki isPlaying={isPlaying} toggleDhak={toggleDhak} />

        {/*AUDIO*/}
        <audio ref={audioRef} src="/dhak.mp3" loop />
      </div>
    </BrowserRouter>
  );
}

export default App;