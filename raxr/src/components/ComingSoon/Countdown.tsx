"use client";

import React, { useState, useEffect } from "react";

interface CountdownProps {
  endDate: string; // Format: "Month Day, Year HH:mm:ss"
}

const Countdown: React.FC<CountdownProps> = ({ endDate }) => {
  const calculateTimeLeft = () => {
    const endDateTime = new Date("August 23, 2025 17:00:00 PDT").getTime();
    const now = new Date().getTime();
    const timeRemaining = endDateTime - now;

    if (timeRemaining > 0) {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    } else {
      setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  return (
    <>
      <div className="coming-soon-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="coming-soon-content">
                <h1>Our website is coming soon</h1>
                <p>
                  Our website is currently undergoing scheduled maintenance. We
                  Should be back shortly. Thank you for your patience.
                </p>

                <form onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="email-input"
                    placeholder="Enter your email"
                  />
                  <button type="submit" className="submit-btn">
                    Submit
                  </button>
                </form>

                <div id="timer">
                  <div id="days">
                    {countdown.days} <span className="days">Days</span>
                  </div>
                  <div id="hours">
                    {countdown.hours} <span className="hours">Hours</span>
                  </div>
                  <div id="minutes">
                    {countdown.minutes} <span className="minutes">Minutes</span>
                  </div>
                  <div id="seconds">
                    {countdown.seconds} <span className="seconds">Seconds</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className="social-list">
          <li className="list-heading">Follow us for update:</li>
          <li>
            <a
              href="https://www.facebook.com/"
              className="facebook"
              target="_blank"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/" className="twitter" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              className="linkedin"
              target="_blank"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              className="instagram"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Countdown;
