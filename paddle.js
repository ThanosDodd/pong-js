function Paddle() {
  this.x = canvas.width - scale;
  this.y = 0;
  this.paddleSize = 7;

  this.draw = function () {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, scale, scale * this.paddleSize);
  };

  this.changeDirection = function (loc) {
    this.y = Math.round(loc / scale) * scale;
  };
}
