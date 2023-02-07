function mostrar()
{
 	let edad;
	let estadoCivilIngresado;
	

 	edad = txtIdEdad.value;
 	edad = parseInt(edad);


	estadoCivilIngresado = estadoCivil.value;


	if(edad<18 && (estadoCivilIngresado == "Soltero")){
		alert("Es muy pequeño para no ser soltero");
	}else{
		alert("Todo bien");
	}



}//FIN DE LA FUNCIÓN