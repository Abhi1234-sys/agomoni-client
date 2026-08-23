import React from "react";
import { Link } from "react-router-dom";


function Home({
  timeLeft,
  isPlaying,
  toggleDhak
}) {

  return (

    <main className="home-page">
       <div className="home-background-slideshow">

        <div className="home-bg bg1"></div>
        <div className="home-bg bg2"></div>
        <div className="home-bg bg3"></div>
        <div className="home-bg bg4"></div>

      </div>

      <div className="hero-content">


        {/* TOP TEXT */}

        


        {/* MAIN TITLE */}

        <h4 className="hero-title">

          Bankura

          <span>
            Puja Porikroma 2k26
          </span>

        </h4>


        {/* DECORATION */}

        <div className="gold-divider">

          <span>✦</span>

          <div></div>

          <span>🪷</span>

          <div></div>

          <span>✦</span>

        </div>
        <span className="bengali"> 
          আগমনী বার্তা
        </span>
         <p className="bengali">
          পুজোর পথে, স্মৃতির সাথে...
        </p>
        <p className="smallpara-homepage">
          A living guide to Bankura’s Durga Puja, helping you discover pandals, explore their stories and traditions, find nearby experiences, and plan your perfect pandal-hopping journey.
        </p>
       
        {/* COUNTDOWN TITLE */}

        {/* <h2 className="countdown-title">
          Durga Puja Countdown
        </h2> */}
       

        {/* COUNTDOWN */}

        {/* <div className="countdown">

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

        </div> */}
      {/* ROYAL DURGA PUJA COUNTDOWN */}

<div className="royal-countdown">

  <div className="countdown-heading">
    <span className="heading-line"></span>

    <div>
      <small>THE AUSPICIOUS ARRIVAL</small>
      <h2>Durga Puja Countdown</h2>
    </div>

    <span className="heading-line"></span>
  </div>


  {/* Decorative rotating halo */}

  <div className="countdown-mandala">

    <div className="mandala-ring ring-one"></div>
    <div className="mandala-ring ring-two"></div>
    <div className="mandala-ring ring-three"></div>

    <div className="countdown-center">

      <div className="lotus">
        🪷
      </div>

      <span className="coming-text">
        SHE IS COMING
      </span>

    </div>

  </div>


  {/* Numbers */}

  <div className="royal-time">

    <div className="royal-time-unit">
      <strong>
        {String(timeLeft.days).padStart(2, "0")}
      </strong>
      <span>DAYS</span>
    </div>


    <div className="royal-separator">
      ✦
    </div>


    <div className="royal-time-unit">
      <strong>
        {String(timeLeft.hours).padStart(2, "0")}
      </strong>
      <span>HOURS</span>
    </div>


    <div className="royal-separator">
      ✦
    </div>


    <div className="royal-time-unit">
      <strong>
        {String(timeLeft.minutes).padStart(2, "0")}
      </strong>
      <span>MINUTES</span>
    </div>


    <div className="royal-separator">
      ✦
    </div>


    <div className="royal-time-unit">
      <strong>
        {String(timeLeft.seconds).padStart(2, "0")}
      </strong>
      <span>SECONDS</span>
    </div>

  </div>


  {/* Bottom ornament */}

  <div className="countdown-ornament">
    <span>✦</span>
    <div></div>
    <span>🪷</span>
    <div></div>
    <span>✦</span>
  </div>

</div>

        {/* DESCRIPTION */}

        <p className="hero-subtitle">
          She is coming to bless us all.
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