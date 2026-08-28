import React, { useEffect, useState } from "react";
import "./Gallery.css";


const pandalImages = [
  {
    image: "/Gallery/Puja1.jpg",
    title: "কেঁদুয়াডিহি সর্বজনীন দুর্গোৎসব",
    location: "Kenduadih, Bankura",
  },
  {
    image: "/Gallery/Puja2.jpg",
    title: "স্কুলডাঙা সার্বজনীন",
    location: "Schooldanga, Bankura",
  },
  {
    image: "/Gallery/Puja3.jpg",
    title: "প্রণবানন্দ পল্লী দুর্গোৎসব",
    location: "Pranabananda Pally, Bankura",
  },
  {
    image: "/Gallery/Puja4.jpg",
    title: "মাচানতলা তরুণ সংঘ",
    location: "Machantala, Bankura",
  },
  {
    image: "/Gallery/Puja5.jpg",
    title: "নতুনচটি সর্বজনীন দুর্গোৎসব",
    location: "Natunchati, Bankura",
  },
  {
    image: "/Gallery/pandal1.jpg",
    title: "মধ্য কেঁদুয়াডিহি ফ্রেন্ডস ক্লাব",
    location: "Bankura, West Bengal",
  },
  {
    image: "/Gallery/pandal2.jpg",
    title: "চকবাজার সর্বজনীন পুজো",
    location: "Chakbazar, Bankura",
  },
];


const protimaImages = [
  {
    image: "/Gallery/Puja1.jpg",
    title: "সনাতনী ডাকের সাজের প্রতিমা",
    location: "চিরাচরিত সাবেকি রূপ দর্শন",
  },
  {
    image: "/Gallery/Puja2.jpg",
    title: "শিল্পীভাবনায় দেবী দশভুজা",
    location: "নান্দনিক আধুনিক মৃৎশিল্প",
  },
  {
    image: "/Gallery/Puja3.jpg",
    title: "স্বর্ণালঙ্কারে মহিষাসুরমর্দিনী",
    location: "ঐতিহ্যবাহী রাজকীয় শোভা",
  },
  {
    image: "/Gallery/Puja4.jpg",
    title: "মৃত্তিকার টানে মা দুর্গা",
    location: "গ্রাম বাংলার লোকশিল্প ভাবনা",
  },
  {
    image: "/Gallery/Puja5.jpg",
    title: "আলোকময়ী জগজ্জননী প্রতিমা",
    location: "অনন্য আলো ও রূপের সম্মেলন",
  },
];

