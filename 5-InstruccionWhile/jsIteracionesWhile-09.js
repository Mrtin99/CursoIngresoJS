/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';

	while(respuesta=="si")
	{
		do{
			numeroIngresado = prompt("Ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);
		}while (isNaN(numeroIngresado));

		while(banderaDelPrimero == true){
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;

			banderaDelPrimero = false-,
		}
		
		if(numeroIngresado > numeroMinimo){
			numeroMinimo = numeroIngresado;
		}else{
			numeroMaximo = numeroIngresado;
		}
		
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN