import React, { useState, useEffect } from "react";
import MatchService from "../../graphql";
import MatchSeries from "../MatchSeries/MatchSeries";
import "./CricketApp.css";
import { Link, NavLink, Outlet } from "react-router-dom";

function CricketApp() {
  const [matchData, setMatchData] = useState([]);
  const [matchStatus, setMatchStatus] = useState("upcoming");
  const [matchType, setMatchType] = useState("ALL");
  const [loading, setLoading] = useState(true);
  const [hasMoreMatches, setHasMoreMatches] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const loadMatchDataFilter = async () => {
    const matchData = await MatchService.getCricketMatches(
      matchType,
      matchStatus,
      pageNumber
    );
    setMatchData(matchData);
    setLoading(false);
    setHasMoreMatches(() => matchData.length > 0);
  };

  const loadMatchDataPageChange = async () => {
    const matchData = await MatchService.getCricketMatches(
      matchType,
      matchStatus,
      pageNumber
    );
    setMatchData((prevState) => [...prevState, ...matchData]);
    setLoading(false);
    setHasMoreMatches(() => matchData.length > 0);
  };

  useEffect(() => {
    loadMatchDataFilter();
  }, [matchStatus, matchType]);

  useEffect(() => {
    loadMatchDataPageChange();
  }, [pageNumber]);

  const scrollToEnd = () => {
    setHasMoreMatches(() => matchData.length > 0);
    hasMoreMatches && setPageNumber(pageNumber + 1);
  };

  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };

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

      <div className="matchTypes">
        <button className={matchType === 'ALL' ? 'matchType active': 'matchType'}>
          <Link to="./" onClick={() => setMatchType("ALL")}>
            All
          </Link>
        </button>
        <button className={matchType === 'international' ? 'matchType active': 'matchType'}>
          <Link
            to="international"
            onClick={() => setMatchType("international")}
          >
            Internatioal
          </Link>
        </button>
        <button className={matchType === 'domestic' ? 'matchType active': 'matchType'}>
          <Link to="domestic" onClick={() => setMatchType("domestic")}>
            Domestic
          </Link>
        </button>
      </div>
      {matchData.map((matchData, index) => {
        return <MatchSeries matchData={matchData} key={index} />;
      })}
      <Outlet />
      {loading && (
        <div className="loader">
          <span></span>
          <span></span>
        </div>
      )}
    </>
  );
}

export default CricketApp;
