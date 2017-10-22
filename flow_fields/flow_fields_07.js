var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;


// random attractor params
// var a = Math.random() * 4 - 2;
// var b = Math.random() * 4 - 2;
// var c = Math.random() * 4 - 2;
// var d = Math.random() * 4 - 2;
var res = 10;
var a = -1.4, b = 1.6, c = 1.0, d = 0.7;

render();

function render() {
  for(var x = 0; x < width; x += res) {
    for(var y = 0; y < height; y += res) {
      var value = getValue(x, y);
      context.save();
      context.translate(x, y);
      context.rotate(value);
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(res, 0);
      context.stroke();
      context.restore();
    }
  }
}

function getValue(x, y) {
  // clifford attractor
  // http://paulbourke.net/fractals/clifford/
  
  // scale down x and y
  var scale = 0.005;
  x = (x - width / 2) * scale;
  y = (y - height / 2)  * scale;

  // attactor gives new x, y for old one. 
  var x1 = Math.sin(a * y) + c * Math.cos(a * x);
  var y1 = Math.sin(b * x) + d * Math.cos(b * y);

  // find angle from old to new. that's the value.
  return Math.atan2(y1 - y, x1 - x);
}

