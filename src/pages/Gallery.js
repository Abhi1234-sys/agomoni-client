import React, { useEffect, useRef, useState } from "react";
import "./Gallery.css";
import AlponaDivider from "../components/AlponaDivider";

const galleryImages = [
  {
    image: "/Gallery/Puja1.jpg",
    title: "Lalbazar Sarbojonin",
    location: "Bankura, West Bengal",
  },
  {
    image: "/Gallery/Puja2.jpg",
    title: "Poabagan Sarbojonin",
    location: "Bankura, West Bengal",
  },
  {
    image: "/Gallery/Puja3.jpg",
    title: "Cinema Road",
    location: "Bankura, West Bengal",
  },
  {
    image: "/Gallery/Puja5.jpg",
    title: "Pranabananda Pally Sarbojonin",
    location: "Bankura, West Bengal",
  },
  {
    image: "/Gallery/b.jpg.jpeg",
    title: "Susunia Sarbojonin",
    location: "Bankura, West Bengal",
  },
  {
    image: "/Gallery/d.jpg.jpeg",
    title: "Paruibad Sarbojonin",
    location: "Bankura, West Bengal",
  },
  {
    image: "/Gallery/f.jpg.jpeg",
    title: "KeraniBandh Sarbojonin",
    location: "Bankura, West Bengal",
  },
  {
    image: "/Gallery/m.jpeg",
    title: "Schooldanga Sarbojonin",
    location: "Bankura, West Bengal",
  },
  {
    image: "/Gallery/n.jpeg",
    title: "Katjuridanga Sarbojonin",
    location: "Bankura, West Bengal",
  },
  {
    image: "/Gallery/o.jpeg",
    title: "Kenduadihi Sarbojonin",
    location: "Bankura, West Bengal",
  },
];

const protimaImages = [
  {
    image: "/Gallery/k.jpg.jpeg",
    title: "Pandal Hopping View",
    location: "Bankura, West Bengal",
  },
  {
    image: "/Gallery/p.jpeg",
    title: "Traditional Silver Chalchitra Idol",
    location: "Bankura, West Bengal",
  },
  {
    image: "/Gallery/q.jpeg",
    title: "Golden Crown & Divine Expressions",
    location: "Bankura, West Bengal",
  },
  {
    image: "/Gallery/r.jpeg",
    title: "Ekchala Protima",
    location: "Bankura, West Bengal",
  },
  {
    image: "/Gallery/u.jpeg",
    title: "Classic Swarna Protima",
    location: "Bankura, West Bengal",
  },
  {
    image: "/Gallery/v.jpeg",
    title: "Nature-Inspired Pandal Setting",
    location: "Bankura, West Bengal",
  },
];

