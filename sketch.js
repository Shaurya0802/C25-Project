drop = [];

function setup() {
  createCanvas(800,600);

  for(var i = 0; i < 350; i++){
    drop.push(new Drop(random(0,800),random(-100,-50),random(10,20)));
  }
}
function draw() {
  background(200); 

  for(var i = 0; i < 350; i++){
    drop[i].fall();
    drop[i].display();
  }
}