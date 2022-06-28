import React from "react";
import MatchSeries from "../MatchSeries/MatchSeries";
import "./StatusFilter.css";

function StatusFilter() {
  return (
    <>
      <nav className="flex justify-around text-white">
        <a href="#"> Upcoming</a>
        <a href="#"> Live</a>
        <a href="#"> Results </a>
      </nav>
      <MatchSeries />
    </>
  );
}

export default StatusFilter;
