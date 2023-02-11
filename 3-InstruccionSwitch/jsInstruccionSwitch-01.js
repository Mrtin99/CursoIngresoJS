function mostrar()
{
	/*//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);
	*/
	let mesDelAño;
	let mensaje;

	mesDelAño = txtIdMes.value;

	//debugger
	switch(mesDelAño){
		case "Diciembre":
			mensaje = "Felices Fiestas";
			break;
		case "Enero":
			mensaje = "Que comiences bien el año!!!.";
			break;
		case "Julio":
			mensaje = "Se vienen las vacaciones!!!.";
			break;
		default:
			mensaje = "Feliz mes!!!.";
	}

	alert(mensaje);


}//FIN DE LA FUNCIÓN