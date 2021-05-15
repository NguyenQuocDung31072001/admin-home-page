import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RouteApp from "./page/route";
function App() {
  return (
    <div className="App">
      <Router>
        <RouteApp />
      </Router>
    </div>
  );
}
export default App;
