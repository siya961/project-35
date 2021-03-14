class Balloon{
    constructor(){



    }

getPosition(){

var balloonPosition=database.ref('balloon/height')
    balloonPosition.on("value", readPosition , showError)

if(keyDown(LEFT_ARROW)){
  balloon.x = balloon.x -10;
   }

  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x +10;
     }
    
  else if(keyDown(UP_ARROW)){
      balloon.y = balloon.y -10;
       }
    
  else if(keyDown(DOWN_ARROW)){
        balloon.y = balloon.y +10;
         }
      }

updatePosition(position){
  database.ref("/").update({balloonPosition:position})
}

update(name){
       var balloonPosition="balloon"+balloonPosition
           database.ref(balloonPosition).set({name:name})  

  }

  


}

