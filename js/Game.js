class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
    car1 = createSprite(100,200);
    car2 = createSprite(300,200);
    car3 = createSprite(500,200);
    car4 = createSprite(700,200);

    car1.addImage(carImg1);
    car2.addImage(carImg2);
    car3.addImage(carImg3);
    car4.addImage(carImg4);

    cars=[car1,car2,car3,car4]

   
  }




  play(){
    
    form.hide();
    // textSize(20);
    // text("START GAME", 200,150)
    Player.getPlayerInfo();
    player.GetCarsAtEnd();

    if(allPlayers !== undefined){
      //var display_position = 200;   
      image(track, 0,displayHeight*-4, displayWidth, displayHeight*5)       
      var index = 0;
      var x = 150;
      var y;       

      for (var plr in allPlayers){
        console.log(player.index);
        index += 1;
        x +=200;
        y = displayHeight-allPlayers[plr].distance;

// player1  index =1 cars=[car1,car2,car3,car4];------player1 - car1---cars[0]---
// sprite.x and sprite.y --- cars[0]---cars[index-1].x = x;
        
        cars[index-1].x=x;
        cars[index-1].y=y;
        if(index=== player.index){
          stroke(9);
          fill("red"); 
          ellipse(x,y, 70, 70);
          cars[index-1].shapeColor="Red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
       else{
        cars[index-1].shapeColor="Black";
       }
      //  display_position += 25;
      // textSize(18);
      // text(allPlayers[plr].name + " : " + allPlayers[plr].distance,130,display_position);
      }
      
      // Muhammed : 100 
    }
  if(keyIsDown(UP_ARROW)&& player.index !== null){
    player.distance += 50;
    player.update();
  }
  if(player.distance > 4300){
    gameState = 2;
    player.rank+=1;
    Player.updateCarsAtEnd(player.rank);
    player.update();
  }
    drawSprites();
  }


  end(){
    camera.position.x = 0;
    camera.position.y = 0;
    Player.getPlayerInfo();
    textSize(50);

    for (var plr in allPlayers){
      if(allPlayers[plr].rank ===1){
        fill("Red");
        text("1st : " + allPlayers[plr].name,400,300);
      }else if(allPlayers[plr].rank ===2){
        fill("Red");
        text("2nd : " + allPlayers[plr].name,400,320);
      }
      else if(allPlayers[plr].rank ===3){
        fill("Red");
        text("3rd : " + allPlayers[plr].name,400,340);
      }else {
        fill("Red");
        text("Honorable mention: " + allPlayers[plr].name,300,360);
      } 
    }  
  }



}
