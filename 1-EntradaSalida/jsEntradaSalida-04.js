/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

function mostrar()
{
	let nombre;
	nombre = prompt("Su nombre");
	//prompt = txtIdNombre.value
	txtIdNombre.value = nombre;
	//alert(nombre)

	console.log(txtIdNombre.value);
}


/*Codigo clase  
//declarar variables
let nombre;


//entrada de dato
nombre = prompt("Ingrese su nombre");


//salida de  dato
txtIdNombre.value = nombre;


*/
