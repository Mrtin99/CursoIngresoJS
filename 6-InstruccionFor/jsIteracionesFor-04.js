/* Enunciado:
al presionar el botón repetir hasta que utilizamos 'BREAK'. */
function mostrar()
{
	let numero;
	let contadorPares;

	contadorPares = 0;
    
	/*
	for(let i = 0; i < 10; i++){
		do{
			numero = prompt("Ingrese un numero");
			numero = parseInt(numero);
		}while(isNaN(numero));

		if(numero % 2 == 3){
			break;
		}
		console.log(numero);
	}
	*/

	for(let i = 1; i <= 20; i++){

		if(i % 2 == 0){
			//break
			continue;
			contadorPares++;
		}
		console.log(i);
	}

	console.log("Cantidad de pares: " + contadorPares);



}//FIN DE LA FUNCIÓN