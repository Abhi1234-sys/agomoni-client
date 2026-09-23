import React, { useState, useRef, useEffect } from 'react';
import './VirtualPuja.css';

const VirtualPuja = () => {
  const [flowers, setFlowers] = useState([]);
  const [isDiyaLit, setIsDiyaLit] = useState(false);
  const [pujaCount, setPujaCount] = useState(108);

  // Canvas for Alpana Drawing
  const canvasRef = useRef(null);
  const isDrawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const ctx = canvas.getContext('2d');
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#fff8e7'; // White rice paste color
      ctx.shadowColor = '#ffffff';
      ctx.shadowBlur = 5;
    }
  }, []);

  // Alpana Drawing Logic
  const startDrawing = (e) => {
    isDrawing.current = true;
    draw(e);
  };

  const stopDrawing = () => {
    isDrawing.current = false;
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.beginPath();
    }
  };

  const draw = (e) => {
    if (!isDrawing.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const clearAlpana = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  // Flower Offering Logic
  const offerFlower = () => {
    const newFlower = {
      id: Date.now(),
      left: Math.random() * 60 + 20,
    };
    setFlowers((prev) => [...prev, newFlower]);
    setPujaCount((prev) => prev + 1);
  };

  // Sound Handler
  const playSound = (soundType) => {
    let fileName = '';
    let alertMsg = '';

    if (soundType === 'shankh') {
      fileName = '/sounds/shankh.mp3';
      alertMsg = '🐚 শাঁখের আওয়াজ বাজছে!';
    } else if (soundType === 'ulu') {
      fileName = '/sounds/ulu.mp3';
      alertMsg = '📢 উলুধ্বনি বাজছে!';
    } else if (soundType === 'mantra') {
      fileName = '/sounds/mantra.mp3';
      alertMsg = '📜 পূজা মন্ত্র পাঠ হচ্ছে!';
    }

    const audio = new Audio(fileName);
    audio.play().catch(() => {
      alert(alertMsg);
    });
  };

  // WhatsApp Share Handler
  const shareAnjali = () => {
    const text = encodeURIComponent(
      `🪔 আমি আগমনী ওয়েবসাইটে মা দুর্গাকে ভার্চুয়াল অঞ্জলি নিবেদন করলাম! 🌸\nতুমিও মা-কে অঞ্জলি দাও এবং বাঁকুড়ার পুজো পরিক্রমা দেখো এখানে: https://agomoni-client.vercel.app/virtual-puja`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div className="puja-container">
      <h2 className="puja-title">🪔 ভার্চুয়াল অঞ্জলি ও আরতি 🪔</h2>
      <p className="puja-subtitle">মা দুর্গার চরণে ফুল নিবেদন করুন এবং নিচে নিজের হাতে আল্পনা আঁকুন</p>

      {/* Main Deity Stage */}
      <div className="stage">
        {/* Maa Durga Image */}
        <img
          src="/images/durga-protima.png"
          alt="Maa Durga"
          className="durga-img"
          onError={(e) => {
            e.target.src = "https://cdn-icons-png.flaticon.com/512/3306/3306612.png";
          }}
        />

        {/* Diya / Dhunuchi */}
        <div className={`diya ${isDiyaLit ? 'lit' : ''}`}>🪔</div>

        {/* Falling Flowers */}
        {flowers.map((f) => (
          <span key={f.id} className="falling-flower" style={{ left: `${f.left}%` }}>
            🌸
          </span>
        ))}
      </div>

      {/* Action Controls */}
      <div className="controls">
        <button onClick={offerFlower}>🌸 ফুল অর্পণ করুন</button>
        <button onClick={() => setIsDiyaLit(!isDiyaLit)}>
          {isDiyaLit ? '🔥 প্রদীপ নেভান' : '🪔 প্রদীপ জ্বালান'}
        </button>
        <button onClick={() => playSound('shankh')}>🐚 শঙ্খ বাজান</button>
        <button onClick={() => playSound('ulu')}>📢 উলুধ্বনি</button>
        <button onClick={() => playSound('mantra')}>📜 পূজা মন্ত্র</button>
      </div>

      {/* Interactive Alpana Section */}
      <div className="alpana-section">
        <h3>🎨 নিজের আঙুলে আল্পনা আঁকুন</h3>
        <p>নিচের খালি জায়গায় মাউস বা আঙুল দিয়ে ঘোরান</p>
        <div className="canvas-wrapper">
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseUp={stopDrawing}
            onMouseMove={draw}
            onTouchStart={startDrawing}
            onTouchEnd={stopDrawing}
            onTouchMove={draw}
            className="alpana-canvas"
          />
        </div>
        <button className="clear-btn" onClick={clearAlpana}>🧹 আল্পনা মুছে ফেলুন</button>
      </div>

      {/* Global Counter & Share */}
      <div className="footer-section">
        <div className="counter-box">
          <p>এখনও পর্যন্ত মোট <strong>{pujaCount}</strong> জন পুজো দিয়েছেন!</p>
        </div>
        <br />
        <button className="share-whatsapp-btn" onClick={shareAnjali}>
          📲 বন্ধুদের সাথে অঞ্জলি শেয়ার করুন (WhatsApp)
        </button>
      </div>
    </div>
  );
};

export default VirtualPuja;