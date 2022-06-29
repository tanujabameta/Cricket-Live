import React from "react";
import './MatchCard.css'

function MatchCard({ match }) {
  return (
    <div className="matchCard">
      {match.matchdate}
      <div>India vs Pakistan</div>
      <div>Day</div>
    </div>
  );
}

export default MatchCard;
