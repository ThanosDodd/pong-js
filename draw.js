const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const scale = 10;

var ball;
var paddle;
var startOver = true;

function tryAgain() {
  startOver = true;
  document.querySelector(".button-restart").hidden = true;
}

function startGame() {
  document.querySelector(".button").hidden = true;
  document.querySelector(".button-restart").hidden = true;

  (function setup() {
    ball = new Ball();
    paddle = new Paddle();

    if (document.querySelector(".button").hidden) {
      window.setInterval(() => {
        if (startOver) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ball.update();
          ball.draw();
          paddle.draw();

          ball.checkCollision();

          document.querySelector(".score").innerText = ball.score;
          document.querySelector(".maxScore").innerText =
            "Current Max: " + ball.maxScore;
          document.querySelector(".speedCoef").innerText =
            "Speed: " + Math.abs(ball.xSpeed);
        }
      }, 100);
    }
  })();
}

window.addEventListener("mousemove", (evt) => {
  paddle.changeDirection(evt.clientY);
});
