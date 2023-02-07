function mostrar()
{
	let edad;
	let estadoCivilIngresado;
	

 	edad = txtIdEdad.value;
 	edad = parseInt(edad);


	estadoCivilIngresado = estadoCivil.value;

	if(edad>=18 &&(estadoCivilIngresado == "Soltero")){
		alert("Es soltero y no es menor");
	}


	


}//FIN DE LA FUNCIÓN