function mostrar()
{
	let edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad >= 18){
		alert("Usted es mayor de edad");
	}
	else{
		if(edad>=13){
			alert("Usted es adolescente");
		}
		else{
			alert("Usted es menor");
		}
	}
	

}//FIN DE LA FUNCIÓN