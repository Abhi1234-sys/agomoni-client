import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';

const ADMIN_USERNAME = "admin";
const ADMIN_SECRET_CODE = "1904";

// Initial form states
const initialPujaState = {
  name: '',
  location: '',
  theme: '',
  mapLink: '',
  images: '',
  description: '',
  restaurant1: '',
  restaurant1Map: '',
  restaurant2: '',
  restaurant2Map: '',
  restaurant3: '',
  restaurant3Map: '',
  nextPuja1: '',
  nextPuja1Map: '',
  nextPuja2: '',
  nextPuja2Map: '',
  parking: '',
  toilet: '',
};

const initialRestaurantState = {
  name: '',
  location: '',
  nearPuja: '',
  mapLink: '',
  specialty: '',
};

const initialParkingState = {
  spotName: '',
  location: '',
  forPandal: '',
  mapLink: '',
  capacity: '',
};

const initialToiletState = {
  locationInfo: '',
  area: '',
  nearPandal: '',
  mapLink: '',
};

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('pujas'); // 'pujas' | 'restaurants' | 'parkings' | 'toilets'

  // Login credentials state
  const [username, setUsername] = useState('');
  const [secretCode, setSecretCode] = useState('');
  const [authError, setAuthError] = useState('');

  // Form states
  const [pujaData, setPujaData] = useState(initialPujaState);
  const [restaurantData, setRestaurantData] = useState(initialRestaurantState);
  const [parkingData, setParkingData] = useState(initialParkingState);
  const [toiletData, setToiletData] = useState(initialToiletState);

  // Editing & loading
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Data lists
  const [pujas, setPujas] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [parkings, setParkings] = useState([]);
  const [toilets, setToilets] = useState([]);

  useEffect(() => {
    return () => {
      setIsAuthenticated(false);
      setUsername('');
      setSecretCode('');
    };
  }, []);

  // Fetch all categories
  const fetchAllData = async () => {
    try {
      const [resPujas, resRest, resPark, resToil] = await Promise.all([
        fetch('https://agomoni-backend-1.onrender.com//api/pujas').then((r) => r.json()),
        fetch('https://agomoni-backend-1.onrender.com//api/utilities/restaurants').then((r) => r.json()),
        fetch('https://agomoni-backend-1.onrender.com//api/utilities/parkings').then((r) => r.json()),
        fetch('https://agomoni-backend-1.onrender.com//api/utilities/toilets').then((r) => r.json()),
      ]);

      setPujas(Array.isArray(resPujas) ? resPujas : []);
      setRestaurants(Array.isArray(resRest) ? resRest : []);
      setParkings(Array.isArray(resPark) ? resPark : []);
      setToilets(Array.isArray(resToil) ? resToil : []);
    } catch (err) {
      console.error("Failed to load dashboard data:", err);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchAllData();
    }
  }, [isAuthenticated]);

  // Login handler
  const handleLogin = (e) => {
    e.preventDefault();
    setAuthError('');

    if (
      username.trim().toLowerCase() === ADMIN_USERNAME.toLowerCase() &&
      secretCode.trim() === ADMIN_SECRET_CODE
    ) {
      setIsAuthenticated(true);
    } else {
      setAuthError('❌ Invalid Username or Secret Code!');
    }
  };

  // Logout handler
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setSecretCode('');
    setMessage('');
    handleCancelEdit();
  };

  // Reset form
  const handleCancelEdit = () => {
    setEditingId(null);
    setPujaData(initialPujaState);
    setRestaurantData(initialRestaurantState);
    setParkingData(initialParkingState);
    setToiletData(initialToiletState);
    setMessage('');
  };

  // Tab switch
  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    handleCancelEdit();
  };

  // Select item for edit
  const handleEditSelect = (item) => {
    setEditingId(item._id);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (activeTab === 'pujas') {
      setPujaData({
        name: item.name || '',
        location: item.location || '',
        theme: item.theme || '',
        mapLink: item.mapLink || '',
        images: Array.isArray(item.images) ? item.images.join(', ') : '',
        description: item.description || '',
        restaurant1: item.restaurant1 || '',
        restaurant1Map: item.restaurant1Map || '',
        restaurant2: item.restaurant2 || '',
        restaurant2Map: item.restaurant2Map || '',
        restaurant3: item.restaurant3 || '',
        restaurant3Map: item.restaurant3Map || '',
        nextPuja1: item.nextPuja1 || '',
        nextPuja1Map: item.nextPuja1Map || '',
        nextPuja2: item.nextPuja2 || '',
        nextPuja2Map: item.nextPuja2Map || '',
        parking: item.parking || '',
        toilet: item.toilet || '',
      });
      setMessage(`✏️ Editing Puja: ${item.name}`);
    } else if (activeTab === 'restaurants') {
      setRestaurantData({
        name: item.name || '',
        location: item.location || '',
        nearPuja: item.nearPuja || '',
        mapLink: item.mapLink || '',
        specialty: item.specialty || '',
      });
      setMessage(`✏️ Editing Restaurant: ${item.name}`);
    } else if (activeTab === 'parkings') {
      setParkingData({
        spotName: item.spotName || '',
        location: item.location || '',
        forPandal: item.forPandal || '',
        mapLink: item.mapLink || '',
        capacity: item.capacity || '',
      });
      setMessage(`✏️ Editing Parking: ${item.spotName}`);
    } else if (activeTab === 'toilets') {
      setToiletData({
        locationInfo: item.locationInfo || '',
        area: item.area || '',
        nearPandal: item.nearPandal || '',
        mapLink: item.mapLink || '',
      });
      setMessage(`✏️ Editing Toilet: ${item.locationInfo}`);
    }
  };

  // Delete handler
  const handleDelete = async (id, title) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"?`)) return;

    try {
      const url =
        activeTab === 'pujas'
          ? `https://agomoni-backend-1.onrender.com//api/pujas/${id}`
          : `https://agomoni-backend-1.onrender.com//api/utilities/${activeTab}/${id}`;

      const res = await fetch(url, { method: 'DELETE' });

      if (res.ok) {
        setMessage(`🗑️ "${title}" deleted successfully!`);
        if (editingId === id) handleCancelEdit();
        fetchAllData();
      } else {
        setMessage('❌ Failed to delete item.');
      }
    } catch (err) {
      setMessage('❌ Error connecting to server.');
    }
  };

  // 
  const handleImageFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      const existingImages = pujaData.images.trim();
      const updatedImages = existingImages ? `${existingImages}, ${base64String}` : base64String;
      setPujaData({ ...pujaData, images: updatedImages });
    };
    reader.readAsDataURL(file);
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    let url = '';
    let payload = {};

    if (activeTab === 'pujas') {
      url = editingId
        ? `https://agomoni-backend-1.onrender.com//api/pujas/${editingId}`
        : 'https://agomoni-backend-1.onrender.com//api/pujas';

      payload = {
        ...pujaData,
        images: pujaData.images
          ? pujaData.images.split(',').map((u) => u.trim()).filter(Boolean)
          : [],
      };
    } else {
      url = editingId
        ? `https://agomoni-backend-1.onrender.com//api/utilities/${activeTab}/${editingId}`
        : `https://agomoni-backend-1.onrender.com//api/utilities/${activeTab}`;

      if (activeTab === 'restaurants') payload = restaurantData;
      if (activeTab === 'parkings') payload = parkingData;
      if (activeTab === 'toilets') payload = toiletData;
    }

    try {
      const method = editingId ? 'PUT' : 'POST';
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const resData = await response.json();

      if (response.ok) {
        setMessage(`✅ ${editingId ? 'Updated' : 'Added'} successfully!`);
        handleCancelEdit();
        fetchAllData();
      } else {
        setMessage(`❌ Error: ${resData.message || 'Action failed'}`);
      }
    } catch (err) {
      setMessage('❌ Failed to connect to server! Is backend running?');
    } finally {
      setLoading(false);
    }
  };

  // Login view
  if (!isAuthenticated) {
    return (
      <div className="admin-page-wrapper">
        <div className="admin-card login-card">
          <div className="login-header-group">
            <h2 className="admin-title">🔒 Developer Access</h2>
            <p className="admin-subtitle">Enter your credentials to unlock dashboard</p>
          </div>

          {authError && <div className="alert-box alert-error">{authError}</div>}

          <form className="admin-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Enter username"
                autoComplete="off"
              />                   
            </div>

            <div className="form-group">
              <label>Secret Code</label>
              <input
                type="password"
                value={secretCode}
                onChange={(e) => setSecretCode(e.target.value)}
                required
                placeholder="••••"
                autoComplete="off"
              />
            </div>

            <button type="submit" className="submit-btn">
              🔓 Unlock Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

 
  return (
    <div className="admin-page-wrapper">
      {/* Category Tabs */}
      <div className="admin-tab-container">
        <button
          className={`admin-tab-button ${activeTab === 'pujas' ? 'active' : ''}`}
          onClick={() => handleTabSwitch('pujas')}
        >
          🛕 Durga Pujas ({pujas.length})
        </button>
        <button
          className={`admin-tab-button ${activeTab === 'restaurants' ? 'active' : ''}`}
          onClick={() => handleTabSwitch('restaurants')}
        >
          🍽️ Restaurants ({restaurants.length})
        </button>
        <button
          className={`admin-tab-button ${activeTab === 'parkings' ? 'active' : ''}`}
          onClick={() => handleTabSwitch('parkings')}
        >
          🚗 Parking Zones ({parkings.length})
        </button>
        <button
          className={`admin-tab-button ${activeTab === 'toilets' ? 'active' : ''}`}
          onClick={() => handleTabSwitch('toilets')}
        >
          🚻 Public Toilets ({toilets.length})
        </button>
      </div>

      <div className="admin-layout-grid">
        {/* PANEL 1: FORM */}
        <div className="admin-card">
          <div className="admin-header">
            <h2 className="admin-title">
              {editingId ? '✏️ Edit' : '➕ Add New'} {activeTab.slice(0, -1).toUpperCase()}
            </h2>
            <button onClick={handleLogout} className="logout-btn">
              🚪 Logout
            </button>
          </div>

          {message && (
            <div
              className={`alert-box ${
                message.startsWith('✅') || message.startsWith('✏️')
                  ? 'alert-success'
                  : 'alert-error'
              }`}
            >
              {message}
            </div>
          )}

          <form className="admin-form" onSubmit={handleSubmit}>
            {/* PUJAS FORM */}
            {activeTab === 'pujas' && (
              <>
                <div className="form-group">
                  <label>Puja Name *</label>
                  <input
                    type="text"
                    value={pujaData.name}
                    onChange={(e) => setPujaData({ ...pujaData, name: e.target.value })}
                    required
                    placeholder="e.g. Kenduadihi Sarbojanin"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Location / Area *</label>
                    <input
                      type="text"
                      value={pujaData.location}
                      onChange={(e) => setPujaData({ ...pujaData, location: e.target.value })}
                      required
                      placeholder="e.g. Kenduadih, Bankura"
                    />
                  </div>
                  <div className="form-group">
                    <label>Theme</label>
                    <input
                      type="text"
                      value={pujaData.theme}
                      onChange={(e) => setPujaData({ ...pujaData, theme: e.target.value })}
                      placeholder="e.g. Traditional / Art Heritage"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Main Google Maps URL</label>
                  <input
                    type="url"
                    value={pujaData.mapLink}
                    onChange={(e) => setPujaData({ ...pujaData, mapLink: e.target.value })}
                    placeholder="https://maps.google.com/..."
                  />
                </div>

                {/* */}
                <div className="form-group">
                  <label>🖼️ Upload Profile Photo from Laptop (or paste URL below)</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageFileChange}
                    style={{ padding: "8px", background: "rgba(255,255,255,0.05)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", cursor: "pointer" }}
                  />
                </div>

                <div className="form-group">
                  <label>Image URLs (Comma separated)</label>
                  <input
                    type="text"
                    value={pujaData.images}
                    onChange={(e) => setPujaData({ ...pujaData, images: e.target.value })}
                    placeholder="https://i.ibb.co/1.jpg, https://i.ibb.co/2.jpg"
                  />
                </div>

                <div className="form-group">
                  <label>Puja Description</label>
                  <textarea
                    rows="3"
                    value={pujaData.description}
                    onChange={(e) => setPujaData({ ...pujaData, description: e.target.value })}
                    placeholder="Write a brief overview of the puja..."
                  />
                </div>

                {/* Restaurants with Map Links */}
                <div style={{ marginTop: '8px', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '12px' }}>
                  <div style={{ color: '#fbbf24', fontSize: '13.5px', fontWeight: '700', marginBottom: '8px' }}>
                    🍽️ Nearest Food Spots & Maps
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="text"
                        value={pujaData.restaurant1}
                        onChange={(e) => setPujaData({ ...pujaData, restaurant1: e.target.value })}
                        placeholder="Restaurant 1 Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="url"
                        value={pujaData.restaurant1Map}
                        onChange={(e) => setPujaData({ ...pujaData, restaurant1Map: e.target.value })}
                        placeholder="Restaurant 1 Map URL"
                      />
                    </div>
                  </div>

                  <div className="form-row" style={{ marginTop: '8px' }}>
                    <div className="form-group">
                      <input
                        type="text"
                        value={pujaData.restaurant2}
                        onChange={(e) => setPujaData({ ...pujaData, restaurant2: e.target.value })}
                        placeholder="Restaurant 2 Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="url"
                        value={pujaData.restaurant2Map}
                        onChange={(e) => setPujaData({ ...pujaData, restaurant2Map: e.target.value })}
                        placeholder="Restaurant 2 Map URL"
                      />
                    </div>
                  </div>
                </div>

                {/* Next Pujas with Map Links */}
                <div style={{ marginTop: '8px', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '12px' }}>
                  <div style={{ color: '#fbbf24', fontSize: '13.5px', fontWeight: '700', marginBottom: '8px' }}>
                    🛕 Next Nearest Pujas & Maps
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="text"
                        value={pujaData.nextPuja1}
                        onChange={(e) => setPujaData({ ...pujaData, nextPuja1: e.target.value })}
                        placeholder="Next Puja 1 Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="url"
                        value={pujaData.nextPuja1Map}
                        onChange={(e) => setPujaData({ ...pujaData, nextPuja1Map: e.target.value })}
                        placeholder="Next Puja 1 Map URL"
                      />
                    </div>
                  </div>
                </div>

                {/* Parking & Toilet */}
                <div style={{ marginTop: '8px', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '12px' }}>
                  <div style={{ color: '#fbbf24', fontSize: '13.5px', fontWeight: '700', marginBottom: '8px' }}>
                    🚗 Parking & Toilet Details
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="text"
                        value={pujaData.parking}
                        onChange={(e) => setPujaData({ ...pujaData, parking: e.target.value })}
                        placeholder="Nearest Parking Zone"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        value={pujaData.toilet}
                        onChange={(e) => setPujaData({ ...pujaData, toilet: e.target.value })}
                        placeholder="Nearest Toilet / Washroom"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* RESTAURANTS FORM*/}
            {activeTab === 'restaurants' && (
              <>
                <div className="form-group">
                  <label>Restaurant / Food Spot Name *</label>
                  <input
                    type="text"
                    value={restaurantData.name}
                    onChange={(e) => setRestaurantData({ ...restaurantData, name: e.target.value })}
                    required
                    placeholder="e.g. Royal Feast / Dada Boudi Hotel"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Area / Location *</label>
                    <input
                      type="text"
                      value={restaurantData.location}
                      onChange={(e) => setRestaurantData({ ...restaurantData, location: e.target.value })}
                      required
                      placeholder="e.g. Machantala, Bankura"
                    />
                  </div>
                  <div className="form-group">
                    <label>Near Which Puja Pandal?</label>
                    <input
                      type="text"
                      value={restaurantData.nearPuja}
                      onChange={(e) => setRestaurantData({ ...restaurantData, nearPuja: e.target.value })}
                      placeholder="e.g. Near Poabagan Pandal"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Google Maps Directions URL *</label>
                  <input
                    type="url"
                    value={restaurantData.mapLink}
                    onChange={(e) => setRestaurantData({ ...restaurantData, mapLink: e.target.value })}
                    required
                    placeholder="https://maps.google.com/..."
                  />
                </div>

                <div className="form-group">
                  <label>Food Specialty (Optional)</label>
                  <input
                    type="text"
                    value={restaurantData.specialty}
                    onChange={(e) => setRestaurantData({ ...restaurantData, specialty: e.target.value })}
                    placeholder="e.g. Mughlai, Bengali Thali, Fast Food"
                  />
                </div>
              </>
            )}

            {/*PARKING FORM*/}
            {activeTab === 'parkings' && (
              <>
                <div className="form-group">
                  <label>Parking Spot Name / Landmark *</label>
                  <input
                    type="text"
                    value={parkingData.spotName}
                    onChange={(e) => setParkingData({ ...parkingData, spotName: e.target.value })}
                    required
                    placeholder="e.g. Zilla School Ground Parking"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Area / Location *</label>
                    <input
                      type="text"
                      value={parkingData.location}
                      onChange={(e) => setParkingData({ ...parkingData, location: e.target.value })}
                      required
                      placeholder="e.g. School Danga, Bankura"
                    />
                  </div>
                  <div className="form-group">
                    <label>Dedicated for Pandal?</label>
                    <input
                      type="text"
                      value={parkingData.forPandal}
                      onChange={(e) => setParkingData({ ...parkingData, forPandal: e.target.value })}
                      placeholder="e.g. For School Danga Sarbojanin"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Google Maps Directions URL *</label>
                  <input
                    type="url"
                    value={parkingData.mapLink}
                    onChange={(e) => setParkingData({ ...parkingData, mapLink: e.target.value })}
                    required
                    placeholder="https://maps.google.com/..."
                  />
                </div>

                <div className="form-group">
                  <label>Vehicle Capacity / Notes (Optional)</label>
                  <input
                    type="text"
                    value={parkingData.capacity}
                    onChange={(e) => setParkingData({ ...parkingData, capacity: e.target.value })}
                    placeholder="e.g. 2-Wheelers & 4-Wheelers (Free)"
                  />
                </div>
              </>
            )}

            {/* TOILETS FORM */}
            {activeTab === 'toilets' && (
              <>
                <div className="form-group">
                  <label>Toilet Location Details *</label>
                  <input
                    type="text"
                    value={toiletData.locationInfo}
                    onChange={(e) => setToiletData({ ...toiletData, locationInfo: e.target.value })}
                    required
                    placeholder="e.g. Bus Stand Public Bio-Toilet Gate 2"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Area / Zone *</label>
                    <input
                      type="text"
                      value={toiletData.area}
                      onChange={(e) => setToiletData({ ...toiletData, area: e.target.value })}
                      required
                      placeholder="e.g. Gobindanagar, Bankura"
                    />
                  </div>
                  <div className="form-group">
                    <label>Near Which Pandal?</label>
                    <input
                      type="text"
                      value={toiletData.nearPandal}
                      onChange={(e) => setToiletData({ ...toiletData, nearPandal: e.target.value })}
                      placeholder="e.g. Near Bus Stand Pandal"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Google Maps Location URL *</label>
                  <input
                    type="url"
                    value={toiletData.mapLink}
                    onChange={(e) => setToiletData({ ...toiletData, mapLink: e.target.value })}
                    required
                    placeholder="https://maps.google.com/..."
                  />
                </div>
              </>
            )}

            <div className="btn-row">
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading
                  ? 'Saving...'
                  : editingId
                  ? '💾 Update'
                  : `➕ Add ${activeTab.slice(0, -1)}`}
              </button>

              {editingId && (
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="cancel-edit-btn"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* PANEL 2: LIST */}
        <div className="admin-card">
          <div className="admin-header">
            <h2 className="admin-title">
              📋 {activeTab.toUpperCase()} ({
                activeTab === 'pujas'
                  ? pujas.length
                  : activeTab === 'restaurants'
                  ? restaurants.length
                  : activeTab === 'parkings'
                  ? parkings.length
                  : toilets.length
              })
            </h2>
          </div>

          <p className="admin-subtitle" style={{ marginBottom: '16px' }}>
            Click Edit to modify details or Delete to remove from database.
          </p>

          <div className="puja-list-container">
            {/* Pujas List */}
            {activeTab === 'pujas' &&
              (pujas.length === 0 ? (
                <p style={{ color: '#9ca3af', textAlign: 'center', marginTop: '30px' }}>
                  No pujas found in database.
                </p>
              ) : (
                pujas.map((item) => (
                  <div key={item._id} className="puja-list-item">
                    <div className="item-info">
                      <h4>{item.name}</h4>
                      <p>📍 {item.location}</p>
                      <small>
                        📷 {item.images ? item.images.length : 0} photos | Theme: {item.theme || 'N/A'}
                      </small>
                    </div>
                    <div className="item-actions">
                      <button
                        className="action-btn-edit"
                        onClick={() => handleEditSelect(item)}
                        title="Edit"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        className="action-btn-del"
                        onClick={() => handleDelete(item._id, item.name)}
                        title="Delete"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))
              ))}

            {/* Restaurants List */}
            {activeTab === 'restaurants' &&
              (restaurants.length === 0 ? (
                <p style={{ color: '#9ca3af', textAlign: 'center', marginTop: '30px' }}>
                  No restaurants added yet.
                </p>
              ) : (
                restaurants.map((item) => (
                  <div key={item._id} className="puja-list-item">
                    <div className="item-info">
                      <h4>{item.name}</h4>
                      <p>📍 {item.location} {item.nearPuja && `(Near: ${item.nearPuja})`}</p>
                      <small>🍲 {item.specialty || 'Food & Dining'}</small>
                    </div>
                    <div className="item-actions">
                      <button
                        className="action-btn-edit"
                        onClick={() => handleEditSelect(item)}
                        title="Edit"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        className="action-btn-del"
                        onClick={() => handleDelete(item._id, item.name)}
                        title="Delete"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))
              ))}

            {/* Parking List */}
            {activeTab === 'parkings' &&
              (parkings.length === 0 ? (
                <p style={{ color: '#9ca3af', textAlign: 'center', marginTop: '30px' }}>
                  No parking spots added yet.
                </p>
              ) : (
                parkings.map((item) => (
                  <div key={item._id} className="puja-list-item">
                    <div className="item-info">
                      <h4>{item.spotName}</h4>
                      <p>📍 {item.location} {item.forPandal && `(For: ${item.forPandal})`}</p>
                      <small>🚗 {item.capacity || 'Parking Available'}</small>
                    </div>
                    <div className="item-actions">
                      <button
                        className="action-btn-edit"
                        onClick={() => handleEditSelect(item)}
                        title="Edit"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        className="action-btn-del"
                        onClick={() => handleDelete(item._id, item.spotName)}
                        title="Delete"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))
              ))}

            {/* Toilets List */}
            {activeTab === 'toilets' &&
              (toilets.length === 0 ? (
                <p style={{ color: '#9ca3af', textAlign: 'center', marginTop: '30px' }}>
                  No public toilets added yet.
                </p>
              ) : (
                toilets.map((item) => (
                  <div key={item._id} className="puja-list-item">
                    <div className="item-info">
                      <h4>{item.locationInfo}</h4>
                      <p>📍 {item.area} {item.nearPandal && `(Near: ${item.nearPandal})`}</p>
                      <small>🚻 Public Washroom</small>
                    </div>
                    <div className="item-actions">
                      <button
                        className="action-btn-edit"
                        onClick={() => handleEditSelect(item)}
                        title="Edit"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        className="action-btn-del"
                        onClick={() => handleDelete(item._id, item.locationInfo)}
                        title="Delete"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;