/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let resultadoDescuento;
	

	importe = txtIdImporte.value;
	importe = parseInt(importe);


	resultadoDescuento = ((25 * importe) / 100) - importe;

	
	txtIdResultado.value = resultadoDescuento;


	alert("El descuento es " + resultadoDescuento);

}
