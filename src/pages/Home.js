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

        <h4 className="hero-title" style={{ marginTop: '50px' }}>
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
          𝑨 𝒍𝒊𝒗𝒊𝒏𝒈 𝒈𝒖𝒊𝒅𝒆 𝒕𝒐 𝑩𝒂𝒏𝒌𝒖𝒓𝒂’𝒔 𝑫𝒖𝒓𝒈𝒂 𝑷𝒖𝒋𝒂, 𝒉𝒆𝒍𝒑𝒊𝒏𝒈 𝒚𝒐𝒖 𝒅𝒊𝒔𝒄𝒐𝒗𝒆𝒓 𝒑𝒂𝒏𝒅𝒂𝒍𝒔, 𝒆𝒙𝒑𝒍𝒐𝒓𝒆 𝒕𝒉𝒆𝒊𝒓 𝒔𝒕𝒐𝒓𝒊𝒆𝒔 𝒂𝒏𝒅 𝒕𝒓𝒂𝒅𝒊𝒕𝒊𝒐𝒏𝒔, 𝒇𝒊𝒏𝒅 𝒏𝒆𝒂𝒓𝒃𝒚 𝒆𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒆𝒔, 𝒂𝒏𝒅 𝒑𝒍𝒂𝒏 𝒚𝒐𝒖𝒓 𝒑𝒆𝒓𝒇𝒆𝒄𝒕 𝒑𝒂𝒏𝒅𝒂𝒍-𝒉𝒐𝒑𝒑𝒊𝒏𝒈 𝒋𝒐𝒖𝒓𝒏𝒆𝒚.
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
            