const popularChoiceImages = [
  {
    image: "/Gallery/1.jpeg",
    title: "People's Choice Winner - Lalbazar",
    location: "Bankura, West Bengal",
  },
  {
    image: "/Gallery/2.jpeg",
    title: "Crowd Favorite Protima",
    location: "Bankura, West Bengal",
  },
  {
    image: "/Gallery/3.jpeg",
    title: "Most Visited Pandal",
    location: "Bankura, West Bengal",
  },
  {
    image: "/Gallery/6.jpeg",
    title: "Artistic Excellence Award",
    location: "Bankura, West Bengal",
  },
  {
    image: "/Gallery/7.jpeg",
    title: "Most Visited Pandal",
    location: "Bankura, West Bengal",
  },
  {
    image: "/Gallery/8.jpeg",
    title: "Most Visited Pandal",
    location: "Bankura, West Bengal",
  },
  {
    image: "/Gallery/9.jpeg",
    title: "Most Visited Pandal",
    location: "Bankura, West Bengal",
  },
  {
    image: "/Gallery/10.jpeg",
    title: "Most Visited Pandal",
    location: "Bankura, West Bengal",
  },
];

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const [protimaIndex, setProtimaIndex] = useState(0);
  const [isProtimaPaused, setIsProtimaPaused] = useState(false);

  // Popular Choice Slider States
  const [popularIndex, setPopularIndex] = useState(0);
  const [isPopularPaused, setIsPopularPaused] = useState(false);

  const sliderRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    if (isProtimaPaused) return;
    const interval = setInterval(() => {
      setProtimaIndex((prev) => (prev + 1) % protimaImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isProtimaPaused]);

  useEffect(() => {
    if (isPopularPaused) return;
    const interval = setInterval(() => {
      setPopularIndex((prev) => (prev + 1) % popularChoiceImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPopularPaused]);

  return (
    <section className="gallery-page" id="gallery" ref={sliderRef}>
      <div className="gallery-background"></div>

      <div className="gallery-container">
        
        {/* PANDAL GALLERY */}
        <div className="gallery-header">
          <p className="gallery-small-title">✦ Durga Puja 2026 ✦</p>
          <h1>Pandal <span>Gallery</span></h1>
          <p className="gallery-description">A glimpse of the beautiful pandals and the spirit of Durga Puja.</p>
        </div>

        <div className="gallery-slider" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <div className="gallery-image-wrapper">
            <img src={galleryImages[currentIndex].image} alt={galleryImages[currentIndex].title} className="gallery-image" />
            <div className="gallery-image-overlay"></div>
            <div className="gallery-info">
              <span className="gallery-number">{String(currentIndex + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}</span>
              <h2>{galleryImages[currentIndex].title}</h2>
              <p>📍 {galleryImages[currentIndex].location}</p>
            </div>
            <button className="gallery-arrow gallery-prev" onClick={() => setCurrentIndex((p) => (p === 0 ? galleryImages.length - 1 : p - 1))}>‹</button>
            <button className="gallery-arrow gallery-next" onClick={() => setCurrentIndex((p) => (p + 1) % galleryImages.length)}>›</button>
          </div>
          <div className="gallery-dots">
            {galleryImages.map((_, i) => (
              <button key={i} className={currentIndex === i ? "gallery-dot active" : "gallery-dot"} onClick={() => setCurrentIndex(i)}></button>
            ))}
          </div>
        </div>

        {/* ALPONA DIVIDER 1: Under Pandal Gallery */}
        <AlponaDivider title="মণ্ডপ পরিক্রমা" />

        {/* PROTIMA GALLERY */}
        <div className="gallery-header" style={{ marginTop: "90px" }}>
          <p className="gallery-small-title">✦ Divine Darshan ✦</p>
          <h1>Protima <span>Gallery</span></h1>
          <p className="gallery-description">The divine grace and exquisite artistry of Goddess Durga idols.</p>
        </div>

        <div className="gallery-slider" onMouseEnter={() => setIsProtimaPaused(true)} onMouseLeave={() => setIsProtimaPaused(false)}>
          <div className="gallery-image-wrapper">
            <img src={protimaImages[protimaIndex].image} alt={protimaImages[protimaIndex].title} className="gallery-image" />
            <div className="gallery-image-overlay"></div>
            <div className="gallery-info">
              <span className="gallery-number">{String(protimaIndex + 1).padStart(2, "0")} / {String(protimaImages.length).padStart(2, "0")}</span>
              <h2>{protimaImages[protimaIndex].title}</h2>
              <p>📍 {protimaImages[protimaIndex].location}</p>
            </div>
            <button className="gallery-arrow gallery-prev" onClick={() => setProtimaIndex((p) => (p === 0 ? protimaImages.length - 1 : p - 1))}>‹</button>
            <button className="gallery-arrow gallery-next" onClick={() => setProtimaIndex((p) => (p + 1) % protimaImages.length)}>›</button>
          </div>
          <div className="gallery-dots">
            {protimaImages.map((_, i) => (
              <button key={i} className={protimaIndex === i ? "gallery-dot active" : "gallery-dot"} onClick={() => setProtimaIndex(i)}></button>
            ))}
          </div>
        </div>

        {/* ALPONA DIVIDER 2: Under Protima Gallery */}
        <AlponaDivider title="প্রতিমা দর্শন" />

        {/* SPOTLIGHT SECTION (Single Centered Big Featured Card) */}
        <div className="gallery-header spotlight-title-area" style={{ marginTop: "100px" }}>
          <p className="gallery-small-title">✦ বিশেষ আকর্ষণ ✦</p>
          <h1>Spotlight</h1>
          <p className="gallery-description">Handpicked magnificent artistic masterpieces and breathtaking views.</p>
        </div>

        <div className="spotlight-section-container">
          <div className="spotlight-single-wrapper">
            
            {/* Single Centered Featured Spotlight Card */}
            <div className="spotlight-card featured-spotlight-card spotlight-beam-effect">
              <div className="spotlight-img-collage">
                <span className="spotlight-badge">⭐ EDITOR'S PICK</span>
                <div className="collage-3-grid">
                  <img src="/Gallery/5.jpeg" alt="Pandal 1" onError={(e)=>{e.target.src="https://images.unsplash.com/photo-1609137144881-540b59246e6a?auto=format&fit=crop&w=400&q=80"}} />
                  <img src="/Gallery/4.jpeg" alt="Pandal 2" onError={(e)=>{e.target.src="https://images.unsplash.com/photo-1601662528567-526cd06f6582?auto=format&fit=crop&w=400&q=80"}} />
                  <img src="/Gallery/o.jpeg" alt="Pandal 3" onError={(e)=>{e.target.src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=400&q=80"}} />
                </div>
              </div>
              <div className="spotlight-card-content">
                <span className="spotlight-location">📍 Bankura Town, West Bengal</span>
                <h3>Bankura Grand Pandal Hopping</h3>
                <p className="spotlight-theme-desc">Experience the mesmerizing architectural brilliance, thematic artistry, and grand community puja celebrations.</p>
              </div>
            </div>

          </div>
        </div>

        {/* ALPONA DIVIDER 3: Under Spotlight */}
        <AlponaDivider title="বিশেষ আকর্ষণ" />

        {/* POPULAR CHOICE SECTION (Clean, Like Previous Galleries) */}
        <div className="gallery-header" style={{ marginTop: "100px" }}>
          <p className="gallery-small-title">✦ জনপ্ৰিয় পছন্দ ✦</p>
          <h1>Popular <span>Choice</span></h1>
          <p className="gallery-description">Most loved and visited attractions voted by visitors.</p>
        </div>

        <div
          className="gallery-slider"
          onMouseEnter={() => setIsPopularPaused(true)}
          onMouseLeave={() => setIsPopularPaused(false)}
        >
          <div className="gallery-image-wrapper">
            <img
              src={popularChoiceImages[popularIndex].image}
              alt={popularChoiceImages[popularIndex].title}
              className="gallery-image"
            />

            <div className="gallery-image-overlay"></div>

            <div className="gallery-info">
              <span className="gallery-number">
                {String(popularIndex + 1).padStart(2, "0")}
                {" / "}
                {String(popularChoiceImages.length).padStart(2, "0")}
              </span>
              <h2>{popularChoiceImages[popularIndex].title}</h2>
              <p>📍 {popularChoiceImages[popularIndex].location}</p>
            </div>

            <button
              className="gallery-arrow gallery-prev"
              onClick={() => setPopularIndex((p) => (p === 0 ? popularChoiceImages.length - 1 : p - 1))}
            >
              ‹
            </button>

            <button
              className="gallery-arrow gallery-next"
              onClick={() => setPopularIndex((p) => (p + 1) % popularChoiceImages.length)}
            >
              ›
            </button>
          </div>

          <div className="gallery-dots">
            {popularChoiceImages.map((_, i) => (
              <button
                key={i}
                className={popularIndex === i ? "gallery-dot active" : "gallery-dot"}
                onClick={() => setPopularIndex(i)}
              ></button>
            ))}
          </div>
        </div>

        {/* ALPONA DIVIDER 4: Under Popular Choice */}
        <AlponaDivider title="জনপ্রিয় পছন্দ" />

        {/* Bottom message */}
        <div className="gallery-footer" style={{ marginTop: "60px" }}>
          <span>🪷</span>
          <p>The colours, lights and devotion of Puja.</p>
          <span>🪷</span>
        </div>

      </div>
    </section>
  );
}

export default Gallery;