var database;
var drawing=[];



function setup(){
  database = firebase.database();
  console.log(database);
}
 
function draw() {
  background(0); 

  if (mouseIsPressed){   

      var point={
      x:mouseX,
      y:mouseY
      }

      drawing.push(point)
    
  }
beginShape();
  stroke(255)
  strokeWeight(4)
  noFill()
   for ( var i = 0; i <drawing.length;i++){
   rect(drawing[i].x,drawing[i].y)
}

endShape();
 
  //drawSprites();
}