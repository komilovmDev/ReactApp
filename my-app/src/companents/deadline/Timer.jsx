import React, { useEffect, useState } from "react";
import "./Timer.css";
import { VscDebugStart } from "react-icons/vsc";
import { BsPlayCircle } from "react-icons/bs";
import { AiOutlinePauseCircle } from "react-icons/ai";

export const Timer = () => {
  const [inputDate, setInputDate] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  let interval;

  useEffect(() => {
    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [seconds, isRunning]);

  const startTimer = () => {
    const parsedDate = Date.parse(inputDate);
    if (!isNaN(parsedDate)) {
      setIsRunning(true);
      setSeconds(Math.max(Math.floor((parsedDate - Date.now()) / 1000), 0));
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const starttimer = () => {
    setIsRunning(true);
  };

  const formatTime = (time) => {
    const days = Math.floor(time / (24 * 60 * 60));
    const hours = Math.floor((time % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((time % 3600) / 60);

    return `${days} д  , ${hours}h  ${minutes} m`;
  };

  return (
    <div className="timer">
      <label htmlFor="">
        <input
          type="datetime"
          value={inputDate}
          onChange={(e) => setInputDate(e.target.value)}
        />

      </label>
      <div className="Knopki">
        <div className="KnopkiButton">
          <button onClick={startTimer}>
            Boshlash
          </button>
          <button onClick={stopTimer}>
            Pause
          </button>
          <button onClick={starttimer}>
            Davom
          </button>
        </div>
        <div className="Den">
          <p>{formatTime(seconds)}</p>
        </div>
      </div>
      <div className="KnopkiRespons">

      </div>

    </div>
  );
};
