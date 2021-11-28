class Formulario {
constructor(){

}
display(){
var titulo = createElement("h2");
titulo.html("Car Race");
titulo.position(250,50);

var entrada = createInput("Nombre");
var boton = createButton("Inicio");
var bienvenido = createElement("h3");

entrada.position(250,250);
boton.position(250,300);


boton.mousePressed(function(){
entrada.hide();
boton.hide();

var nombre = entrada.value();

Contador_de_jugador += 1;

jugador.update(nombre);

jugador.updateCount(Contador_de_jugador);

bienvenido.html("Bienvenido" + nombre);
bienvenido.position(250,100);


});

}

}