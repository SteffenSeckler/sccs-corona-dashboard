export default class StatisticsRenderer {
  constructor() {
    this.pane = document.getElementsByClassName("statisticsDiv")[0];
  }
  render(simulation) {
    // TODO:
    // * render the statistics properly!
    // Note:
    // * also has to save the statistics it needs!
    // Note: Use the following methods:
    // * Simulation.getPersons() which returns a list of Persons.
    // * Person.getState() to get the number of infected/dead/healthy people.
    //
    // Note:
    // * It is best to use sth. like plotly for plotting the data.
    // * You can add additional dependencies in package.json
    this.pane.innerHTML = "Simstep: " + simulation.getSimStep();
  }
}
