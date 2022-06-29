import React from "react";
import "./App.css";
import CricketApp from "./Components/CricketApp/CricketApp";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1 className="title">Cricket Live</h1>
      <BrowserRouter>
        {/* <Route path="/"> */}
        <CricketApp />
        {/* </Route> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
