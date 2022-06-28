import React, { useEffect, useState } from "react";
import "./App.css";
import MatchService from "./graphql";
import StatusFilter from "./Components/StatusFilter/StatusFilter";

function App() {
  const [data, setData] = useState([]);

  const loadMatchData = async () => {
    const matchData = await MatchService.getCricketMatches("ALL", "upcoming", 1);
    setData(matchData);
  };

  useEffect(() => {
    loadMatchData();
  }, []);

  console.log(data);
  return (
    <div className="App dark dark:bg-black">
      <h1 className="text-2xl text-white font-sans m-6 mt-3">Cricket Live</h1>
      <StatusFilter/>
    </div>
  );
}

export default App;
