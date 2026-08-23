  import React, { useEffect, useRef, useState } from "react";
  import "./Gallery.css";
  
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
      title: "Cinema Road ",
      location: "Bankura, West Bengal",
    },
    {
      image: "/Gallery/Puja4.jpg",
      title: "Hareshwar Mela Sarbojonin",
      location: "Bankura, West Bengal",
    },
    {
      image: "/Gallery/Puja5.jpg",
      title: "Pranabananda Pally Sarbojonin",
      location: "Bankura, West Bengal",
    },
  ];
  
  function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
  
    const sliderRef = useRef(null);
  
    /*
      Automatically move to the next image
    */
  
    useEffect(() => {
      if (isPaused) return;
  
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          return (prevIndex + 1) % galleryImages.length;
        });
      }, 3500);
  
      return () => clearInterval(interval);
    }, [isPaused]);
  
    /*
      Previous image
    */
  
    const previousSlide = () => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === 0) {
          return galleryImages.length - 1;
        }
  
        return prevIndex - 1;
      });
    };
  
    /*
      Next image
    */
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => {
        return (prevIndex + 1) % galleryImages.length;
      });
    };
  
    /*
      Select specific image
    */
  
    const selectSlide = (index) => {
      setCurrentIndex(index);
    };
  
    return (
      <section
        className="gallery-page"
        id="gallery"
        ref={sliderRef}
      >
  
        {/* Background */}
        <div className="gallery-background"></div>
  
  
        {/* Content */}
        <div className="gallery-container">
  
          {/* Header */}
  
          <div className="gallery-header">
  
            <p className="gallery-small-title">
              ✦ Durga Puja 2026 ✦
            </p>
  
            <h1>
              Pandal <span>Gallery</span>
            </h1>
  
            <p className="gallery-description">
              A glimpse of the beautiful pandals and the spirit
              of Durga Puja.
            </p>
  
          </div>
  
  
          {/* Slider */}
  
          <div
            className="gallery-slider"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
  
            {/* Main Image */}
  
            <div className="gallery-image-wrapper">
  
              <img
                src={galleryImages[currentIndex].image}
                alt={galleryImages[currentIndex].title}
                className="gallery-image"
              />
  
              {/* Dark overlay */}
  
              <div className="gallery-image-overlay"></div>
  
  
              {/* Image information */}
  
              <div className="gallery-info">
  
                <span className="gallery-number">
                  {String(currentIndex + 1).padStart(2, "0")}
                  {" / "}
                  {String(galleryImages.length).padStart(2, "0")}
                </span>
  
                <h2>
                  {galleryImages[currentIndex].title}
                </h2>
  
                <p>
                  📍 {galleryImages[currentIndex].location}
                </p>
  
              </div>
  
  
              {/* Previous button */}
  
              <button
                className="gallery-arrow gallery-prev"
                onClick={previousSlide}
                aria-label="Previous image"
              >
                ‹
              </button>
  
  
              {/* Next button */}
  
              <button
                className="gallery-arrow gallery-next"
                onClick={nextSlide}
                aria-label="Next image"
              >
                ›
              </button>
  
            </div>
  
  
            {/* Dots */}
  
            <div className="gallery-dots">
  
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  className={
                    currentIndex === index
                      ? "gallery-dot active"
                      : "gallery-dot"
                  }
                  onClick={() => selectSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
  
            </div>
  
          </div>
  
  
          {/* Bottom message */}
  
          <div className="gallery-footer">
  
            <span>🪷</span>
  
            <p>
              The colours, lights and devotion of Puja.
            </p>
  
            <span>🪷</span>
  
          </div>
  
        </div>
  
      </section>
    );
  }
  
  export default Gallery;
