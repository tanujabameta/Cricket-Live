import React, { useState, useEffect } from "react";
import MatchService from "../../graphql";
import MatchSeries from "../MatchSeries/MatchSeries";
import "./CricketApp.css";

function CricketApp() {
  const [matchData, setMatchData] = useState([]);
  const [matchStatus, setMatchStatus] = useState("upcoming");
  const [matchType] = useState("ALL");

  const loadMatchData = async () => {
    const matchData = await MatchService.getCricketMatches(
      matchType,
      matchStatus,
      1
    );
    setMatchData(matchData);
  };

  useEffect(() => {
    loadMatchData();
  }, [matchStatus]);

  console.log(matchData);
  return (
    <>
      <nav className="matchStatusNav">
        <a
          href="/upcoming-matches"
          onClick={(e) => {
            e.preventDefault();
            setMatchStatus("upcoming");
          }}
          className="matchStatus"
        >
          Upcoming
        </a>
        <a
          href="/live-matches"
          className="matchStatus"
          onClick={(e) => {
            e.preventDefault();
            setMatchStatus("live");
          }}
        >
          Live
        </a>
        <a
          href="/results"
          className="matchStatus"
          onClick={(e) => {
            e.preventDefault();
            setMatchStatus("completed");
          }}
        >
          Results
        </a>
      </nav>
      <ul className="matchTypes">
        <li className="matchType">All</li>
        <li className="matchType">International</li>
        <li className="matchType">Domestic</li>
      </ul>
      {matchData.map((matchData, index) => {
        return <MatchSeries matchData={matchData} key={index} />;
      })}
    </>
  );
}

export default CricketApp;
