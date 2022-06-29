import React, { useState, useEffect } from "react";
import MatchService from "../../graphql";
import MatchSeries from "../MatchSeries/MatchSeries";
import "./CricketApp.css";
import { NavLink, Outlet } from "react-router-dom";

function CricketApp() {
  const [matchData, setMatchData] = useState([]);
  const [matchStatus, setMatchStatus] = useState("upcoming");
  const [matchType, setMatchType] = useState("ALL");

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
  }, [matchStatus, matchType]);

  console.log(matchData);
  return (
    <>
      <nav className="matchStatusNav">
        <NavLink
          to="/upcoming-matches"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          onClick={() => setMatchStatus("upcoming")}
        >
          Upcoming
        </NavLink>
        <NavLink to="/live-matches" onClick={() => setMatchStatus("live")}>
          Live
        </NavLink>
        <NavLink to="/results" onClick={() => setMatchStatus("completed")}>
          Results
        </NavLink>
        <Outlet />
      </nav>

      <nav className="matchTypes">
        <NavLink
          to=""
          //className={({ isActive }) => (isActive ? "matchType" : "inactive")}
          className="matchType"
          onClick={() => setMatchType("ALL")}
        >
          All
        </NavLink>
        <NavLink
          to="international"
          className="matchType"
          onClick={() => setMatchType("international")}
        >
          International
        </NavLink>
        <NavLink
          to="domestic"
          className="matchType"
          onClick={() => setMatchType("domestic")}
        >
          Domestic
        </NavLink>
      </nav>
      {matchData.map((matchData, index) => {
        return <MatchSeries matchData={matchData} key={index} />;
      })}
      <Outlet />
    </>
  );
}

export default CricketApp;
