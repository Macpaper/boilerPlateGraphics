//import Player from "/src/player.js";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.mouseY = 0;
    this.mouseX = 0;
    this.gameObjects = [];
    start(this);
  }
  update(deltaTime) {
    this.gameObjects.forEach(o => o.update(deltaTime)); 
  }
  draw(c) {
    this.gameObjects.forEach(o => o.draw(c));
  }
}
function start(game) {
  document.addEventListener("mousemove", e => {
    game.mouseX = e.clientX;
    game.mouseY = e.clientY;
    
  });
}
