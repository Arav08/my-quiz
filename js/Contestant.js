class Player {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
    }
  
    getCount(){
      var contestantCountRef = database.ref('playerCount');
      contestantCountRef.on("value",(data)=>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "players/player" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
  
    static getPlayerInfo(){
      var contestantInfoRef = database.ref('players');
      contestantInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
  }
  