<p style={{ textAlign: 'justify' }}>
𝑩𝒂𝒏𝒌𝒖𝒓𝒂 𝑫𝒖𝒓𝒈𝒂 𝑷𝒖𝒋𝒂 𝑪𝒂𝒓𝒏𝒊𝒗𝒂𝒍 𝒉𝒂𝒔 𝒆𝒎𝒆𝒓𝒈𝒆𝒅 𝒂𝒔 𝒂 𝒗𝒊𝒃𝒓𝒂𝒏𝒕 𝒄𝒆𝒍𝒆𝒃𝒓𝒂𝒕𝒊𝒐𝒏 𝒐𝒇 𝒕𝒉𝒆 𝒅𝒊𝒔𝒕𝒓𝒊𝒄𝒕’𝒔 𝒓𝒊𝒄𝒉 𝒇𝒆𝒔𝒕𝒊𝒗𝒆 𝒂𝒏𝒅 𝒄𝒖𝒍𝒕𝒖𝒓𝒂𝒍 𝒉𝒆𝒓𝒊𝒕𝒂𝒈𝒆. 𝑰𝒏 𝒓𝒆𝒄𝒆𝒏𝒕 𝒚𝒆𝒂𝒓𝒔, 𝒕𝒉𝒆 𝒄𝒂𝒓𝒏𝒊𝒗𝒂𝒍 𝒃𝒓𝒐𝒖𝒈𝒉𝒕 𝒕𝒐𝒈𝒆𝒕𝒉𝒆𝒓 𝒔𝒆𝒗𝒆𝒓𝒂𝒍 𝒑𝒓𝒐𝒎𝒊𝒏𝒆𝒏𝒕 𝑷𝒖𝒋𝒂 𝒄𝒐𝒎𝒎𝒊𝒕𝒕𝒆𝒆𝒔 𝒇𝒓𝒐𝒎 𝑩𝒂𝒏𝒌𝒖𝒓𝒂 𝒂𝒏𝒅 𝒔𝒉𝒐𝒘𝒄𝒂𝒔𝒆𝒅 𝒃𝒆𝒂𝒖𝒕𝒊𝒇𝒖𝒍𝒍𝒚 𝒅𝒆𝒄𝒐𝒓𝒂𝒕𝒆𝒅 𝒕𝒂𝒃𝒍𝒆𝒂𝒖𝒙, 𝒕𝒓𝒂𝒅𝒊𝒕𝒊𝒐𝒏𝒂𝒍 𝒂𝒓𝒕, 𝒄𝒖𝒍𝒕𝒖𝒓𝒂𝒍 𝒑𝒆𝒓𝒇𝒐𝒓𝒎𝒂𝒏𝒄𝒆𝒔, 𝒂𝒏𝒅 𝒕𝒉𝒆 𝒖𝒏𝒊𝒒𝒖𝒆 𝒔𝒑𝒊𝒓𝒊𝒕 𝒐𝒇 𝑫𝒖𝒓𝒈𝒂 𝑷𝒖𝒋𝒂. 𝑻𝒉𝒆 𝑩𝒂𝒏𝒌𝒖𝒓𝒂 𝒕𝒐𝒘𝒏 𝒄𝒂𝒓𝒏𝒊𝒗𝒂𝒍, 𝒑𝒂𝒓𝒕𝒊𝒄𝒖𝒍𝒂𝒓𝒍𝒚 𝒂𝒓𝒐𝒖𝒏𝒅 𝒕𝒉𝒆 𝑺𝒂𝒕𝒊𝒈𝒉𝒂𝒕 𝒂𝒓𝒆𝒂, 𝒃𝒆𝒄𝒂𝒎𝒆 𝒂 𝒄𝒐𝒍𝒐𝒖𝒓𝒇𝒖𝒍 𝒑𝒐𝒔𝒕-𝑷𝒖𝒋𝒂 𝒈𝒂𝒕𝒉𝒆𝒓𝒊𝒏𝒈 𝒘𝒉𝒆𝒓𝒆 𝒑𝒆𝒐𝒑𝒍𝒆 𝒄𝒂𝒎𝒆 𝒕𝒐𝒈𝒆𝒕𝒉𝒆𝒓 𝒕𝒐 𝒘𝒊𝒕𝒏𝒆𝒔𝒔 𝒕𝒉𝒆 𝒈𝒓𝒂𝒏𝒅𝒆𝒖𝒓 𝒐𝒇 𝒕𝒉𝒆 𝒑𝒂𝒓𝒕𝒊𝒄𝒊𝒑𝒂𝒕𝒊𝒏𝒈 𝑷𝒖𝒋𝒂 𝒄𝒆𝒍𝒆𝒃𝒓𝒂𝒕𝒊𝒐𝒏𝒔. 𝑰𝒏 2023, 𝒕𝒉𝒆 𝒄𝒂𝒓𝒏𝒊𝒗𝒂𝒍 𝒘𝒂𝒔 𝒐𝒓𝒈𝒂𝒏𝒊𝒔𝒆𝒅 𝒂𝒔 𝒂 𝒑𝒐𝒔𝒕-𝑩𝒊𝒋𝒐𝒚𝒂 𝒄𝒆𝒍𝒆𝒃𝒓𝒂𝒕𝒊𝒐𝒏, 𝒘𝒉𝒊𝒍𝒆 𝒕𝒉𝒆 2024 𝒆𝒅𝒊𝒕𝒊𝒐𝒏 𝒐𝒏𝒄𝒆 𝒂𝒈𝒂𝒊𝒏 𝒅𝒓𝒆𝒘 𝒑𝒆𝒐𝒑𝒍𝒆 𝒕𝒐 𝑩𝒂𝒏𝒌𝒖𝒓𝒂 𝒕𝒐𝒘𝒏 𝒘𝒊𝒕𝒉 𝒅𝒆𝒄𝒐𝒓𝒂𝒕𝒆𝒅 𝒕𝒂𝒃𝒍𝒆𝒂𝒖𝒙 𝒂𝒏𝒅 𝒄𝒖𝒍𝒕𝒖𝒓𝒂𝒍 𝒇𝒆𝒔𝒕𝒊𝒗𝒊𝒕𝒊𝒆𝒔. 𝑩𝒊𝒔𝒉𝒏𝒖𝒑𝒖𝒓 𝒂𝒍𝒔𝒐 𝒘𝒊𝒕𝒏𝒆𝒔𝒔𝒆𝒅 𝒊𝒕𝒔 𝒐𝒘𝒏 𝑷𝒖𝒋𝒂 𝑪𝒂𝒓𝒏𝒊𝒗𝒂𝒍 𝒊𝒏 2024, 𝒂𝒅𝒅𝒊𝒏𝒈 𝒂𝒏𝒐𝒕𝒉𝒆𝒓 𝒅𝒊𝒎𝒆𝒏𝒔𝒊𝒐𝒏 𝒕𝒐 𝒕𝒉𝒆 𝒅𝒊𝒔𝒕𝒓𝒊𝒄𝒕’𝒔 𝒇𝒆𝒔𝒕𝒊𝒗𝒆 𝒄𝒆𝒍𝒆𝒃𝒓𝒂𝒕𝒊𝒐𝒏𝒔. 𝑻𝒉𝒆𝒔𝒆 𝒄𝒂𝒓𝒏𝒊𝒗𝒂𝒍𝒔 𝒉𝒂𝒗𝒆 𝒉𝒆𝒍𝒑𝒆𝒅 𝒃𝒓𝒊𝒏𝒈 𝑩𝒂𝒏𝒌𝒖𝒓𝒂’𝒔 𝒕𝒓𝒂𝒅𝒊𝒕𝒊𝒐𝒏𝒂𝒍 𝒄𝒖𝒍𝒕𝒖𝒓𝒆, 𝒂𝒓𝒕𝒊𝒔𝒕𝒊𝒄 𝒄𝒓𝒆𝒂𝒕𝒊𝒗𝒊𝒕𝒚, 𝒂𝒏𝒅 𝒄𝒐𝒎𝒎𝒖𝒏𝒊𝒕𝒚 𝒔𝒑𝒊𝒓𝒊𝒕 𝒊𝒏𝒕𝒐 𝒕𝒉𝒆 𝒔𝒑𝒐𝒕𝒍𝒊𝒈𝒉𝒕.
</p>

