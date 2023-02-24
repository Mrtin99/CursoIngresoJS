/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{
	let precioCamisa; //Se puede poner en mayuscula ya que es una constante y no varia
	let cantidadDeCamisas;
	let descuento;
	let precioFinal;
	let precioBruto;
	let marca;

	precioCamisa = 5000;
	descuento = 0;

	cantidadDeCamisas = prompt ("Ingrese cantidad de camisas");
	marca = prompt("Ingrese la marca"); //Lacoste
	cantidadDeCamisas = parseInt(cantidadDeCamisas);

	precioBruto = cantidadDeCamisas * precioCamisa;

	/*if(cantidadDeCamisas > 9)
	{
		descuento = 0.15;
	}
	else
	{
		if(cantidadDeCamisas > 9 && marca != "Lacoste")
		{
			descuento = 0.05;
		}
	}*/
 
	// mas facil
	if(cantidadDeCamisas > 9)
	{
		if(marca == "Lacoste")
		{
			descuento = 0.15;
		}
		else
		{
			descuento = 0.5;
		}
	}






	precioFinal = precioBruto - (precioBruto * descuento);

	alert("Usted pagara: " + precioFinal);

	/* Cada camisa cuesta $5000
	Si el cliente compra 10 camisas o mas de la marca Lacoste,
	se le ofrece
	un descuento del 15%, pero si compra de cualquier otra marca el descuento sera del 5% */

}

