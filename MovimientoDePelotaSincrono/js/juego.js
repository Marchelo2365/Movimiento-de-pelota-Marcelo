class Juego {
constructor(){}

getState() {
    var gameStateRef = database.ref("Estado_de_juego")
    gameStateRef.on("value", function(data){
    
        Estado_de_juego = data.val()
                                           })


}
updateState(state) {
database.ref('/').update({Estado_de_juego: state});



}
start() {
if(Estado_de_juego === 0){
formulario = new Formulario();
jugador = new Jugador();
player.getCount;


formulario.display();



}




}


}






