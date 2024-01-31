import Game from "/src/game.js";
const canvas = document.querySelector("#gameScreen");
const c = canvas.getContext("2d");
let GAME_WIDTH = window.innerWidth;
let GAME_HEIGHT = window.innerHeight;

let game = new Game(GAME_WIDTH,GAME_HEIGHT);
let lastTime = 0;
function gameLoop(timestamp) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let deltaTime = timestamp-lastTime;
  lastTime = timestamp;
  c.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
  game.gameWidth = canvas.width;
  game.gameHeight = canvas.height;
  game.update(deltaTime);
  game.draw(c);
  requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);