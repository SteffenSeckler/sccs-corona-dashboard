import React from "react";
import "./styles.css";
import SplitPane from "react-split-pane";

export default function App() {
  return (
    <div className="App">
      <SplitPane split="horizontal" defaultSize={150} allowResize={false}>
        <div className="settingsPane">
          <h1>SCCS Corona Dashboard</h1>
          <button>Start Simulation</button>
        </div>
        <SplitPane split="vertical" minSize={50} defaultSize={"50%"}>
          <div className="simulationPane" />
          <div className="statisticsPane" />
        </SplitPane>
      </SplitPane>
    </div>
  );
}
