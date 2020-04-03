//import React from "react";
import "./styles.css";

export const state = {
  HEALTHY: "healty",
  INFECTED: "infected",
  HEALED: "healed",
  DEAD: "dead"
};

export class Person {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.state = state.HEALTY;
  }
  getX() {
    return this.x;
  }
  getState() {
    return this.state;
  }
}

export class Simulation {
  constructor(numberOfPersons) {
    this.numberOfPersons = numberOfPersons;
    this.generatePeople(this.numberOfPersons);
  }
  generatePeople(numberOfPersons) {
    this.people = [];
    // TODO: generate the people with random positions between 0 and 1!
    this.people.push(new Person());
  }
  getPeople() {
    return this.people;
  }
}
