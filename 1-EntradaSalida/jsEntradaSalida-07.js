/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let = valorUno;
	let = valorDos;
	let = suma;

	valorUno = txtIdNumeroUno.value;//----->es texto  //document.getElementById("txtIdNumeroUno").value;
	valorDos = txtIdNumeroDos.value;  //document.getElementById("txtIdNumeroDos").value;
	
	valorUno = parseInt(valorUno); //------> es número
	valorDos = parseInt(valorDos):

	suma = valorUno + valorDos;

	alert("la suma es " + suma);
}

function restar()
{
	let = valorUno;
	let = valorDos;
	let = resta;

	valorUno = txtIdNumeroUno.value;//----->es texto  //document.getElementById("txtIdNumeroUno").value;
	valorDos = txtIdNumeroDos.value;  //document.getElementById("txtIdNumeroDos").value;
	
	valorUno = parseInt(valorUno); //------> es número
	valorDos = parseInt(valorDos):

	resta = valorUno + valorDos;

	alert("la resta es " - resta);	
}

function multiplicar()
{ 
	let = valorUno;
	let = valorDos;
	let = multiplicar;

	valorUno = txtIdNumeroUno.value;//----->es texto  //document.getElementById("txtIdNumeroUno").value;
	valorDos = txtIdNumeroDos.value;  //document.getElementById("txtIdNumeroDos").value;
	
	valorUno = parseInt(valorUno); //------> es número
	valorDos = parseInt(valorDos):

	multiplicar = valorUno + valorDos;

	alert("la multiplicación es " * multiplicar);	
}

function dividir()
{
	let = valorUno;
	let = valorDos;
	let = dividir;

	valorUno = txtIdNumeroUno.value;//----->es texto  //document.getElementById("txtIdNumeroUno").value;
	valorDos = txtIdNumeroDos.value;  //document.getElementById("txtIdNumeroDos").value;
	
	valorUno = parseInt(valorUno); //------> es número
	valorDos = parseInt(valorDos):

	dividir = valorUno / valorDos;

	alert("la dividisión es " + dividir);	
}

