function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

}

function draw() {
  background(0);
  noStroke();

  var locX = mouseX
  var locY = mouseY
  var grosor = 10
  var t1 = 50
  var t2 = 100
  var t3 = 140

  ambientLight(0, 0, 255);
  directionalLight(255, 0, 10, 0, 1, 0);
  pointLight(255, 255, 0, locX, locY,1);
  camera(locX, locY, 0, 20, -20, 0, 0, 10, 0);


  rotateX(frameCount / 20);
  torus(t1, grosor);
  torus(t2, grosor);
  torus(t3, grosor);
  cylinder(grosor, 300);

  rotateY(frameCount / 20);
  torus(t2, grosor);

  ambientLight(255, 255, 0);
  rotateY(frameCount / 80);
  torus(t1, grosor);
  torus(t3, grosor);
  sphere(30);

  translate(40, 70, 90);
  sphere(20);
}
