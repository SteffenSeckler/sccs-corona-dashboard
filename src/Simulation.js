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
  getY() {
    return this.x;
  }
  getState() {
    return this.state;
  }
}

export default class Simulation {
  constructor(numberOfPersons) {
    this.numberOfPersons = numberOfPersons;
    this.generatePeople(this.numberOfPersons);
    this.simStep = 0;
  }

  generatePeople(numberOfPersons) {
    this.people = [];
    // TODO: generate numberOfPersons people with random positions between 0 and 1!
    this.people.push(new Person(0.4, 0.2));
    this.people.push(new Person(0.8, 0.8));
  }

  getPeople() {
    return this.people;
  }

  getRunning() {
    return true;
  }

  getSimStep() {
    return this.simStep;
  }

  isFinished() {
    return this.simStep >= 100;
  }

  advance() {
    // TODO:
    this.simStep += 1;
  }
}
