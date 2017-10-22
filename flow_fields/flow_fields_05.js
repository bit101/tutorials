var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

context.lineWidth = 0.5;

// create point
var p = {
  x: Math.random() * width,
  y: Math.random() * height,
  vx: 0,
  vy: 0
};

render();

function render() {
  // calculate new acceleration factor based on value direction
  // and add that to point's velocity
  var value = getValue(p.x, p.y);
  p.vx += Math.cos(value) * 0.8;
  p.vy += Math.sin(value) * 0.8;

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

  // call this function again in one frame tick
  requestAnimationFrame(render);
}

function getValue(x, y) {
  return (x + y) * 0.001 * Math.PI * 2;
  return (Math.sin(x * 0.01) + Math.sin(y * 0.0001)) * Math.PI * 2;
}

