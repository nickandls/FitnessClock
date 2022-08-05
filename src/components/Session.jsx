import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function Session(props) {
  return (
    <div id="session-label">
      <h2>Session Length</h2>
      <div className="timeManagement">
        <ArrowDownwardIcon value="subtrack" onClick={props.click} />
        <h4>{props.session}</h4>
        <ArrowUpwardIcon value="add" onClick={props.click} />
      </div>
    </div>
  );
}
