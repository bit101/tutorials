var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

noise.seed(Math.random());
render();

function render() {
  var res = 10;
  for(var x = 0; x < width; x += res) {
    for(var y = 0; y < height; y += res) {
      var value = getValue(x, y);
      context.save();
      context.translate(x, y);
      context.rotate(value);
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(res * 1.5, 0);
      context.stroke();
      context.restore();
    }
  }
}

function getValue(x, y) {
  var scale = 0.008;
  return noise.perlin2(x * scale, y * scale) * Math.PI * 2;
}

