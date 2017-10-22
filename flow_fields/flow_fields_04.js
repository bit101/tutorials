var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

var count = 50000;
context.lineWidth = 0.25;

for(var i = 0; i < count; i++) {
  var x = Math.random() * width,
      y = Math.random() * height;

  var value = getValue(x, y);

  context.save();
  context.translate(x, y);

  render(value);

  context.restore();
}

function getValue(x, y) {
  return (Math.sin(x * 0.01) + Math.sin(y * 0.01)) * Math.PI * 2;
}

function render(value) {
  context.rotate(value);
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(Math.random() * 30 + 30, 1);
  context.stroke();
}
