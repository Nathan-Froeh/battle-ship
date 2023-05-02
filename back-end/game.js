var {Player} = require('./player.js');
var {ships} = require('./ships.js');


class Game {
  player;
  bot;

  constructor() {
    this.player = new Player();
    this.bot = new Player();
  }

  test() {
    this.bot.placeShip(ships[0])
  }
};

module.exports = {Game}