function Gallery() {
  // Pandal Slider State
  const [currentPandalIndex, setCurrentPandalIndex] = useState(0);
  const [isPandalPaused, setIsPandalPaused] = useState(false);

  // Protima Slider State
  const [currentProtimaIndex, setCurrentProtimaIndex] = useState(0);
  const [isProtimaPaused, setIsProtimaPaused] = useState(false);

  // Auto slide for Pandal Gallery
  useEffect(() => {
    if (isPandalPaused) return;
    const interval = setInterval(() => {
      setCurrentPandalIndex((prev) => (prev + 1) % pandalImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPandalPaused]);

  // Auto slide for Protima Gallery
  useEffect(() => {
    if (isProtimaPaused) return;
    const interval = setInterval(() => {
      setCurrentProtimaIndex((prev) => (prev + 1) % protimaImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isProtimaPaused]);

  return (
    <section className="gallery-page" id="gallery">
      {/* Background */}
      <div className="gallery-background"></div>

      {/* Content */}
      <div className="gallery-container">
        {/* Main Header */}
        <div className="gallery-header">
          <p className="gallery-small-title">✦ DURGA PUJA 2026 ✦</p>
          <h1>
            Grand <span>Gallery</span>
          </h1>
          <p className="gallery-description">
            A divine glimpse of the magnificent pandals and breathtaking protima artistry of Bankura.
          </p>
        </div>

        {/*  SECTION 1: PANDAL GALLERY SLIDER*/}
        <div className="gallery-sub-header">
          <h2>🛕 Pandal <span>Artistry</span></h2>
          <p>Explore the stunning pandal architectures and festive lights</p>
        </div>

        <div
          className="gallery-slider"
          onMouseEnter={() => setIsPandalPaused(true)}
          onMouseLeave={() => setIsPandalPaused(false)}
        >
          <div className="gallery-image-wrapper">
            <img
              src={pandalImages[currentPandalIndex].image}
              alt={pandalImages[currentPandalIndex].title}
              className="gallery-image"
              key={currentPandalIndex}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1601662528567-526cd06f6582?auto=format&fit=crop&w=1200&q=80";
              }}
            />

            <div className="gallery-image-overlay"></div>

            <div className="gallery-info">
              <span className="gallery-number">
                {String(currentPandalIndex + 1).padStart(2, "0")} / {String(pandalImages.length).padStart(2, "0")}
              </span>
              <h2>{pandalImages[currentPandalIndex].title}</h2>
              <p>📍 {pandalImages[currentPandalIndex].location}</p>
            </div>

            <button
              className="gallery-arrow gallery-prev"
              onClick={() => setCurrentPandalIndex((prev) => (prev === 0 ? pandalImages.length - 1 : prev - 1))}
              aria-label="Previous pandal"
            >
              ‹
            </button>

            <button
              className="gallery-arrow gallery-next"
              onClick={() => setCurrentPandalIndex((prev) => (prev + 1) % pandalImages.length)}
              aria-label="Next pandal"
            >
              ›
            </button>
          </div>

          <div className="gallery-dots">
            {pandalImages.map((_, index) => (
              <button
                key={index}
                className={currentPandalIndex === index ? "gallery-dot active" : "gallery-dot"}
                onClick={() => setCurrentPandalIndex(index)}
                aria-label={`Go to pandal ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/*  SECTION 2: PROTIMA GALLERY SLIDER */}
        <div className="gallery-sub-header protima-title-spacing">
          <h2>🌸 Divine <span>Protima Darshan</span></h2>
          <p>The eternal beauty and intricate craftsmanship of Maa Durga idols</p>
        </div>

        <div
          className="gallery-slider"
          onMouseEnter={() => setIsProtimaPaused(true)}
          onMouseLeave={() => setIsProtimaPaused(false)}
        >
          <div className="gallery-image-wrapper">
            <img
              src={protimaImages[currentProtimaIndex].image}
              alt={protimaImages[currentProtimaIndex].title}
              className="gallery-image"
              key={currentProtimaIndex}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1601662528567-526cd06f6582?auto=format&fit=crop&w=1200&q=80";
              }}
            />

            <div className="gallery-image-overlay"></div>

            <div className="gallery-info">
              <span className="gallery-number">
                {String(currentProtimaIndex + 1).padStart(2, "0")} / {String(protimaImages.length).padStart(2, "0")}
              </span>
              <h2>{protimaImages[currentProtimaIndex].title}</h2>
              <p>✨ {protimaImages[currentProtimaIndex].location}</p>
            </div>

            <button
              className="gallery-arrow gallery-prev"
              onClick={() => setCurrentProtimaIndex((prev) => (prev === 0 ? protimaImages.length - 1 : prev - 1))}
              aria-label="Previous protima"
            >
              ‹
            </button>

            <button
              className="gallery-arrow gallery-next"
              onClick={() => setCurrentProtimaIndex((prev) => (prev + 1) % protimaImages.length)}
              aria-label="Next protima"
            >
              ›
            </button>
          </div>

          <div className="gallery-dots">
            {protimaImages.map((_, index) => (
              <button
                key={index}
                className={currentProtimaIndex === index ? "gallery-dot active" : "gallery-dot"}
                onClick={() => setCurrentProtimaIndex(index)}
                aria-label={`Go to protima ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Bottom footer message */}
        <div className="gallery-footer">
          <span>🪷</span>
          <p>The colours, lights and devotion of Durga Puja 2026.</p>
          <span>🪷</span>
        </div>
      </div>
    </section>
  );
}

export default Gallery;