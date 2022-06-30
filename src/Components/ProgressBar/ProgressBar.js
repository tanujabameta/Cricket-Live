import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ homeProgress, awayProgress }) => {
  return (
    <div className="progressBar">
      <div className="homeProgress" style={{ width: `${homeProgress}%` }} />
      <div className="awayProgress" style={{ width: `${awayProgress}%` }} />
    </div>
  );
};

export default ProgressBar;
