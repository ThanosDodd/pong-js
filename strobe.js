var text1 = document.body.style.backgroundColor;
var boolean_value1 = true;
var interval;

function strobe() {
  document.body.style.backgroundColor = boolean_value1
    ? getRandomColor()
    : getRandomColor();
  boolean_value1 = !boolean_value1;
}

function start_strobe() {
  interval = window.setInterval(strobe, 70);
}

function stop_strobe() {
  window.clearInterval(interval);
  document.body.style.backgroundColor = text1;
}

function getRandomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  var hexR = r.toString(16);
  var hexG = g.toString(16);
  var hexB = b.toString(16);

  if (hexR.length == 1) {
    hexR = "0" + hexR;
  }

  if (hexG.length == 1) {
    hexG = "0" + hexG;
  }

  if (hexB.length == 1) {
    hexB = "0" + hexB;
  }

  var hexColor = "#" + hexR + hexG + hexB;
  return hexColor.toUpperCase();
}
