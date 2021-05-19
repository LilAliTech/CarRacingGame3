class Form {
  constructor() {
    this.title = createElement('h2');
    this.input = createInput("");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
    this.reset = createButton("RESET")
  }

  hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
  }

  display(){
    this.title.style('color', '#b570ff');
    this.input.size(160, AUTO);
    this.button.size(60, AUTO);
    this.reset.size(70, AUTO);
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2-50, 0);

    this.input.position(displayWidth/2-40,displayHeight/2-350);
    this.button.style('background-color', '#85b4ff');
    this.button.position(displayWidth/2+10, displayHeight/2-300);
    this.reset.style('background-color', '#ff4d6a')
    this.reset.position(displayWidth/20, displayHeight/40)
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
  
      playerCount+=1;
      player.index = playerCount;
      player.update()
      player.updateCount(playerCount);
      
      this.greeting.html("Hello " + player.name )
      this.greeting.position(displayWidth/2-50, displayHeight/4)
    });

    this.reset.mousePressed(()=>{

          player.updateCount(0)
          game.update(0);

          var removePlayers = database.ref("players");
          removePlayers.remove();
    });
  }
}
