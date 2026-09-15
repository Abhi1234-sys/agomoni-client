import React, { useState, useEffect } from 'react';

const WeatherCard = ({ lat, lon, pandalName }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    // ল্যাটিটিউড/লংগিটিউড না থাকলে ডিফল্ট বাঁকুড়ার কোঅর্ডিনেট ব্যবহার হবে
    const finalLat = lat || 23.2313;
    const finalLon = lon || 87.0784;

    if (apiKey) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${finalLat}&lon=${finalLon}&appid=${apiKey}&units=metric`
      )
        .then((res) => res.json())
        .then((data) => {
          setWeather(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Weather error:", err);
          setLoading(false);
        });
    }
  }, [lat, lon]);

  if (loading) return <div className="weather-loading">🌤️ Weather checking...</div>;
  if (!weather || !weather.weather) return null;

  const temp = Math.round(weather.main.temp);
  const feelsLike = Math.round(weather.main.feels_like);
  const condition = weather.weather[0].main;
  const description = weather.weather[0].description;
  const icon = weather.weather[0].icon;


  const getTip = (cond) => {
    if (cond.includes('Rain')) return '☔ ছাতা সাথে রাখুন!';
    if (cond.includes('Clear')) return '✨ প্যান্ডেল ঘোরার একদম সেরা আবহাওয়া!';
    if (cond.includes('Clouds')) return '☁️ আবহাওয়া মনোরম, চমৎকার প্যান্ডেল হপিং হবে!';
    return '🎉 শুভ দুর্গোৎসব!';
  };

  return (
    <div className="pandal-weather-card">
      <div className="weather-top">
        <span className="weather-loc">📍 Live Weather</span>
        <span className="weather-tip-badge">{getTip(condition)}</span>
      </div>
      
      <div className="weather-content">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={condition}
          className="weather-img"
        />
        <div className="weather-details">
          <h3 className="weather-temp">{temp}°C</h3>
          <p className="weather-desc">Feels like {feelsLike}°C • {description}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;