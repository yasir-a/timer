import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isCountRunning, setIsCountRunning] = useState(true);

  useEffect(() => {
    if (isCountRunning) {
      const id = window.setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
      return () => window.clearInterval(id);
    }
  }, [isCountRunning]);

  const stopCounter = () => {
    setIsCountRunning(false);
  };

  const startCounter = () => {
    setIsCountRunning(true);
  };

  const resetCounter = () => {
    setIsCountRunning(false);
    setCount(0);
  };
  return (
    <div className="App">
      <div className="clock-container">
        <div>{count}</div>
      </div>
      <div>
        <button disabled={isCountRunning} onClick={startCounter}>
          Start
        </button>
        <button onClick={stopCounter}>Stop</button>
        <button onClick={resetCounter}>Reset</button>
      </div>
    </div>
  );
}

export default App;
