function Pasajero (nombre, apellido, dni){

	this.nombre = nombre;
	this.apellido = apellido;
	this.dni = dni;



}

function Bus (){
	this.asientos = [];
	this.numAsientos = 

this.buscar = function(){

}

this.reservar = function(nom, ape, doc){
	if(numAsiento==-1){
    alert("Seleccione primero un asiento");
  }
  else{
  var nom=document.getElementById("nombre").value;
  var ape=document.getElementById("apellido").value;
  var doc=document.getElementById("dni").value;

  var pasajero =  {
    nombre: nom,
    apellido: ape,
    dni: doc
  };
  alert("Asiento N° "+numAsiento+"\n"+"Pasajero: "+pasajero.nombre+" "+pasajero.apellido+"\n"+"Registrado correctamente!");
  asientos[numAsiento -1] = pasajero;
  celdaPress.style.backgroundColor="red";
  //numAsiento=-1;
  console.log(asientos)
}
limpiar();

}

this.listar = function (){

}

this.cancelar = function(){

}


}

this.limpiar = function(){

}

