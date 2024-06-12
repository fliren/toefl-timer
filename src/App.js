import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './nav';
import Hint, { timeSettings } from './hint';

function App() {
  const [inputTime, setInputTime] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [currentSettings, setCurrentSettings] = useState(null);

  useEffect(() => {
    let interval = null;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (time === 0 && isRunning) {
      clearInterval(interval);
      setIsRunning(false);
      alert('倒數計時結束');
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const handleStartStop = () => {
    if (!isRunning && time === 0 && currentSettings) {
      setTime(currentSettings.time);
    }
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const handleInputChange = (e) => {
    setInputTime(Number(e.target.value));
  };

  const setPresetTime = (presetKey) => {
    const settings = timeSettings[presetKey];
    if (settings) {
      setCurrentSettings(settings);
      setIsRunning(false);
      setTime(settings.time);
      setInputTime(settings.time);
    } else {
      console.error(`No settings found for presetKey: ${presetKey}`);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Nav setPresetTime={setPresetTime} />
        <h1>倒數計時器</h1>
        <div className="timer">
          <span>{Math.floor(time / 3600).toString().padStart(2, '0')}:</span>
          <span>{Math.floor((time % 3600) / 60).toString().padStart(2, '0')}:</span>
          <span>{(time % 60).toString().padStart(2, '0')}</span>
        </div>
        <Hint time={time} settings={currentSettings} />
        <div className="input-container">
          <input
            type="number"
            value={inputTime}
            onChange={handleInputChange}
            disabled={isRunning}
            placeholder="設置時間（秒）"
          />
        </div>
        <div className="buttons">
          <button onClick={handleStartStop}>
            {isRunning ? '停止' : time === 0 ? '開始' : '繼續'}
          </button>
          <button onClick={handleReset}>重置</button>
        </div>
      </header>
    </div>
  );
}

export default App;
