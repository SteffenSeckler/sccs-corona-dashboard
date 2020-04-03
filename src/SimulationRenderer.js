export default class SimulationRenderer {
  constructor() {
    this.pane = document.getElementsByClassName("simulationDiv")[0];
  }
  render(simulation) {
    // TODO:
    // * render the simulation!
    // Note: Use the following methods:
    // * Simulation.getPersons() which returns a list of Persons.
    // * Person.getX() and getY() which returns the x, resp. y, coordinate of a person.
    // * Person.getState() to change the appearance of infected/dead/healthy people.
    //
    // Note:
    // * It is best to use sth. like plotly for plotting the data.
    // * You can add additional dependencies in package.json
    this.pane.innerHTML = "Simstep: " + simulation.getSimStep();
  }
}
