/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let resultadoAumento;

	sueldo = txtIdSueldo.value;
	

	sueldo = parseInt(sueldo);
	//resultadoAumento = parseInt(resultadoAumento);

	resultadoAumento = ((10 * sueldo) / 100) + sueldo;

	//salida de datos
	txtIdResultado.value = sueldo + resultadoAumento;

	
	alert("Tu sueldo total es " + resultadoAumento);

}
