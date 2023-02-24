/* Enunciado:
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10. */
function mostrar()
{
	let numero;
	let i;
	/*let contador; // i

	contador = 0;

	while(contador < 5){
		contador ++;
		console.log(contador);
	}*/

	for(i = 1; i <= 10; i++){
		document.writeln(i+"<br>");
	}
}