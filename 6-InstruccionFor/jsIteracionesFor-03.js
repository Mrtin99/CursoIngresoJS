/* Enunciado:
al presionar el botón pedir la cantidad
 de veces que quiero repetir el mensaje "Hola UTN FRA" */
function mostrar()
{

	let repeticiones;
	let i;
	let mensaje;

	/*
	do{
		repeticiones = prompt("ingrese el número de repeticiones");
		repeticiones = parseInt(repeticiones);
	}while(isNaN(repeticiones) || repeticiones < 1);

	for(i = 1; i <= repeticiones; i++){
		//document.writeln("Hola UTNI FRA" + "<br>");
		alert("Hola UTN FRA");
	} */

	do{
		repeticiones = prompt("Ingrese el numero de repeticiones")
		repeticiones = parseInt(repeticiones);
	}while(repeticiones < 0);

	for (i = 1; i <= repeticiones; i++){
		mensaje += "Hola UTN FRA \n";
	}
	alert(mensaje);
	
}//FIN DE LA FUNCIÓN