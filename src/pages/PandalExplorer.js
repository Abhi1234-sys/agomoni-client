import React, { useState, useEffect } from "react";
import "./PandalExplorer.css";

function PandalExplorer() {
  const [location, setLocation] = useState("");
  const [allPujas, setAllPujas] = useState([]);
  const [filteredPandals, setFilteredPandals] = useState([]);
  const [searched, setSearched] = useState(false);
  const [selectedPuja, setSelectedPuja] = useState(null);

  
  const [locationStatus, setLocationStatus] = useState("prompt"); 

  useEffect(() => {
    const fetchPujas = async () => {
      try {
        const response = await fetch("https://agomoni-backend-1.onrender.com//api/pujas");
        const data = await response.json();

        let pujaList = [];
        if (Array.isArray(data)) {
          pujaList = data;
        } else if (data && Array.isArray(data.data)) {
          pujaList = data.data;
        } else if (data && Array.isArray(data.pujas)) {
          pujaList = data.pujas;
        }

        const formattedList = pujaList.map((p) => {
          let imgs = p.images;
          if (typeof imgs === "string") {
            imgs = imgs.split(/[\s,]+/).filter((url) => url.startsWith("http") || url.startsWith("data:image"));
          } else if (Array.isArray(imgs)) {
            imgs = imgs.flat().filter((url) => typeof url === "string" && (url.startsWith("http") || url.startsWith("data:image")));
          } else {
            imgs = [];
          }
          return { ...p, images: imgs };
        });

        setAllPujas(formattedList);
        setFilteredPandals(formattedList);
        setSearched(true);
      } catch (err) {
        console.error("Failed to load pujas:", err);
        setAllPujas([]);
        setFilteredPandals([]);
      }
    };

    fetchPujas();
  }, []);

  const handleSearch = () => {
    if (!Array.isArray(allPujas)) return;

    if (!location.trim()) {
      setFilteredPandals(allPujas);
      setSearched(true);
      return;
    }

    const filtered = allPujas.filter((p) => {
      const pName = p.name ? p.name.toLowerCase() : "";
      const pLoc = p.location ? p.location.toLowerCase() : "";
      const searchTxt = location.toLowerCase();
      return pLoc.includes(searchTxt) || pName.includes(searchTxt);
    });

    setFilteredPandals(filtered);
    setSearched(true);
  };

  const handleUseMyCoordinates = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Latitude:", position.coords.latitude, "Longitude:", position.coords.longitude);
        setLocationStatus("success");
      },
      (error) => {
        console.error("Location error:", error);
        setLocationStatus("denied");
        alert("Location access denied or unavailable. You can search manually!");
      }
    );
  };

  const handleSwitchToNextPandal = (nextPujaName) => {
    if (!nextPujaName) return;

    const cleanName = nextPujaName.split('(')[0].trim().toLowerCase();

    const targetPuja = allPujas.find((p) => {
      const pName = p.name ? p.name.toLowerCase() : "";
      return pName.includes(cleanName) || cleanName.includes(pName);
    });

    if (targetPuja) {
      setSelectedPuja(targetPuja);
      const modalEl = document.querySelector(".pandal-modal");
      if (modalEl) modalEl.scrollTop = 0;
    } else {
      alert(`🛕 "${nextPujaName}" এর বিস্তারিত তথ্য শীঘ্রই ডাটাবেসে আপডেট করা হবে!`);
    }
  };

  const openPlaceMap = (name, customMapLink, currentArea) => {
    if (customMapLink && customMapLink.startsWith("http")) {
      window.open(customMapLink, "_blank");
    } else {
      const destination = encodeURIComponent(`${name}, ${currentArea || 'Bankura'}`);
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=walking`, "_blank");
    }
  };

  return (
    <main 
      className="pandal-explorer-page"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(20, 5, 15, 0.75) 0%, rgba(50, 10, 25, 0.68) 50%, rgba(20, 5, 15, 0.82) 100%), url("/Gallery/PE.jpeg")`
      }}
    >
      <div className="pandal-explorer-overlay"></div>

      <div className="pandal-explorer-content">
        <div className="explorer-header">
          <p className="explorer-small-title">
            ✦ DURGA PUJA EXPLORER ✦
          </p>

          <h1>
            Discover
            <span> Pandals</span>
          </h1>

          <p>
            Enter a location and discover Durga Puja pandals around you.
          </p>
        </div>

        {locationStatus === "prompt" && (
          <div className="location-permission-box">
            <h3>ALLOW US TO USE YOUR CURRENT LOCATION?</h3>
            <div className="permission-btn-group">
              <button className="loc-btn-yes" onClick={handleUseMyCoordinates}>
                📍 YES, USE MY LOCATION
              </button>
              <button className="loc-btn-no" onClick={() => setLocationStatus("denied")}>
                NO, I'LL ENTER IT MANUALLY
              </button>
            </div>
            <p className="loc-privacy-note">
              For your privacy, we don't store your location — pincode, address, or GPS position — anywhere. It's only kept for this session.
            </p>
          </div>
        )}

        {locationStatus === "success" && (
          <div style={{ textAlign: "center", marginBottom: "25px", color: "#ffd36a", fontSize: "14px" }}>
            ✨ Location detected successfully! <span style={{ cursor: "pointer", textDecoration: "underline", marginLeft: "10px" }} onClick={() => setLocationStatus("prompt")}>Reset</span>
          </div>
        )}

        <div className="location-search">
          <label>
            📍 Where do you want to start exploring?
          </label>

          <div className="search-box">
            <input
              type="text"
              placeholder="Enter location or puja name e.g. Bankura"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />

            <button onClick={handleSearch}>
              🔍 Search
            </button>
          </div>
        </div>

        {searched && (
          <div className="pandal-results">
            <div className="results-heading">
              <h2>
                Pandals {location ? `near ${location}` : "Collection"}
              </h2>

              <span>
                {Array.isArray(filteredPandals) ? filteredPandals.length : 0} places found
              </span>
            </div>

            {!Array.isArray(filteredPandals) || filteredPandals.length === 0 ? (
              <p style={{ color: "rgba(255,255,255,0.7)", marginTop: "30px", fontSize: "16px" }}>
                🚫 কোনো পুজো খুঁজে পাওয়া যায়নি। অ্যাডমিন ড্যাশবোর্ড থেকে পুজো যোগ করুন।
              </p>
            ) : (
              <div className="pandal-grid">
                {filteredPandals.map((pandal, index) => (
                  <div
                    className="pandal-card"
                    key={pandal._id || index}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* 🌟 ট্রান্সপারেন্ট টপ ব্যানার এবং স্টাইলিশ টেক্সট বক্স */}
                    <div className="pandal-transparent-top-banner">
                      <div className="stylish-badge-pill">🛕 PUJA SPOT</div>
                    </div>

                    <div className="pandal-card-content">
                      <span className="pandal-number">
                        PANDAL {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3>{pandal.name}</h3>

                      <p>📍 {pandal.location}</p>

                      {pandal.theme && (
                        <p className="pandal-theme-tag">
                          🎨 Theme: <strong>{pandal.theme}</strong>
                        </p>
                      )}

                      <div className="card-button-group">
                        <button
                          className="details-button"
                          onClick={() => setSelectedPuja(pandal)}
                        >
                          Details →
                        </button>

                        <button
                          className="map-button"
                          onClick={() => {
                            if (pandal.mapLink) {
                              window.open(pandal.mapLink, "_blank");
                            } else {
                              const query = encodeURIComponent(
                                `${pandal.name}, ${pandal.location}`
                              );
                              window.open(
                                `https://www.google.com/maps/search/?api=1&query=${query}`,
                                "_blank"
                              );
                            }
                          }}
                        >
                          🗺️ Map
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {selectedPuja && (
        <div className="pandal-modal-overlay" onClick={() => setSelectedPuja(null)}>
          <div className="modal-stage-wrapper" onClick={(e) => e.stopPropagation()}>
            
            {(selectedPuja.restaurant1 || selectedPuja.restaurant2) && (
              <div className="aesthetic-trail-column left-trail">
                {selectedPuja.restaurant1 && (
                  <div 
                    className="aesthetic-side-card primary-card rose-theme"
                    onClick={() => openPlaceMap(selectedPuja.restaurant1, selectedPuja.restaurant1Map, selectedPuja.location)}
                  >
                    <div className="card-top-header">
                      <span className="card-heart-aura">💖</span>
                      <span className="aesthetic-badge rose">1ST FOOD STOP</span>
                    </div>
                    <h4 className="aesthetic-title">{selectedPuja.restaurant1}</h4>
                    <p className="aesthetic-desc">পুজোর আড্ডায় প্রিয়জনের সাথে সেরা খাবার!</p>
                    <div className="aesthetic-btn rose-btn">
                      <span>🗺️ Navigate Route</span> ➜
                    </div>
                  </div>
                )}

                {selectedPuja.restaurant1 && selectedPuja.restaurant2 && (
                  <div className="trail-arrow-indicator rose-glow">
                    <span className="arrow-badge">THEN 🍽️</span>
                    <div className="pulse-arrow-icon">▼</div>
                  </div>
                )}

                {selectedPuja.restaurant2 && (
                  <div 
                    className="aesthetic-side-card secondary-card rose-theme"
                    onClick={() => openPlaceMap(selectedPuja.restaurant2, selectedPuja.restaurant2Map, selectedPuja.location)}
                  >
                    <div className="card-top-header">
                      <span className="mini-icon">🍴</span>
                      <span className="aesthetic-badge rose">2ND CHOICE</span>
                    </div>
                    <h4 className="aesthetic-title mini-title">{selectedPuja.restaurant2}</h4>
                    <div className="aesthetic-btn rose-btn mini-btn">
                      <span>Get Route</span> ➜
                    </div>
                  </div>
                )}
              </div>
            )}

            {(selectedPuja.nextPuja1 || selectedPuja.nextPuja2) && (
              <div className="aesthetic-trail-column right-trail">
                {selectedPuja.nextPuja1 && (
                  <div 
                    className="aesthetic-side-card primary-card gold-theme"
                    onClick={() => handleSwitchToNextPandal(selectedPuja.nextPuja1)}
                  >
                    <div className="card-top-header">
                      <span className="card-heart-aura">🪷</span>
                      <span className="aesthetic-badge gold">NEXT PANDAL</span>
                    </div>
                    <h4 className="aesthetic-title">{selectedPuja.nextPuja1}</h4>
                    <p className="aesthetic-desc">এরপর এই মণ্ডপটি আপনার সবচেয়ে কাছে পড়বে!</p>
                    <div className="aesthetic-btn gold-btn">
                      <span>✨ View This Pandal</span> ➜
                    </div>
                  </div>
                )}

                {selectedPuja.nextPuja1 && selectedPuja.nextPuja2 && (
                  <div className="trail-arrow-indicator gold-glow">
                    <span className="arrow-badge gold-bg">NEXT 🛕</span>
                    <div className="pulse-arrow-icon gold-text">▼</div>
                  </div>
                )}

                {selectedPuja.nextPuja2 && (
                  <div 
                    className="aesthetic-side-card secondary-card gold-theme"
                    onClick={() => handleSwitchToNextPandal(selectedPuja.nextPuja2)}
                  >
                    <div className="card-top-header">
                      <span className="mini-icon">🛕</span>
                      <span className="aesthetic-badge gold">AFTER THAT</span>
                    </div>
                    <h4 className="aesthetic-title mini-title">{selectedPuja.nextPuja2}</h4>
                    <div className="aesthetic-btn gold-btn mini-btn">
                      <span>View Pandal</span> ➜
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="pandal-modal">
              <button className="modal-close" onClick={() => setSelectedPuja(null)}>✕</button>

              <div className="modal-header">
                <h2>{selectedPuja.name}</h2>
                <p>📍 {selectedPuja.location}</p>
              </div>

              {Array.isArray(selectedPuja.images) && selectedPuja.images.length > 0 && (
                <div className="modal-gallery">
                  {selectedPuja.images.map((imgUrl, i) => (
                    <img
                      key={i}
                      src={imgUrl}
                      alt={`${selectedPuja.name} ${i + 1}`}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1601662528567-526cd06f6582?auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                  ))}
                </div>
              )}

              {selectedPuja.theme && (
                <div className="modal-section">
                  <div className="modal-section-title">🎨 Theme</div>
                  <p className="modal-section-desc">{selectedPuja.theme}</p>
                </div>
              )}

              <div className="modal-section">
                <div className="modal-section-title">📖 Full Story & Overview</div>
                <p className="modal-section-desc">
                  {selectedPuja.description || "পুজোটির বিস্তারিত বর্ণনা শীঘ্রই যুক্ত করা হবে।"}
                </p>
              </div>

              {(selectedPuja.restaurant1 || selectedPuja.restaurant2 || selectedPuja.restaurant3) && (
                <div className="modal-section">
                  <div className="modal-section-title">🍽️ Nearest Restaurants / Food Spots</div>
                  <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {selectedPuja.restaurant1 && (
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ color: '#e5e7eb', fontSize: '14px' }}>🍴 {selectedPuja.restaurant1}</span>
                        <button
                          className="map-button"
                          style={{ padding: '4px 10px', fontSize: '11.5px', marginTop: 0 }}
                          onClick={() => openPlaceMap(selectedPuja.restaurant1, selectedPuja.restaurant1Map, selectedPuja.location)}
                        >
                          🗺️ Route
                        </button>
                      </div>
                    )}

                    {selectedPuja.restaurant2 && (
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ color: '#e5e7eb', fontSize: '14px' }}>🍴 {selectedPuja.restaurant2}</span>
                        <button
                          className="map-button"
                          style={{ padding: '4px 10px', fontSize: '11.5px', marginTop: 0 }}
                          onClick={() => openPlaceMap(selectedPuja.restaurant2, selectedPuja.restaurant2Map, selectedPuja.location)}
                        >
                          🗺️ Route
                        </button>
                      </div>
                    )}

                    {selectedPuja.restaurant3 && (
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ color: '#e5e7eb', fontSize: '14px' }}>🍴 {selectedPuja.restaurant3}</span>
                        <button
                          className="map-button"
                          style={{ padding: '4px 10px', fontSize: '11.5px', marginTop: 0 }}
                          onClick={() => openPlaceMap(selectedPuja.restaurant3, selectedPuja.restaurant3Map, selectedPuja.location)}
                        >
                          🗺️ Route
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {(selectedPuja.nextPuja1 || selectedPuja.nextPuja2) && (
                <div className="modal-section highlight-next-section">
                  <div className="modal-section-title">🛕 Next Nearest Puja Pandals</div>
                  <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {selectedPuja.nextPuja1 && (
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span
                          className="clickable-pandal-title"
                          title="Click to view details"
                          onClick={() => handleSwitchToNextPandal(selectedPuja.nextPuja1)}
                        >
                          🛕 {selectedPuja.nextPuja1}
                          <small className="redirect-hint">👉 View</small>
                        </span>
                        <button
                          className="map-button"
                          style={{ padding: '4px 10px', fontSize: '11.5px', marginTop: 0 }}
                          onClick={() => openPlaceMap(selectedPuja.nextPuja1, selectedPuja.nextPuja1Map, selectedPuja.location)}
                        >
                          🗺️ Route
                        </button>
                      </div>
                    )}

                    {selectedPuja.nextPuja2 && (
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span
                          className="clickable-pandal-title"
                          title="Click to view details"
                          onClick={() => handleSwitchToNextPandal(selectedPuja.nextPuja2)}
                        >
                          🛕 {selectedPuja.nextPuja2}
                          <small className="redirect-hint">👉 View</small>
                        </span>
                        <button
                          className="map-button"
                          style={{ padding: '4px 10px', fontSize: '11.5px', marginTop: 0 }}
                          onClick={() => openPlaceMap(selectedPuja.nextPuja2, selectedPuja.nextPuja2Map, selectedPuja.location)}
                        >
                          🗺️ Route
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {(selectedPuja.parking || selectedPuja.toilet) && (
                <div className="modal-section">
                  <div className="modal-section-title">🚗 Parking & Essentials</div>
                  <div style={{ fontSize: '14px', color: '#e5e7eb', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {selectedPuja.parking && <div>🅿️ <strong>Parking:</strong> {selectedPuja.parking}</div>}
                    {selectedPuja.toilet && <div>🚻 <strong>Washroom:</strong> {selectedPuja.toilet}</div>}
                  </div>
                </div>
              )}

              <button
                className="details-button"
                style={{ width: "100%", marginTop: "10px", padding: "13px" }}
                onClick={() => {
                  if (selectedPuja.mapLink) {
                    window.open(selectedPuja.mapLink, "_blank");
                  } else {
                    const query = encodeURIComponent(
                      `${selectedPuja.name}, ${selectedPuja.location}`
                    );
                    window.open(
                      `https://www.google.com/maps/search/?api=1&query=${query}`,
                      "_blank"
                    );
                  }
                }}
              >
                🗺️ Open Main Puja in Google Maps
              </button>
            </div>

          </div>
        </div>
      )}
    </main>
  );
}

export default PandalExplorer;