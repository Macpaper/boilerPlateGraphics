import Game from "/src/game.js";
const canvas = document.querySelector("#gameScreen");
const c = canvas.getContext("2d");
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
let game = new Game(GAME_WIDTH,GAME_HEIGHT);
let lastTime = 0;
function gameLoop(timestamp) {
  let deltaTime = timestamp-lastTime;
  lastTime = timestamp;
  c.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
  game.update(deltaTime);
  game.draw(c);
  requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);