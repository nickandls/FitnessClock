// Styling
import "../style/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Icons
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

//Components
import React, { useState } from "react";
import Break from "./Break";
import Session from "./Session";
import Counter from "./Counter";

// Variables
var time;
var pause = false;
var start = false;
var nextPhase = false;

export default function App() {
  var [timeLeft, setTimeLeft] = useState("25:00");
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [counterTitle, setCounterTitle] = useState("Session");

  function handleReset() {
    pause = false;
    start = false;
    setCounterTitle("Session");
    setTimeLeft("25:00");
    setBreakTime(5);
    setSessionTime(25);
  }

  function handleStart() {
    pause = true;
    if (!start) {
      start = true;
      countdown();
    }
  }
  function handlePause() {
    pause = false;
  }

  function countdown() {
    console.log("time left " + timeLeft);
    var timer = parseInt(timeLeft, 10) * 60,
      minutes,
      seconds;
    console.log(timer);
    var counter = setInterval(down, 1000);
    function down() {
      if (pause) {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        setTimeLeft(minutes + ":" + seconds);

        if (--timer <= 0) {
          nextPhase = !nextPhase;
          console.log(nextPhase);

          var audio = new Audio(
            "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
          );

          audio.play();
          console.log(counterTitle);

          if (nextPhase) {
            setCounterTitle("Break");
            timeLeft = breakTime.toString() + ":00";
            setTimeLeft(breakTime.toString() + ":00");
          } else {
            setCounterTitle("Session");
            timeLeft = sessionTime.toString() + ":00";
            setTimeLeft(sessionTime.toString() + ":00");
          }
          console.log(timeLeft);
          clearInterval(counter);
          setTimeout(countdown, 1000);
        }
      }
    }
  }

  function handleBreak(event) {
    const action = event.target.getAttribute("value");
    if (action === "add") {
      if (breakTime < 60 && breakTime >= 0) {
        time = parseInt(breakTime, 10) + 1;
      } else {
        time = breakTime;
      }
    } else {
      if (breakTime < 60 && breakTime > 0) {
        time = parseInt(breakTime, 10) - 1;
      } else {
        time = breakTime;
      }
    }
    setBreakTime(time.toString());
  }

  function handleSession(event) {
    const action = event.target.getAttribute("value");
    setCounterTitle("Session");
    if (action === "add") {
      if (sessionTime < 60 && sessionTime >= 0) {
        time = parseInt(sessionTime, 10) + 1;
      } else {
        time = sessionTime;
      }
    } else {
      if (sessionTime < 60 && sessionTime > 0) {
        time = parseInt(sessionTime, 10) - 1;
      } else {
        time = sessionTime;
      }
    }
    setSessionTime(time);
    setTimeLeft(time.toString() + ":00");
  }

  return (
    <div className="App">
      <h1>Fitness Clock</h1>
      <div className="row">
        <div className="col-sm-6">
          <Break break={breakTime} click={handleBreak} />
        </div>
        <div className="col-sm-6">
          <Session session={sessionTime} click={handleSession} />
        </div>
      </div>
      <Counter time={timeLeft} title={counterTitle} />
      <PlayArrowIcon
        className="actionBtn play"
        id="start_stop"
        onClick={handleStart}
      />
      <PauseIcon
        className="actionBtn pause"
        id="start_stop"
        onClick={handlePause}
      />
      <RestartAltIcon
        className="actionBtn reset"
        id="reset"
        onClick={handleReset}
      />
    </div>
  );
}
