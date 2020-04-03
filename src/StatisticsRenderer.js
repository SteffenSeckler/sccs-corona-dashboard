export default class StatisticsRenderer {
  constructor() {
    this.pane = document.getElementsByClassName("statisticsDiv")[0];
  }
  render(simulation) {
    this.pane.innerHTML = "Simstep: " + simulation.getSimStep();
  }
}
