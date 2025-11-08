import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function UserTimerApp() {
  //useState hooks
  const [userName, setUserName] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // useRef hook
  const timerRef = useRef(null);

  // useEffect hook to handle timer start/stop
  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    // Cleanup interval on component unmount
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  // Function to toggle timer
  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  // Function to reset timer
  const resetTimer = () => {
    clearInterval(timerRef.current);
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div className="app-container">
      <h1>⏱️ User Timer App</h1>

      <div className="input-section">
        <label htmlFor="username">Enter Your Name:</label>
        <input
          id="username"
          type="text"
          placeholder="e.g. ABC"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div className="timer-section">
        <h2>
          Hello, {userName || "Guest"}! <br />
          You have been here for <span>{seconds}</span> seconds.
        </h2>
      </div>

      <div className="button-group">
        <button onClick={toggleTimer} className={isRunning ? "stop-btn" : "start-btn"}>
          {isRunning ? "Stop Timer" : "Start Timer"}
        </button>
        <button onClick={resetTimer} className="reset-btn">
          Reset
        </button>
      </div>
    </div>
  );
}

export default UserTimerApp;
