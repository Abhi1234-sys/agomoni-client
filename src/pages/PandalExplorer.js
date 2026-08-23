import React, { useState } from "react";
import "./PandalExplorer.css";

const samplePandals = [
  {
    name: "Poabagan",
    location: "Bankura, West Bengal",
    distance: "1.2 km",
  },
  {
    name: "School Danga",
    location: "Bankura, West Bengal",
    distance: "2.4 km",
  },
  {
    name: "Pratap Bagan",
    location: "Bankura, West Bengal",
    distance: "3.1 km",
  },
];

function PandalExplorer() {
  const [location, setLocation] = useState("");
  const [pandals, setPandals] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    if (!location.trim()) {
      alert("Please enter a location");
      return;
    }

    // Temporary sample results.
    // Later we will replace this with real location/API data.
    setPandals(samplePandals);
    setSearched(true);
  };

  return (
    <main className="pandal-explorer-page">

      <div className="pandal-explorer-overlay"></div>

      <div className="pandal-explorer-content">

        {/* Header */}

        <div className="explorer-header">

          <p className="explorer-small-title">
            ✦ DURGA PUJA EXPLORER ✦
          </p>

          <h1>
            Discover
            <span> Pandals</span>
          </h1>

          <p>
            Enter a location and discover Durga Puja
            pandals around you.
          </p>

        </div>


        {/* Search Box */}

        <div className="location-search">

          <label>
            📍 Where do you want to start exploring?
          </label>

          <div className="search-box">

            <input
              type="text"
              placeholder="Enter location e.g. Bankura"
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


        {/* Results */}

        {searched && (

          <div className="pandal-results">

            <div className="results-heading">

              <h2>
                Pandals near {location}
              </h2>

              <span>
                {pandals.length} places found
              </span>

            </div>


            <div className="pandal-grid">

              {pandals.map((pandal, index) => (

                <div
                  className="pandal-card"
                  key={index}
                >

                  <div className="pandal-card-image">
                    🛕
                  </div>

                  <div className="pandal-card-content">

                    <span className="pandal-number">
                      PANDAL {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>
                      {pandal.name}
                    </h3>

                    <p>
                      📍 {pandal.location}
                    </p>

                    <p>
                      📏 {pandal.distance} away
                    </p>

                    <button
                      className="map-button"
                      onClick={() => {
                        const query = encodeURIComponent(
                          `${pandal.name}, ${pandal.location}`
                        );

                        window.open(
                          `https://www.google.com/maps/search/?api=1&query=${query}`,
                          "_blank"
                        );
                      }}
                    >
                      View on Map →
                    </button>

                  </div>

                </div>

              ))}

            </div>

          </div>

        )}

      </div>

    </main>
  );
}

export default PandalExplorer;