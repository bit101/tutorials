var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

context.lineWidth = 0.1;

// create points. each aligned to left edge of screen,
// spread out top to bottom.
var points = [];
for(var y = 0; y < height; y += 5) {
  points.push({
    x: 0,
    y: y, 
    vx: 0,
    vy: 0
  })
};

noise.seed(Math.random());
render();

function render() {
  for(var i = 0; i < points.length; i++) {
    // get each point and do what we did before with a single point
    var p = points[i];
    var value = getValue(p.x, p.y);
    p.vx += Math.cos(value) * 0.1;
    p.vy += Math.sin(value) * 0.1;

    // move to current position
    context.beginPath();
    context.moveTo(p.x, p.y);

    // add velocity to position and line to new position
    p.x += p.vx;
    p.y += p.vy;
    context.lineTo(p.x, p.y);
    context.stroke();

    // apply some friction so point doesn't speed up too much
    p.vx *= 0.99;
    p.vy *= 0.99;

    // wrap around edges of screen
    if(p.x > width) p.x = 0;
    if(p.y > height) p.y = 0;
    if(p.x < 0) p.x = width;
    if(p.y < 0) p.y = height;
  }

  requestAnimationFrame(render);
}

function getValue(x, y) {
  var scale = 0.01;
  return noise.perlin2(x * scale, y * scale) * Math.PI * 2;
}

