function mostrar()
{
	let edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad<13 || edad>17){
		alert("Usted no es un adolescente");
	} else{
		alert("Usted es adolescente")
	}

}//FIN DE LA FUNCIÓN