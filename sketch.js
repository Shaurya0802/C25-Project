var drops = [];

function setup() {
  createCanvas(800,600);

  for(var i = 0; i < drops.length; i++){
    drops[i] = new Drop();
  }
}
function draw() {
  background(200); 

  for(var i = 0; i < drops.length; i++){
    drops[i].fall();
    drops[i].display();
  }
}