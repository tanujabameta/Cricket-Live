import React from "react";
import MatchCard from "../MatchCard/MatchCard";
import "./MatchSeries.css";

function MatchSeries({ matchData }) {
  return (
    <div>
      <div className="matchSeries">
        <span className="league">
          {matchData.league.substring(0, 3).toUpperCase()}
        </span>
        {matchData.seriesName}
        <span className="float-right">&rarr;</span>
      </div>
      <div className="flex overflow-x-scroll">
        {matchData.matches.map((match, index) => {
          return (
            <span key={index} className="min-w-[80%]">
              <MatchCard match={match} />
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default MatchSeries;
