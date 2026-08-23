import React from "react";
import { Link } from "react-router-dom";


function Journey() {

  return (

    <main className="journey-page">


      <div className="journey-content">


        <p className="journey-small-title">
          ✦ YOUR PUJA ADVENTURE ✦
        </p>


        <h1>
          Start Your
          <span>
            Journey
          </span>
        </h1>


        <p className="journey-description">
          Explore the city, discover beautiful pandals,
          find useful places and experience Durga Puja
          like never before.
        </p>


        {/* OPTIONS */}

        <div className="journey-grid">


          {/* PARKING */}

          <div className="journey-card">

            <div className="card-icon">
              🚗
            </div>

            <h2>
              Nearby Parking
            </h2>

            <p>
              Find parking spaces near your location.
            </p>

            <button>
              Explore
            </button>

          </div>


          {/* RESTAURANT */}

          <div className="journey-card">

            <div className="card-icon">
              🍽️
            </div>

            <h2>
              Nearby Restaurants
            </h2>

            <p>
              Discover restaurants and food places nearby.
            </p>

            <button>
              Explore
            </button>

          </div>


          {/* TOILET */}

          <div className="journey-card">

            <div className="card-icon">
              🚻
            </div>

            <h2>
              Public Toilets
            </h2>

            <p>
              Find nearby public toilet facilities.
            </p>

            <button>
              Explore
            </button>

          </div>


          {/* PANDAL */}

          <div className="journey-card">

            <div className="card-icon">
              🛕
            </div>

            <h2>
              Pandal Explorer
            </h2>

            <p>
              Discover famous Durga Puja pandals.
            </p>

            <button>
              Explore
            </button>

          </div>


        </div>


        {/* BACK */}

        <Link
          to="/"
          className="back-home"
        >
          ← Back to Home
        </Link>


      </div>

    </main>

  );
}


export default Journey;