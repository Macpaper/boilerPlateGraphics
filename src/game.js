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
    c.fillStyle = "rgb(50, 50, 50)";
    c.fillRect(0, 0, this.gameWidth, this.gameHeight);
    this.gameObjects.forEach(o => o.draw(c));
  }
}
function start(game) {
  document.addEventListener("mousemove", e => {
    game.mouseX = e.clientX;
    game.mouseY = e.clientY;
  });
}
