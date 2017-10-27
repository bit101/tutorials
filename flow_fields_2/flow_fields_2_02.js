var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

noise.seed(Math.random());
var z = 0;
render();

function render() {
  context.clearRect(0, 0, width, height);
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
  z += 0.01;
  requestAnimationFrame(render);
}

function getValue(x, y) {
  var scale = 0.01;
  return noise.perlin3(x * scale, y * scale, z) * Math.PI * 2;
}

