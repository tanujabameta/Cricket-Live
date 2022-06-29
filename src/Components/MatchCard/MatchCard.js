import React from "react";
import "./MatchCard.css";
import { getFlagEmoji, changeDateFormat } from "../utils";
import ProgressBar from "../ProgressBar/ProgressBar";

function MatchCard({ match }) {
  let awayTeam = match?.awayTeamName;
  let homeTeam = match?.homeTeamName;
  let date = changeDateFormat(match.matchdate);
  return (
    <div className="matchCard">
      <div className="text-sm p-2"> {match.venue} &#9971; </div>
      <div className="bg-black p-3 rounded text-center space-x-6">
        <span>
          {getFlagEmoji(homeTeam.substring(0, homeTeam.length - 1))} {homeTeam}
        </span>
        <span className="text">{match.matchType}</span>
        <span>
          {getFlagEmoji(awayTeam.substring(0, awayTeam.length - 1))} {awayTeam}
        </span>
      </div>
      <div className="matchDate">{date}</div>
      <div className="relative">Win Percentage</div>
      <div className="mr-7">
        <ProgressBar
          className="w-10 absolute top-0"
          win={match?.teamsWinProbability?.homeTeamPercentage}
          lose={match?.teamsWinProbability?.awayTeamPercentage}
          height={7}
        />
        <span className="text-xs text-left ml-2">
          {homeTeam}
          {match?.teamsWinProbability?.homeTeamPercentage}%
        </span>
        <span className="text-xs float-right">
          {awayTeam}
          {match?.teamsWinProbability?.awayTeamPercentage}%
        </span>
      </div>
    </div>
  );
}

export default MatchCard;
