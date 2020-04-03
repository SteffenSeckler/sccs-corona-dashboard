import Simulation from "./Simulation";
import SimulationRenderer from "./SimulationRenderer";
import StatisticsRenderer from "./StatisticsRenderer";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// TODO:
// * potentially add sth. like start/stop mechanics.
// * more parameters (see App.js)
export default async function mainLoop() {
  document.getElementById("mainButton").disabled = true;
  var simulation = new Simulation(100);
  var simRenderer = new SimulationRenderer();
  var statRenderer = new StatisticsRenderer();
  while (!simulation.isFinished()) {
    simulation.advance();
    simRenderer.render(simulation);
    statRenderer.render(simulation);
    // TODO:
    // * change this accoring to the simulation speed.
    await sleep(50);
  }
  document.getElementById("mainButton").disabled = false;
}
