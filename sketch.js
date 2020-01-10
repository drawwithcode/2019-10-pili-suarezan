function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

}

function draw() {
  background(0);
  noStroke();

  var locX = mouseX - height / 2;
  var locY = mouseY - width / 2;
  var grosor = 10
  var t1 = 50
  var t2 = 100
  var t3 = 140

  ambientLight(0, 0, 255);
  directionalLight(255, 0, 10, 0, 1, 0);
  pointLight(255, 255, 0, locX, locY);

  rotateX(frameCount / 20);
  torus(t1, a);
  torus(t2, a);
  torus(t3, a);
  cylinder(a, 300);

  rotateY(frameCount / 20);
  torus(t2, a);

  ambientLight(255, 255, 0);
  rotateY(frameCount / 80);
  torus(t1, a);
  torus(t3, a);
  sphere(30);

  translate(40, 70, 90);
  sphere(20);
}
