import React, { useState, useEffect } from "react";
import "./UtilityPages.css";

function NearbyRestaurants() {
  const [searchTerm, setSearchTerm] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [locationStatus, setLocationStatus] = useState("prompt"); 

 
  useEffect(() => {
    const fetchRestaurantsFromPujas = async () => {
      try {
        const response = await fetch("https://agomoni-backend-1.onrender.com//api/pujas");
        const data = await response.json();
        
        let pujaList = Array.isArray(data) ? data : (data.data || data.pujas || []);
        
        let extractedRestaurants = [];
        pujaList.forEach(p => {
          
          if (p.restaurant1) {
            extractedRestaurants.push({
              _id: p._id + "_r1",
              name: p.restaurant1,
              location: p.location || "Bankura",
              nearPuja: p.name,
              mapLink: p.restaurant1Map || ""
            });
          }
         
          if (p.restaurant2) {
            extractedRestaurants.push({
              _id: p._id + "_r2",
              name: p.restaurant2,
              location: p.location || "Bankura",
              nearPuja: p.name,
              mapLink: p.restaurant2Map || ""
            });
          }
        });

        setRestaurants(extractedRestaurants);
        setFilteredList(extractedRestaurants);
      } catch (err) {
        console.error("Failed to load restaurants from pujas:", err);
      }
    };

    fetchRestaurantsFromPujas();
  }, []);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setFilteredList(restaurants);
      return;
    }

    const query = searchTerm.toLowerCase().trim();
    const filtered = restaurants.filter(
      (item) =>
        (item.location && item.location.toLowerCase().includes(query)) ||
        (item.name && item.name.toLowerCase().includes(query)) ||
        (item.nearPuja && item.nearPuja.toLowerCase().includes(query))
    );

    setFilteredList(filtered.length > 0 ? filtered : restaurants);
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

  return (
    <main 
      className="utility-page restaurant-page"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(49, 24, 26, 0.88), rgba(132, 65, 31, 0.7)), url("/Gallery/resturant.jpg")`
      }}
    >
      <div className="utility-overlay"></div>
      <div className="utility-content">
        <div className="utility-header">
          <p className="utility-badge">🍽️ PUJA FOOD GUIDE</p>
          <h1>Nearby <span>Restaurants</span></h1>
          <p>Find the best food spots and restaurants near Durga Puja pandals in Bankura. Click bubbles for route!</p>
        </div>

        {/* LOCATION PERMISSION BOX  */}
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
          <div style={{ textAlign: "center", marginBottom: "20px", color: "#ffd36a", fontSize: "14px" }}>
            ✨ Location detected successfully! (Showing spots around you) <span style={{ cursor: "pointer", textDecoration: "underline", marginLeft: "10px" }} onClick={() => setLocationStatus("prompt")}>Reset</span>
          </div>
        )}
        {/*  */}

        {/* 🗺️ MAP BANNER IMAGE SECTION */}
        <div className="map-banner-container" style={{ marginBottom: "25px", textAlign: "center" }}>
          <div style={{ 
            maxWidth: "600px", 
            margin: "0 auto", 
            borderRadius: "15px", 
            overflow: "hidden", 
            border: "2px solid rgba(255, 196, 46, 0.4)",
            boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
            background: "rgba(0,0,0,0.4)"
          }}>
            <img 
              src="/Gallery/Bankura-Map.jpg" 
              alt="Bankura Zone Map" 
              style={{ width: "100%", height: "180px", objectFit: "cover", display: "block" }}
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80";
              }}
            />
            <div style={{ padding: "8px", background: "rgba(20, 5, 10, 0.8)", fontSize: "12px", color: "#ffd36a", letterSpacing: "1px" }}>
              🗺️ LIVE BANKURA PUJA ZONE MAP & RADAR
            </div>
          </div>
        </div>

        <div className="utility-search-box">
          <input
            type="text"
            placeholder="Search by area, restaurant or pandal name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button onClick={handleSearch}>🔍 Search</button>
        </div>

        {/*  Bubble Pop-up Grid Container */}
        <div className="utility-grid bubble-popup-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginTop: "20px" }}>
          {filteredList.length === 0 ? (
            <p className="no-data" style={{ color: "#fff", textAlign: "center", gridColumn: "1 / -1" }}>
              🚫 কোনো রেস্তোরাঁ পাওয়া যায়নি। অ্যাডমিন ড্যাশবোর্ড থেকে যোগ করুন।
            </p>
          ) : (
            filteredList.map((item, index) => (
              <div 
                className="utility-card floating-bubble-card" 
                key={item._id || index}
                style={{ 
                  background: "rgba(25, 10, 18, 0.85)", 
                  border: "1px solid rgba(255, 196, 46, 0.4)", 
                  borderRadius: "20px", 
                  padding: "20px", 
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                  animation: `bubblePopUp 0.5s ease ${index * 0.1}s backwards`
                }}
              >
                <div className="utility-card-icon bubble-icon" style={{ fontSize: "24px", marginBottom: "10px" }}>🍴</div>
                <div className="utility-card-body bubble-info">
                  <h3 style={{ color: "#ffd36a", fontSize: "18px", marginBottom: "8px" }}>{item.name}</h3>
                  <p className="utility-subtext" style={{ color: "#e5e7eb", fontSize: "14px", marginBottom: "5px" }}>📍 Area: {item.location}</p>
                  {item.nearPuja && <p className="utility-tag" style={{ color: "#d1d5db", fontSize: "13px", marginBottom: "15px" }}>🛕 Near Pandal: {item.nearPuja}</p>}

                  <button
                    className="utility-btn route-arrow-badge"
                    style={{
                      width: "100%",
                      padding: "10px",
                      background: "linear-gradient(135deg, #ffc42e, #e29c1d)",
                      border: "none",
                      borderRadius: "12px",
                      color: "#1a050a",
                      fontWeight: "bold",
                      cursor: "pointer",
                      fontSize: "13.5px"
                    }}
                    onClick={() => {
                      const destination = encodeURIComponent(`${item.name}, ${item.location}`);
                      // ইউজারের কারেন্ট লোকেশন থেকে ডিরেক্ট রুট ওপেন করার ইউনিভার্সাল লিংক
                      window.open(`https://www.google.com/maps/dir/?api=1&destination=${destination}`, "_blank");
                    }}
                  >
                    🗺️ Get Route / Directions ➜
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}

export default NearbyRestaurants;