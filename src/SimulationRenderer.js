export default class SimulationRenderer {
  constructor() {
    this.pane = document.getElementsByClassName("simulationDiv")[0];
  }
  render(simulation) {
    this.pane.innerHTML = "Simstep: " + simulation.getSimStep();
  }
}
