var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

context.lineWidth = 0.1;

var z = 0;
noise.seed(Math.random());
render();

function render() {
  context.clearRect(0, 0, width, height);
  for(var y = 0; y < height; y += 5) {
    var p = {
      x: width / 2,
      y: y, 
      vx: 0,
      vy: 0
    };
    context.beginPath();
    context.moveTo(p.x, p.y);

    for(var i = 0; i < 500; i++) {
      var value = getValue(p.x, p.y);
      p.vx += Math.cos(value) * 0.1;
      p.vy += Math.sin(value) * 0.1;
      p.x += p.vx;
      p.y += p.vy;
      context.lineTo(p.x, p.y);

      p.vx *= 0.99;
      p.vy *= 0.99;
    }
    context.stroke();
  }
  z += 0.0005;
  requestAnimationFrame(render);
}

function getValue(x, y) {
  var scale = 0.005;
  return noise.perlin3(x * scale, y * scale, z) * Math.PI * 2;
}

