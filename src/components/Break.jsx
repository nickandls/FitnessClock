import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function Break(props) {
  return (
    <div id="break-label">
      <h2>Break Length</h2>
      <div className="timeManagement">
        <ArrowDownwardIcon value="subtrack" onClick={props.click} />
        <h4>{props.break}</h4>
        <ArrowUpwardIcon value="add" onClick={props.click} />
      </div>
    </div>
  );
}
