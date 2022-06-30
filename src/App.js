import React from "react";
import "./App.css";
import CricketApp from "./Components/CricketApp/CricketApp";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1 className="title">Cricket Live</h1>
      <Router>
        <Routes>
          <Route
            path="*"
            element={<Navigate to="/upcoming-matches" replace />}
          />
          <Route path="upcoming-matches" element={<CricketApp />}>
            <Route path="international" />
            <Route path="domestic" />
          </Route>
          <Route path="live-matches" element={<CricketApp />}>
            <Route path="international" />
            <Route path="domestic" />
          </Route>
          <Route path="results" element={<CricketApp />}>
            <Route path="international" />
            <Route path="domestic" />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
