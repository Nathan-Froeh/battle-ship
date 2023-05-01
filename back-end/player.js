
import { initialGrid } from "./grid";

export class Player {
  grid;
  constructor() {
    this.grid = initialGrid;
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  getRowOrColumn() {
    return this.getRandomInt(9);
  }

  getDirection() {
    const randomInt = this.getRandomInt(3);
    if(randomInt === 0) return "UP"
    if(randomInt === 1) return "RIGHT"
    if(randomInt === 2) return "DOWN"
    if(randomInt === 3) return "LEFT"
  }

  generateGrid() {
    const row = this.getRowOrColumn();
    const column = this.getRowOrColumn();

    if(grid[row][column] === false) {
      row();
      column();
    }
    const direction = this.getDirection();

    switch (direction) {
      // check there are enough spaces before loop
      // loop through each to check if available
      case "UP":

        break;
      case "RIGHT":

        break;
      case "DOWN":

        break;
      case "LEFT":

        break;
    }

  }

};
