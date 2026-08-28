import React, { useState } from "react";
import "./UtilityPages.css";

function EmergencyHelp() {
  const [searchTerm, setSearchTerm] = useState("");

  const emergencyData = [
    {
      _id: "1",
      title: "Bankura Police Control Room",
      category: "Police & Security",
      phone: "100 / 03242-250212 / 9083269313",
      description: "জরুরি আইন-শৃঙ্খলা রক্ষা ও পুলিশি সহায়তার জন্য।",
      location: "Bankura Sadar"
    },
    {
      _id: "2",
      title: "Emergency Ambulance",
      category: "Medical & Ambulance",
      phone: "9932262897",
      description: "পুজোর কদিন যেকোনো মেডিকেল ইমারজেন্সির জন্য ২৪ ঘণ্টা উপলব্ধ।",
      location: "Bankura Govt. Medical College"
    },
    {
      _id: "3",
      title: "Fire Station Bankura",
      category: "Fire Service",
      phone: "03242-243291 / 8584027306/307",
      description: "আগুন বা অন্য কোনো দুর্ঘটনা জনিত জরুরি সেবার জন্য।",
      location: "Bankura Fire Station"
    },
    {
      _id: "4",
      title: "Blood Bank Services",
      category: "Medical & Blood",
      phone: "03242-244703 / 9434167747",
      description: "জরুরি রক্তের প্রয়োজনে যোগাযোগের জন্য।",
      location: "Bankura Sammilani Medical College"
    }
  ];

  const filteredList = emergencyData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main 
      className="utility-page emergency-page"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(30, 10, 15, 0.88), rgba(90, 30, 30, 0.75)), url("/Gallery/w.jpeg")`
      }}
    >
      <div className="utility-overlay"></div>
      <div className="utility-content">
        <div className="utility-header">
          <p className="utility-badge">🚨 SAFETY & SUPPORT</p>
          <h1>Emergency & <span>Helpdesk</span></h1>
          <p>জরুরি সেবা, পুলিশ কন্ট্রোল রুম, অ্যাম্বুলেন্স এবং হারিয়ে যাওয়া-প্রাপ্তি কেন্দ্রের তথ্য।</p>
        </div>

        <div className="utility-search-box">
          <input
            type="text"
            placeholder="Search service, police, ambulance, lost & found..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={() => {}}>🔍 Search</button>
        </div>

        <div className="utility-grid">
          {filteredList.length === 0 ? (
            <p className="no-data">🚫 কোনো তথ্য পাওয়া যায়নি।</p>
          ) : (
            filteredList.map((item) => (
              <div className="utility-card" key={item._id}>
                <div className="utility-card-icon">
                  {item.category.includes("Police") ? "👮‍♂️" : item.category.includes("Medical") ? "🚑" : item.category.includes("Fire") ? "🚒" : "📢"}
                </div>
                <div className="utility-card-body">
                  <h3>{item.title}</h3>
                  <p className="utility-subtext">📍 {item.location}</p>
                  <p className="utility-tag">📌 {item.category}</p>
                  <p style={{ fontSize: '13px', color: '#ffd36a', marginBottom: '8px', fontWeight: 'bold' }}>
                    📞 {item.phone}
                  </p>
                  <p style={{ fontSize: '12.5px', color: '#d1d5db', marginBottom: '12px' }}>
                    {item.description}
                  </p>

                  <a
                    href={`tel:${item.phone.split('/')[0].trim()}`}
                    className="utility-btn"
                    style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}

export default EmergencyHelp;