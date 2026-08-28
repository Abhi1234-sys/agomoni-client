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

        {/* <p className="welcome-text">
          ✦ শুভ মহালয়া ✦
        </p> */}


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


        {/* <p className="bengali">
          আশ্বিন আসিছে, পূজো আসিছে
        </p> */}


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


      {/* ABOUT BANKURA PUJA CARNIVAL SECTION */}
      
      <section className="bankura-carnival-section">
        <div className="carnival-container">
          
          <div className="carnival-text-content">
            <span className="carnival-small-tag">✦ CULTURAL HERITAGE ✦</span>
            <h2>About Bankura Puja Carnival</h2>
            
            <p>
              Bankura Durga Puja Carnival 2026: Where Tradition Meets Celebration! The Bankura Durga Puja Carnival 2026 will bring together the district's finest Puja committees, magnificent idols, creative tableaux, and vibrant cultural performances for a grand celebration before immersion.
            </p>

            <p>
               <strong>Durga Puja:</strong> 16–21 October 2026 <br/>
               <strong>Expected Carnival:</strong> 23–26 October 2026 <br/>
              <em>(Final date and schedule will be announced by the district administration.)</em>
            </p>

            <p>
              📍 <strong>Main Carnival Hubs:</strong> <br/>
              • <strong>Bankura Town</strong> — A grand street procession featuring beautifully decorated tableaux, Alpona, cultural performances, and designated viewing areas. <br/>
              • <strong>Bishnupur</strong> — A parallel celebration showcasing the region's rich history, traditional art, and unique cultural heritage.
            </p>

            <p>
              <strong>Highlights:</strong> <br/>
              • 🏛️ <strong>Terracotta Heritage</strong> — Bankura's iconic terracotta art inspires the carnival's decorations and tableaux. <br/>
              • 🥁 <strong>Folk Performances</strong> — Enjoy Dhak, Chhau, and Santhali folk performances throughout the celebration. <br/>
              • 🏆 <strong>50+ Top Puja Committees</strong> — Leading Puja organizers from Katjuridanga, Kenduadihi, Pratap Bagan, and across the district are expected to participate.
            </p>

            <p>
              Experience the colours, sounds, art, and spirit of Bankura at its grandest!
            </p>
          </div>

          <div className="carnival-video-wrapper">
            <video 
              className="carnival-video" 
              autoPlay 
              loop 
              muted 
              playsInline 
              preload="auto"
            >
              <source src="/Carnival.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

        </div>
      </section>


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