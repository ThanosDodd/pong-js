function Ball() {
  this.x = 0;
  this.y =
    scale * Math.floor((Math.random() * (canvas.height - scale)) / scale);
  this.xSpeed = scale;
  this.ySpeed = scale;
  this.score = 0;
  this.maxScore = 0;

  this.draw = function () {
    ctx.strokeStyle = "#3a4745";
    ctx.strokeRect(this.x, this.y, scale, scale);
    ctx.fillStyle = "#237ed3";
    ctx.fillRect(this.x, this.y, scale, scale);
  };

  this.update = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x > canvas.width - scale * 2) {
      var death = new Audio("public/death.mp3");
      death.play();
      start_strobe();
      setTimeout(function () {
        stop_strobe();
      }, 1000);
      document.querySelector(".button-restart").hidden = false;
      this.score = 0;
      this.x = scale;
      this.xSpeed = scale;
      this.ySpeed = scale;
      startOver = false;
    }
    if (this.x - scale < 0) {
      this.xSpeed = -this.xSpeed;
      var peep = new Audio("public/beep.mp3");
      peep.play();
    }
    if (this.y > canvas.height - 2 * scale) {
      this.ySpeed = -this.ySpeed;
      var peep = new Audio("public/beep.mp3");
      peep.play();
    }
    if (this.y - scale < 0) {
      this.ySpeed = -this.ySpeed;
      var peep = new Audio("public/beep.mp3");
      peep.play();
    }
  };

  this.checkCollision = function () {
    let checkPaddleLocation = [];
    for (let i = 0; i < paddle.paddleSize; i++) {
      checkPaddleLocation.push(paddle.y + scale * i);
    }

    if (
      this.x === canvas.width - scale * 2 &&
      checkPaddleLocation.some(
        (elem) => elem === Math.round(this.y / scale) * scale
      )
    ) {
      console.log(this.y, paddle.y);
      console.log("Collision");
      playRandom();
      this.xSpeed = -this.xSpeed - scale / 10;
      if (this.ySpeed > 0) {
        this.ySpeed += scale / 10;
      } else {
        this.ySpeed -= scale / 10;
      }
      this.score += 1;
      if (this.maxScore < this.score) {
        this.maxScore = this.score;
      }
    }
  };
}

function playRandom() {
  // in case more tracks get added
  // var chooseTrack = String(Math.floor(Math.random() * 6 + 1));
  var chooseTrack = "1";

  switch (chooseTrack) {
    case "1":
      var beep = new Audio("public/beep.mp3");
      beep.play();
      break;
  }
}
