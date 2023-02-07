/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let anchoTerreno;
    let largoTerreno;
    let perimetroTerreno;
    let alambradoRectangularDeTerreno;

    largoTerreno = txtIdLargo.value;
    anchoTerreno = txtIdAncho.value;
    //debugger;

    largoTerreno = parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);

    perimetroTerreno = 2*(anchoTerreno + largoTerreno);

    alambradoRectangularDeTerreno = 3*(perimetroTerreno);

    alert("Se debe comprar " + alambradoRectangularDeTerreno + " metros de alambre");

}
function Circulo () 
{
    let radioTerreno;
    let circunferenciaTerreno;
    let alambradoCircularDelTerreno;

    radioTerreno = txtIdRadio.value;
    //debugger;

    radioTerreno = parseInt(radioTerreno);

    circunferenciaTerreno = 2 * Math.PI * radioTerreno;

    alambradoCircularDelTerreno = 3*(circunferenciaTerreno); 

    alert("Se debe comprar " + alambradoCircularDelTerreno + " metros de alambre");

	
}
function Materiales () 
{
    let largoTerreno;
    let anchoTerreno;
    let contrapisoTerreno; //metrocuadrado
    let cemento;
    let cal;

    largoTerreno = txtIdLargo.value;
    anchoTerreno = txtIdAncho.value;

    largoTerreno = parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);

    contrapisoTerreno = largoTerreno * anchoTerreno;
    cemento = contrapisoTerreno * 2;
    cal = contrapisoTerreno * 3;

    alert("Para " + contrapisoTerreno + " m2 de contrapiso se necesita " + cemento + " bolsas de cemento y " + cal + " bolsas de cal.");

	
}