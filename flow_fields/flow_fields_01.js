var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

var res = 10;

for(var x = 0; x < width; x += res) {
  for(var y = 0; y < height; y += res) {
    var value = (x + y) * 0.01 * Math.PI * 2;

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
