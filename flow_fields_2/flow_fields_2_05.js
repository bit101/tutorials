var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d");


var points;
var bitmap = Bitmap.create("cat.jpg", onComplete);
var force = 0.007;
var friction = 0.99;

function onComplete() {
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;
  context.drawImage(bitmap.image, 0, 0);
  points = [];
  for(var i = 0; i < 1000; i++) {
    points.push({
      x: Math.random() * bitmap.width,
      y: Math.random() * bitmap.height, 
      vx: 0,
      vy: 0
    })
  };

  context.lineWidth = 0.05;
  render();
}

function render() {
  for(var i = 0; i < points.length; i++) {
    // get each point and do what we did before with a single point
    var p = points[i];
    var value = getValue(p.x, p.y);
    p.vx += Math.cos(value) * force;
    p.vy += Math.sin(value) * force;

    // move to current position
    context.beginPath();
    context.moveTo(p.x, p.y);

    // add velocity to position and line to new position
    p.x += p.vx;
    p.y += p.vy;
    context.lineTo(p.x, p.y);
    context.stroke();

    // apply some friction so point doesn't speed up too much
    p.vx *= friction;
    p.vy *= friction;

    // wrap around edges of screen
    if(p.x > bitmap.width ||
      p.y > bitmap.height ||
      p.x < 0 ||
      p.y < 0) {
      p.x = Math.random() * bitmap.width;
      p.y = Math.random() * bitmap.height;
    }
  }

  requestAnimationFrame(render);
}

function getValue(x, y) {
  return bitmap.getValue(x, y) / 256 * Math.PI * 2;
}


