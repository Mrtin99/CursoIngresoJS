/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//definir variables	
	let = dividendo;	
	let = divisor;
	let = resto;

	//entrada de datos
	dividendo = txtIdNumeroDividendo.value;
	divisor = txtIdNumeroDivisor.value;

	//parsear los datos 
	dividendo = parseInt(dividendo);
	divisor = parseInt(divisor);

	//operación / la cuenta
	resto = dividendo % divisor; // % para resto de una division

	//salida de datos
	alert("El resto es " + resto);
}
