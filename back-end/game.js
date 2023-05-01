import { Player } from "./player";


export class Game {
  player;
  bot;

  constructor() {
    this.player = new Player();
    this.bot = new Player();
  }
};
