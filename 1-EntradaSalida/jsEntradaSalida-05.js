/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombreIngresado;
	let edadIngresada;

	//nombreIngresando = text.IdNombre.value;
	//edadIngresada = txtIdEdad.value;

	nombreIngresado = document.getElementById("txtIdNombre").value;//txtIdNombre.valua ----- equivalencia
	edadIngresada = document.getElementById("txtIdEdad").value;

	alert("Usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " años");


}

/* 


*/