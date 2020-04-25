function setup() {
  createCanvas(800,600);

  drop = new Drop(350,0,350,30,5);
}
function draw() {
  background(255); 
  
  drop.fall();
  drop.display();
}