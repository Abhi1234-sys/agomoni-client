import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    // দুর্গাপূজার তারিখ (প্রয়োজন মতো পরিবর্তন করতে পারেন)
const targetDate = new Date("2026-10-16T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="royal-time">
      <div className="royal-time-unit">
        <strong>{String(timeLeft.days).padStart(2, "0")}</strong>
        <span>DAYS</span>
      </div>

      <div className="royal-separator">✦</div>

      <div className="royal-time-unit">
        <strong>{String(timeLeft.hours).padStart(2, "0")}</strong>
        <span>HOURS</span>
      </div>

      <div className="royal-separator">✦</div>

      <div className="royal-time-unit">
        <strong>{String(timeLeft.minutes).padStart(2, "0")}</strong>
        <span>MINUTES</span>
      </div>

      <div className="royal-separator">✦</div>

      <div className="royal-time-unit">
        <strong>{String(timeLeft.seconds).padStart(2, "0")}</strong>
        <span>SECONDS</span>
      </div>
    </div>
  );
};

export default CountdownTimer;