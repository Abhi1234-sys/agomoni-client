import React, { useState, useEffect } from "react";
import "./WeatherCard.css";

function WeatherCard({ lat, lon }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchWeather = async () => {
      setLoading(true);
      try {
        // Default Bankura Coordinates if GPS location is not set
        const targetLat = lat || 23.2324;
        const targetLon = lon || 87.0718;

        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${targetLat}&longitude=${targetLon}&current_weather=true`
        );
        const data = await res.json();

        if (isMounted && data && data.current_weather) {
          setWeather(data.current_weather);
        }
      } catch (err) {
        console.error("Main page weather fetch error:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchWeather();
    return () => {
      isMounted = false;
    };
  }, [lat, lon]);

  if (loading) {
    return (
      <div className="main-weather-skeleton">
        <span>🌤️ লাইভ আবহাওয়া তথ্য লোড হচ্ছে...</span>
      </div>
    );
  }

  if (!weather) return null;

  const getWeatherDetails = (code) => {
    if (code === 0) {
      return { icon: "☀️", text: "পরিষ্কার আকাশ", advice: "প্যান্ডেল ঘোরার দারুণ সময়! 🎯", bg: "sunny" };
    } else if ([1, 2, 3].includes(code)) {
      return { icon: "🌤️", text: "আংশিক মেঘলা", advice: "মনোরম আবহাওয়া, ঠাকুর দেখার সেরা সময়! ✨", bg: "cloudy" };
    } else if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) {
      return { icon: "🌧️", text: "বৃষ্টির সম্ভাবনা", advice: "সাথে ছাতা রাখুন! ☔", bg: "rainy" };
    } else if ([95, 96, 99].includes(code)) {
      return { icon: "⛈️", text: "ঝড়-বৃষ্টির সম্ভাবনা", advice: "সতর্ক থাকুন ও নিরাপদ স্থানে থাকুন! ⚡", bg: "storm" };
    }
    return { icon: "🌡️", text: "সাধারণ আবহাওয়া", advice: "পুজো উপভোগ করুন! 🎉", bg: "normal" };
  };

  const info = getWeatherDetails(weather.weathercode);

  return (
    <div className={`main-weather-badge ${info.bg}`}>
      <div className="weather-badge-top">
        <span className="live-pill">● LIVE WEATHER</span>
        <span className="weather-loc">📍 CURRENT LOCATION</span>
      </div>
      <div className="weather-badge-main">
        <div className="weather-temp-group">
          <span className="weather-icon">{info.icon}</span>
          <span className="weather-temp">{Math.round(weather.temperature)}°C</span>
        </div>
        <div className="weather-details">
          <span className="weather-status">{info.text}</span>
          <span className="weather-wind">💨 বাতাস: {weather.windspeed} km/h</span>
        </div>
      </div>
      <div className="weather-advice-tag">{info.advice}</div>
    </div>
  );
}

export default WeatherCard;