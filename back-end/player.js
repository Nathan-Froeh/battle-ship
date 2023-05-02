
var {initialGrid} = require('./grid.js');

class Player {
  grid;
  constructor() {
    console.log('grid', initialGrid)
    this.grid = initialGrid;
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  getRowOrColumn() {
    return 9
    return this.getRandomInt(9);
  }

  getDirection() {
    const randomInt = this.getRandomInt(3);
    if(randomInt === 0) return "UP"
    if(randomInt === 1) return "RIGHT"
    if(randomInt === 2) return "DOWN"
    if(randomInt === 3) return "LEFT"
  }

  placeShip(ship) {
    const startingRow = this.getRowOrColumn();
    const startingColumn = this.getRowOrColumn();
    // const startingRow = 9;
    // const startingColumn = 9;

    if(this.grid[startingRow][startingColumn] === null) {
      startingRow();
      startingColumn();
    }
    // const direction = this.getDirection();
    const direction = "UP";

    switch (direction) {
      // check there are enough spaces before loop
      // loop through each to check if available
      case "UP":
        let endingRow = (startingRow + 1) - ship.spaces.length;
        if(ship.spaces.length < startingRow + 1) return this.placeShip(ship);
        const openSpaces = grid.filter((row, index) => {
          if(index > startingRow && index < endingRow ) return false;
          if(row[startingColumn] === null) return true;
        })
        if(openSpaces.length === ship.spaces.length) {
          console.log(`ship ${ship.name} fits`)
        } else {
          console.log(`ship ${ship.name} does not fit`)
        }
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

module.exports = {Player}
