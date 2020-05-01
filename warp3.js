function preload() {
  level = loadImage("image/level.png");
}
function setup() {
  createCanvas(1024, 512);
  pixelDensity(1);
  image(level, 0, 0, 1024, 512);
  radius = 1;
  strength = 2;
  loadPixels();
  arr = Array.from(pixels);
  vel = 1.02;
  centerX = width/2;
  centerY = height/2;
}


function draw() {
  loadPixels();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      if ((x - centerX)*(x - centerX) + (y - centerY)*(y - centerY) <= radius*radius) {
        angle = atan2(y - centerY, x - centerX);
        rad = dist(x, y, centerX, centerY);
        new_x = round((radius - (radius - rad)/strength) * cos(angle) + centerX);
        new_y = round((radius - (radius - rad)/strength) * sin(angle) + centerY);
        if (new_x < 0 || new_x > width || new_y < 0 || new_y > height) {
          pixels[4*(y*width + x) + 0] = 0;
          pixels[4*(y*width + x) + 1] = 0;
          pixels[4*(y*width + x) + 2] = 0;
          pixels[4*(y*width + x) + 3] = 255;
          
        }
        else {
          pixels[4*(y*width + x) + 0] = arr[4*(new_y*width + new_x) + 0];
          pixels[4*(y*width + x) + 1] = arr[4*(new_y*width + new_x) + 1];
          pixels[4*(y*width + x) + 2] = arr[4*(new_y*width + new_x) + 2];
          pixels[4*(y*width + x) + 3] = arr[4*(new_y*width + new_x) + 3];
        }
      }  
    }
  }
  updatePixels();
  radius *= vel;
}
