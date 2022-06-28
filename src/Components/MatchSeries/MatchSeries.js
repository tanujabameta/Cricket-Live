import React, { useState } from "react";
import Match from "../Match/Match";

function MatchSeries() {
  let [activeMatch, setActiveMatch] = useState(0);

  const prevMatch = () => {
    setActiveMatch(activeMatch - 1);
  };

  const nextMatch = () => {
    setActiveMatch(activeMatch + 1);
  };
  return (
    <>
      <div className="bg-lightblack text-white m-3 rounded text-left p-3">
        <span onClick={prevMatch}> &larr; </span> Match series
        <span className="float-right" onClick={nextMatch}>
          &rarr;
        </span>
      </div>
      <span className="flex">
        <Match />
        <Match />
      </span>
    </>
  );
}

export default MatchSeries;
