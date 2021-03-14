var balloon , balloonPosition;
var database;



function setup() {
  database=firebase.database
  createCanvas(500,500);
  
}

function draw() {
  background("cyan");  
  drawSprites();
}