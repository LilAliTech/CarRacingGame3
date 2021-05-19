class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index; // players/player1
    database.ref(playerIndex).set({
      name: this.name, 
      distance: this.distance,
      rank : this.rank
    });
  }
  
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value", (data)=>{
      allPlayers = data.val();
      //console.log(allPlayers);
    });
  }

  GetCarsAtEnd(){
    database.ref('CarsAtEnd').on("value",(data)=>{
      this.rank = data.val();
      
    })
  }

  static updateCarsAtEnd(rank){
    database.ref('/').update({
      CarsAtEnd: rank,
    });
    finishedPlayers = rank;
  }
}
