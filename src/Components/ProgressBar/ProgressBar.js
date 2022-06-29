import React from "react";

const Progress_bar = ({ win, lose, height }) => {
  const Parentdiv = {
    height: height,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 40,
    margin: 10,
  };

  const Childdiv = {
    height: "100%",
    width: `${win}%`,
    backgroundColor: "green",
    borderRadius: 40,
    textAlign: "left",
  };

  const loseChile = {
    height: "100%",
    width: `${lose}%`,
    backgroundColor: "red",
    borderRadius: 40,
    textAlign: "right",
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv} />
      <div style={loseChile} />
    </div>
  );
};

export default Progress_bar;
