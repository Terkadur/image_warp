function preload() {
  human = loadImage("image/human.png");
}
function setup() {
  createCanvas(256, 256);
  pixelDensity(1);
  background(0);
  image(human, 0, 0, 256, 256);
  
  radius = 0;
  strength = 2;
  
}


function draw() {
  loadPixels();
  arr = Array.from(pixels);
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      if ((x - width/2)*(x - width/2) + (y - height/2)*(y - height/2) <= radius*radius) {
        angle = atan2(y - height/2, x - width/2);
        rad = dist(x, y, width/2, height/2);
        new_x = round(strength * rad * cos(angle) + width/2);
        new_y = round(strength * rad * sin(angle) + height/2);
        arr[4*(y*width + x) + 0] = pixels[4*(new_y*width + new_x) + 0];
        arr[4*(y*width + x) + 1] = pixels[4*(new_y*width + new_x) + 1];
        arr[4*(y*width + x) + 2] = pixels[4*(new_y*width + new_x) + 2];
        arr[4*(y*width + x) + 3] = pixels[4*(new_y*width + new_x) + 3];
      }  
      
      //arr[4*(y*width + x)] = 255;
      //arr[4*(y*width + x) + 1] = 0;
      //arr[4*(y*width + x) + 2] = 255;
      //arr[4*(y*width + x) + 3] = 255;
    }
  }
  for (var i = 0; i < arr.length; i++) {
    pixels[i] = arr[i];
  }
  updatePixels();
  radius += 1;
}
