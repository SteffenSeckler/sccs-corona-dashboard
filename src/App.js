import React from "react";
import "./styles.css";
import SplitPane from "react-split-pane";
import mainLoop from "./MainLoop.js";

// TODO:
// * eventually add additional setting possibilities to settingsDiv.
// Possible settings:
// * people movement
// * infection radius
// * times until healthy
// * time until dead
// * death rate
// * ...
export default function App() {
  return (
    <div className="App">
      <SplitPane split="horizontal" defaultSize={150} allowResize={false}>
        <div className="settingsDiv">
          <h1>SCCS Corona Dashboard</h1>
          <button id={"mainButton"} onClick={mainLoop}>
            Start Simulation
          </button>
        </div>
        <SplitPane
          split="vertical"
          minSize={100}
          maxSize={-100}
          defaultSize={"50%"}
        >
          <div className="simulationDiv" />
          <div className="statisticsDiv" />
        </SplitPane>
      </SplitPane>
    </div>
  );
}
