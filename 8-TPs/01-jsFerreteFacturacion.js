/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let sumarPrecio; 

    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    sumar = precioUno + precioDos + precioTres;

    alert("La suma de los precios es " + sumar);
	
}
function Promedio () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let promedioPrecio;

    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    promedioPrecio = (precioUno + precioDos + precioTres) / 3;

    alert("El promedio de los precios es " + promedioPrecio);
	
}
function PrecioFinal () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let precioFinalConIva;

    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    precioFinalConIva = ((21*(precioUno + precioDos + precioTres))/100) + precioUno + precioDos + precioTres;

    alert("El precio final es de " + precioFinalConIva);
	
}