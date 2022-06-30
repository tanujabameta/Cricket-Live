import React from "react";
import "./MatchCard.css";
import { getFlagEmoji, changeDateFormat } from "../utils";
import ProgressBar from "../ProgressBar/ProgressBar";

function MatchCard({ match }) {
  let awayTeam = match?.awayTeamName;
  let homeTeam = match?.homeTeamName;
  let date = changeDateFormat(match.matchdate);

  const calculateProbablity = (percentage) => {
    if (percentage === "") return false;
    else {
      return `${percentage}`;
    }
  };

  let homeTeamWinProbablity = calculateProbablity(
    match.teamsWinProbability.homeTeamPercentage
  );
  let awayTeamWinProbablity = calculateProbablity(
    match.teamsWinProbability.awayTeamPercentage
  );

  return (
    <div className="matchCard">
      <div className="text-sm p-2">
        {match.venue} &#9971;
        <span className="uppercase text-xs float-right">
          {match.matchStatus}
        </span>
      </div>
      <div className="flag">
        <span>
          {getFlagEmoji(homeTeam.substring(0, homeTeam.length - 1))} {homeTeam}
        </span>
        <span className="text">{match.matchType}</span>
        <span>
          {getFlagEmoji(awayTeam.substring(0, awayTeam.length - 1))} {awayTeam}
        </span>
      </div>
      <div className="matchDate">
        {date === "Invalid date" ? match.matchdate : date}
      </div>
      {match.matchStatus === "completed" ? (
        <div className="text-center bg-brown rounded-lg p-1">
          {match.matchResult}
        </div>
      ) : homeTeamWinProbablity ? (
        <>
          <div className="relative ml-2">Win Percentage</div>
          <div className="mr-7">
            <ProgressBar
              className="cardProgessBar"
              homeProgress={homeTeamWinProbablity}
              awayProgress={awayTeamWinProbablity}
            />
            <span className="homeTeamProb">
              {homeTeam}
              {homeTeamWinProbablity}%
            </span>
            <span className="awayTeamProb">
              {awayTeam}
              {awayTeamWinProbablity}%
            </span>
          </div>
        </>
      ) : (
        <span>Win Projections to be updated soon</span>
      )}
    </div>
  );
}

export default MatchCard;
