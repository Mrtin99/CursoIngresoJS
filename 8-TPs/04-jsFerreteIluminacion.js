/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

function CalcularPrecio() {
   
    let cantidadDeLamparas;
    let precioLampara = 35;
    let descuento;
    let marcaLampara;
    let precioFinal;
    let precioCantidad;
    let importeFinal;
    let ingresosBrutos;



    cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);
    marcaLampara = document.getElementById("Marca").value;

    
    //debugger
    if(cantidadDeLamparas > 5)
    {
        descuento = 0.5;
    }
    debugger
    if(cantidadDeLamparas == 5)
    {
        if(marcaLampara == "ArgentinaLuz")
        {
            descuento = 0.4;
        }
        else
        {
            descuento = 0.3;
        }
    }

    if(cantidadDeLamparas == 4)
    {
        if((marcaLampara == "ArgentinaLuz") || (marcaLampara == "FelipeLamparas"))
        {
            descuento = 0.25;
        }
        else
        {
            descuento = 0.20;
        }
    }

    if(cantidadDeLamparas == 3)
    {
        if(marcaLampara == "ArgentinaLuz")
        {
            descuento = 0.15;
        }
        else
        {
            if(marcaLampara == "FelipeLamparas")
            {
                descuento = 0.1;
            }
            else
            {
                descuento = 0.05;
            }
        }
    }

    precioCantidad = cantidadDeLamparas * precioLampara;

    precioFinal = precioCantidad - (precioCantidad*descuento) ;
    txtIdprecioDescuento.value = precioFinal;

    if(precioFinal > 120)
    {
        ingresosBrutos = precioFinal * 0.1;
        importeFinal = precioFinal + ingresosBrutos;
        alert("Usted pago " + ingresosBrutos + " de IIBB");
        document.getElementById(" txtIdprecioDescuento").value = importeFinal;
    }


}