<h4 style={{ color: '#f39c12', marginTop: '20px', marginBottom: '8px', fontWeight: 'bold' }}>
  Highlights of Carnival
</h4>

<p style={{ textAlign: 'justify' }}>
𝑻𝒉𝒆 𝒄𝒂𝒓𝒏𝒊𝒗𝒂𝒍’𝒔 𝒎𝒂𝒊𝒏 𝒉𝒊𝒈𝒉𝒍𝒊𝒈𝒉𝒕𝒔 𝒊𝒏𝒄𝒍𝒖𝒅𝒆𝒅 𝒃𝒆𝒂𝒖𝒕𝒊𝒇𝒖𝒍𝒍𝒚 𝒅𝒆𝒄𝒐𝒓𝒂𝒕𝒆𝒅 𝒕𝒂𝒃𝒍𝒆𝒂𝒖𝒙 𝒇𝒆𝒂𝒕𝒖𝒓𝒊𝒏𝒈 𝑫𝒖𝒓𝒈𝒂 𝑷𝒖𝒋𝒂 𝒕𝒉𝒆𝒎𝒆𝒔, 𝒕𝒓𝒂𝒅𝒊𝒕𝒊𝒐𝒏𝒂𝒍 𝑩𝒂𝒏𝒌𝒖𝒓𝒂 𝒂𝒓𝒕 𝒂𝒏𝒅 𝒕𝒆𝒓𝒓𝒂𝒄𝒐𝒕𝒕𝒂 𝒎𝒐𝒕𝒊𝒇𝒔, 𝒗𝒊𝒃𝒓𝒂𝒏𝒕 𝒄𝒖𝒍𝒕𝒖𝒓𝒂𝒍 𝒑𝒆𝒓𝒇𝒐𝒓𝒎𝒂𝒏𝒄𝒆𝒔, 𝒕𝒓𝒂𝒅𝒊𝒕𝒊𝒐𝒏𝒂𝒍 𝒎𝒖𝒔𝒊𝒄 𝒂𝒏𝒅 𝒅𝒉𝒂𝒌 𝒃𝒆𝒂𝒕𝒔, 𝒂𝒏𝒅 𝒕𝒉𝒆 𝒄𝒐𝒍𝒐𝒖𝒓𝒇𝒖𝒍 𝒑𝒓𝒆𝒔𝒆𝒏𝒄𝒆 𝒐𝒇 𝒑𝒆𝒐𝒑𝒍𝒆 𝒇𝒓𝒐𝒎 𝒂𝒄𝒓𝒐𝒔𝒔 𝒕𝒉𝒆 𝒅𝒊𝒔𝒕𝒓𝒊𝒄𝒕. 𝑻𝒉𝒆 𝒑𝒓𝒐𝒄𝒆𝒔𝒔𝒊𝒐𝒏𝒔 𝒂𝒏𝒅 𝒑𝒂𝒓𝒂𝒅𝒆𝒔 𝒄𝒓𝒆𝒂𝒕𝒆𝒅 𝒂 𝒇𝒆𝒔𝒕𝒊𝒗𝒆 𝒂𝒕𝒎𝒐𝒔𝒑𝒉𝒆𝒓𝒆, 𝒘𝒉𝒊𝒍𝒆 𝒕𝒉𝒆 𝒄𝒐𝒎𝒃𝒊𝒏𝒂𝒕𝒊𝒐𝒏 𝒐𝒇 𝒂𝒓𝒕, 𝒎𝒖𝒔𝒊𝒄, 𝒅𝒂𝒏𝒄𝒆, 𝒂𝒏𝒅 𝒄𝒐𝒎𝒎𝒖𝒏𝒊𝒕𝒚 𝒑𝒂𝒓𝒕𝒊𝒄𝒊𝒑𝒂𝒕𝒊𝒐𝒏 𝒎𝒂𝒅𝒆 𝒕𝒉𝒆 𝒄𝒂𝒓𝒏𝒊𝒗𝒂𝒍 𝒂 𝒎𝒆𝒎𝒐𝒓𝒂𝒃𝒍𝒆 𝒑𝒐𝒔𝒕-𝑷𝒖𝒋𝒂 𝒄𝒆𝒍𝒆𝒃𝒓𝒂𝒕𝒊𝒐𝒏.
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