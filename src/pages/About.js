import React from "react";
import "./About-test.css";
import aboutBg from "../assets/about-bg.jpeg";

function About() {
  return (
    <main
      className="about-page"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      {/* BG Blur*/}
      <div className="about-background"></div>

      <div className="about-content">
        {/* HERO */}
        <section className="about-hero">
          <p className="about-eyebrow">✦ DURGA PUJA 2K26 ✦</p>

          <h1>
            About <span>Bankura</span>
            <br />
            Puja Porikroma
          </h1>

          <div className="about-divider">
            <span>✦</span>
            <div></div>
            <span>🪷</span>
            <div></div>
            <span>✦</span>
          </div>

          <p className="about-intro">
            More than a journey.
            <br />
            A celebration of devotion, tradition and memories.
          </p>
        </section>

        {/* ABOUT WEBSITE  */}
        <section className="about-section story-section">
          <div className="section-label">OUR STORY</div>

          <h2>
            Where every <span>pandal</span> tells a story.
          </h2>

          <p>
            <strong>Bankura Puja Porikroma 2k26</strong> is a digital
            platform created to make exploring Durga Puja in Bankura
            easier, more enjoyable and more meaningful.
          </p>

          <p>
            The idea is to bring the spirit of Puja onto one platform —
            helping visitors discover beautiful pandals, explore their
            locations, learn about their stories and traditions, and
            plan their own Puja journey.
          </p>

          <p>
            Instead of simply visiting a pandal, we want people to
            experience the colours, lights, creativity, culture and
            emotions that make Durga Puja special.
          </p>
        </section>

        {/*VISION*/}
        <section className="vision-section">
          <div className="vision-symbol">🪷</div>

          <p className="vision-label">OUR VISION</p>

          <h2>
            To turn every Puja journey
            <br />
            into a memory worth remembering.
          </h2>
        </section>

        {/*  FEATURES  */}
        <section className="about-section">
          <div className="section-label">DISCOVER THE EXPERIENCE</div>

          <h2>
            Everything you need for your
            <span> Puja Porikroma.</span>
          </h2>

          <div className="about-feature-grid">
            {/* Feature 1 */}
            <div className="about-feature">
              <div className="feature-icon">🛕</div>
              <h3>Explore Pandals</h3>
              <p>
                Discover beautiful Durga Puja pandals around
                Bankura and find new places to visit.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="about-feature">
              <div className="feature-icon">🗺️</div>
              <h3>Plan Your Journey</h3>
              <p>
                Find nearby experiences and plan your own
                Puja exploration journey.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="about-feature">
              <div className="feature-icon">📸</div>
              <h3>Pandal Gallery</h3>
              <p>
                Take a glimpse at the artistic designs,
                lights and creativity of different pandals.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="about-feature">
              <div className="feature-icon">🥁</div>
              <h3>Feel the Puja</h3>
              <p>
                Experience the atmosphere of Puja through
                Dhak, animations, visuals and traditional elements.
              </p>
            </div>
          </div>
        </section>

        {/*  WHY BANKURA  */}
        <section className="about-section bankura-section">
          <div className="section-label">WHY BANKURA?</div>

          <h2>
            A celebration of
            <span> culture & tradition.</span>
          </h2>

          <p>
            Bankura has its own unique character, culture and
            festive spirit. During Durga Puja, streets come alive
            with lights, decorations, music and beautifully crafted
            pandals.
          </p>

          <p>
            <strong>Bankura Puja Porikroma</strong> is an attempt
            to digitally capture a small part of that experience
            and make it accessible to everyone.
          </p>
        </section>

        {/*TECHNOLOGY */}
        <section className="technology-section">
          <div className="tech-side">
            <span className="tech-small">MODERN</span>
            <h2>Technology</h2>
          </div>

          <div className="tech-symbol">×</div>

          <div className="tech-side">
            <span className="tech-small">TIMELESS</span>
            <h2>Tradition</h2>
          </div>

          <p>Technology changes. Tradition continues.</p>

          <p>
            This project combines modern web technology with
            the timeless spirit of Durga Puja. Through interactive
            exploration, galleries, animations and location-based
            features, technology becomes a way of discovering
            and appreciating tradition.
          </p>
        </section>

        {/*  MOTTO */}
        <section className="motto-section">
          <div className="motto-glow"></div>

          <p className="motto-small">OUR MOTTO</p>

          <h2>
            "Where every pandal
            <br />
            tells a story."
          </h2>

          <div className="motto-divider">🪷</div>

          <p className="bengali-motto">
            পুজোর পথে, স্মৃতির সাথে...
          </p>
        </section>

        {/*  DEVELOPERS */}
        <section className="developers-section">
          <div className="section-label">
            THE PEOPLE BEHIND THE JOURNEY
          </div>

          <h2>
            Meet the <span>Developers</span>
          </h2>

          <p className="developers-intro">
            This project is brought to life with creativity, technology
            and a love for the spirit of Durga Puja.
          </p>

          <div className="developers-grid">
            {/* Developer 1 */}
            <div className="developer-card">
              <div className="developer-avatar">
                <img
                  src="./developers/developer1.jpeg"
                  alt="Developer 1"
                />
              </div>

              <div className="developer-info">
                <h3>Debayan Das</h3>
                <span className="developer-role">
                  Designer & Frontend Developer
                </span>
                <p>
                  Passionate about web development, creative UI design
                  and building interactive digital experiences.
                </p>

                <div className="developer-socials">
                  <a
                    href="https://www.instagram.com/debayan740?igsi=MXRjcmJxc3N2cHV5dA=="
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61564330155989"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                  <a
                    href="mailto:ddebayan115@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>

            {/* Developer 2 */}
            <div className="developer-card">
              <div className="developer-avatar">
                <img
                  src="/developers/developer2.jpeg"
                  alt="Developer 2"
                />
              </div>

              <div className="developer-info">
                <h3>Abhimanyu Mahato</h3>
                <span className="developer-role">
                  Backend Developer & Database management expert
                </span>
                <p>
                  Interested in technology, problem solving and creating
                  meaningful digital solutions.
                </p>

                <div className="developer-socials">
                  <a
                    href="https://www.instagram.com/abhimanyu_mahata?igsi=MW01Mm5jdW1nbjloNQ=="
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                  <a
                    href="mailto:abhimanyumahato19.bqa@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONNECT WITH US  */}
        <section className="connect-section">
          <p className="section-label">STAY CONNECTED</p>

          <h2>
            Follow the <span>Journey</span>
          </h2>

          <p>
            Follow us on social media to stay connected with
            Bankura Puja Porikroma 2k26 and discover more
            about our journey.
          </p>

          <div className="social-buttons">
            <a
              href="https://www.instagram.com/agomoni_bankura?stkn=Zm1mam1haXIwaWNr"
              target="_blank"
              rel="noreferrer"
              className="social-button instagram-button"
            >
              <span>◎</span>
              Instagram
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61594213115965"
              target="_blank"
              rel="noreferrer"
              className="social-button facebook-button"
            >
              <span>f</span>
              Facebook
            </a>
            
          </div>
          <div className="about-credits-section" style={{ marginTop: "40px", padding: "20px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "12px", border: "1px solid rgba(255, 211, 106, 0.2)" }}>
  <h3 style={{ color: "#ffd36a", marginBottom: "10px", fontFamily: "Georgia, serif" }}>🙏 Acknowledgements</h3>
  <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "15px", lineHeight: "1.6" }}>
    Heartfelt thanks to everyone who helped us by sharing their mobile photographs. Special credits go to Facebook, Google, the internet, and our wonderful friends for providing the visual memories that brought this project to life. Thank you all for your support! 🪷
  </p>
</div>
        </section>
      </div>
    </main>
  );
}

export default About;