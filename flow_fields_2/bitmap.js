var Bitmap = {
  create: function(url, onComplete) {
    var obj = Object.create(this);
    obj.init(url, onComplete);
    return obj;
  },

  init: function(url, onComplete) {
    this.url = url;
    this.onComplete = onComplete;
    this.onLoad = this.onLoad.bind(this);
    this.image = document.createElement("img");
    this.image.addEventListener("load", this.onLoad);
    this.image.addEventListener("error", function(e) { console.log(e);});
    this.image.src = url;
  },

  onLoad: function() {
    this.canvas = document.createElement("canvas");
    this.width = this.canvas.width = this.image.width;
    this.height = this.canvas.height = this.image.height;
    this.context = this.canvas.getContext("2d");
    this.context.drawImage(this.image, 0, 0);
    this.imageData = this.context.getImageData(0, 0, this.width, this.height);
    this.onComplete();
  },

  getValue: function(x, y) {
    x = Math.floor(x);
    y = Math.floor(y);
    var i = (y * this.width + x) * 4,
        r = this.imageData.data[i],
        g = this.imageData.data[i + 1],
        b = this.imageData.data[i + 2];
    return (r + g + b) / 3;
  }
};
