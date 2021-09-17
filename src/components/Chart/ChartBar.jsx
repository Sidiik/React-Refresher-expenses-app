import React from "react";
import "./ChartBar.css";

function ChartBar(props) {
  let barHeight = "0%";
  if (props.maxValue > 0) {
    barHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chartbar-wrapper">
      <div className="chartbar-inner">
        <div className="chartbar-fill" style={{ height: barHeight }}></div>
      </div>
      <div className="lable">{props.label}</div>
    </div>
  );
}

export default ChartBar;
