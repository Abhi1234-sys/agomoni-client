import React from "react";
import { Link } from "react-router-dom";


function Home({
  timeLeft,
  isPlaying,
  toggleDhak
}) {

  return (

    <main className="home-page">

      {/* ব্যাকগ্রাউন্ড স্লাইডশো ডিভ (এটি মিসিং ছিল, তাই ব্যাকগ্রাউন্ডে ছবি আসছিল না) */}
      <div className="home-background-slideshow">
        <div className="home-bg bg1"></div>
        <div className="home-bg bg2"></div>
        <div className="home-bg bg3"></div>
        <div className="home-bg bg4"></div>
      </div>

      <div className="hero-content">


        {/* TOP TEXT */}

        <p className="welcome-text">
          ✦ শুভ মহালয়া ✦
        </p>


        {/* MAIN TITLE */}

        <h1 className="hero-title">

          Jai

          <span>
            Maa Durga
          </span>

        </h1>


        {/* DECORATION */}

        <div className="gold-divider">

          <span>✦</span>

          <div></div>

          <span>🪷</span>

          <div></div>

          <span>✦</span>

        </div>


        {/* COUNTDOWN TITLE */}

        <h2 className="countdown-title">
          Durga Puja Countdown
        </h2>


        {/* COUNTDOWN */}

        <div className="countdown">

          <div className="time-card">

            <strong>
              {String(timeLeft.days).padStart(2, "0")}
            </strong>

            <span>
              Days
            </span>

          </div>


          <div className="time-card">

            <strong>
              {String(timeLeft.hours).padStart(2, "0")}
            </strong>

            <span>
              Hours
            </span>

          </div>


          <div className="time-card">

            <strong>
              {String(timeLeft.minutes).padStart(2, "0")}
            </strong>

            <span>
              Minutes
            </span>

          </div>


          <div className="time-card">

            <strong>
              {String(timeLeft.seconds).padStart(2, "0")}
            </strong>

            <span>
              Seconds
            </span>

          </div>

        </div>


        {/* DESCRIPTION */}

        <p className="hero-subtitle">
          She is coming to bless us all.
        </p>


        <p className="bengali">
          আশ্বিন আসিছে, পূজো আসিছে
        </p>


        {/* JOURNEY BUTTON */}

        <Link
          to="/journey"
          className="journey-button"
        >

          <span>
            Start Your Journey
          </span>

          <span className="arrow">
            →
          </span>

        </Link>
        
        


        {/* SMALL DHAK BUTTON */}

        <button
          className="play-button"
          onClick={toggleDhak}
        >

          {isPlaying
            ? "⏸ Pause Dhak"
            : "🥁 Play Dhak"
          }

        </button>


      </div>


      {/* SCROLL DECORATION */}

      <div className="scroll-decoration">

        <span>
          ↓
        </span>

      </div>

    </main>

  );
}


export default Home;