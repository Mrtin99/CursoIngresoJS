function mostrar()
{
	//tomo el mes
	let mesDelAño;
	let mensaje;

	mesDelAño = txtIdMes.value;

	switch(mesDelAño){
		case "Febrero":
			mensaje = "Este mes no tiene más de 29 días";
			break;
		default:
			mensaje = "Este mes tiene 30 días o más días";
			break;
	}

	alert(mensaje);


}//FIN DE LA FUNCIÓN