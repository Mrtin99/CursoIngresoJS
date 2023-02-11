/*Enunciado:
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"  */

function mostrar()
{
	//tomo el mes
	let mesDelAño;
	let mensaje;

	mesDelAño= txtIdMes.value;
	
	switch(mesDelAño){
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "Es mes tiene 30 días";
			break;
		case "Febrero":
			mensaje = "Este mes tiene 28 días";
			break;
		default:
			mensaje = "Este mes tiene 31 días";
			break;
	}

	alert(mensaje);


}//FIN DE LA FUNCIÓN