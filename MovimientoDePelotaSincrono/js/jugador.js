class Jugador {
    constructor(){}
  
    getCount(){
      var playerCountRef = database.ref('Contador_de_jugador');
      playerCountRef.on("value",function(data){
        Contador_de_jugador = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        Contador_de_jugador: count
      });
    }
  
    update(nombre){
      var playerIndex = "Jugador" + Contador_de_jugador;
      database.ref(playerIndex).set({
        name:nombre
      });
    }
  }
  