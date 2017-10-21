var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

var count = 20000;

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
  return (x + y) * 0.001 * Math.PI * 2;
}

function render(value) {
  context.rotate(value);
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(20, 1);
  context.stroke();
}
