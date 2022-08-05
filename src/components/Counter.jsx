import React from "react";

export default function Counter(props) {
  return (
    <div id="timer-label">
      <h3>{props.title}</h3>
      <input id="time-left" value={props.time} disabled />
    </div>
  );
}
