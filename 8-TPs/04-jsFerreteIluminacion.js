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
   
   
   
    if(cantidadDeLamparitas > 5){
        descuento = 0.5
    }
    else{
        if(cantidadDeLamparitas ==5){
            descuento = 0.3;
            if(marca == "ArgentinaLuz"){
                descuento = 0.4;
            }

        }
    precioFinal = precioBruto - (precioBruto * descuento);

    if(precioFinal > 120){
        precioFinal *= 0.9;
        alert()
    }
    
    
    
    }





    /*let cantidadDeLamparas;
    let precioLamparas;
    let descuento;
    let descuentoLampara;
    let marcaLampara;
    let precioLamparaAntesDeDescuento;


    cantidadDeLamparas = txtIdCantidad.value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);
    descuento = parseInt(descuento);
    


    marcaLampara = Marca.value;


    precioLamparas = 35;
    precioLamparaAntesDeDescuento = cantidadDeLamparas*precioLamparas;
    descuento = 1;



   
   /* if (cantidadDeLamparas > 5) {
        descuentoLampara = ((cantidadDeLamparas * precioLamparas) / 2);
        txtIdprecioDescuento.value = descuentoLampara;
    }*/

   // txtIdprecioDescuento.value = precioLamparaAntesDeDescuento - descuentoLampara;




    //
    if(cantidadDeLamparas==5 && (marcaLampara == "ArgentinaLuz")){
        //descuentoLampara = ((40 * (cantidadDeLamparas * precioLamparas))/100);
        descuento = 40;

    }else{

        if(cantidadDeLamparas==5  && (marcaLampara != "ArgentinaLuz")){
            descuento = 30;
        }
        else{
            if (cantidadDeLamparas = 4 && ((marcaLampara == "ArgentinaLuz") || (marcaLampara == "FelipeLamparas"))) {
                descuento = 25;
            }else{
                if(cantidadDeLamparas=4 && ((marcaLampara != "ArgentinaLuz") || (marcaLampara != "FelipeLamparas"))){
                    descuento = 20;
                }
                else{
                    if(cantidadDeLamparas=3 && (marcaLampara == "ArgentinaLuz")){
                        descuento = 15;   
                    }   
                    else{
                        if(cantidadDeLamparas=3 && (marcaLampara == "FelipeLamparas")){
                            descuento = 10;
                        }
                        else{
                            descuento = 5;  
                        }
                    }
                }
            
            }
        }
        
        txtIdprecioDescuento.value = precioLamparaAntesDeDescuento - descuento;

        //alert((cantidadDeLamparas*precioLamparas) - descuentoLampara);
    }
        
    









       
        if
            
        }
        else{
            if(cantidadDeLamparas=5 (marcaLampara != "ArgentinaLuz")){
                descuentoLampara = ((30*(cantidadDeLamparas*precioLamparas))/100);
                alert((cantidadDeLamparas*precioLamparas) - descuentoLampara);
            }
            else{
                if (cantidadDeLamparas = 4 && ((marcaLampara == "ArgentinaLuz") || (marcaLampara == "FelipeLamparas"))) {
                    descuentoLampara = ((25 * (cantidadDeLamparas * precioLamparas)) / 100);
                    alert((cantidadDeLamparas*precioLamparas) - descuentoLampara);

            }else{
                if(cantidadDeLamparas=4 && ((marcaLampara != "ArgentinaLuz") || (marcaLampara != "FelipeLamparas"))){
                    descuentoLampara = ((20*(cantidadDeLamparas*precioLamparas))/100);
                    alert((cantidadDeLamparas*precioLamparas) - descuentoLampara);
                }
                else{
                    if(cantidadDeLamparas=3 && (marcaLampara == "ArgentinaLuz")){
                        descuentoLampara = ((15*(cantidadDeLamparas*precioLamparas))/100);
                        alert((cantidadDeLamparas*precioLamparas) - descuentoLampara);
                    }
                    else{
                        if(cantidadDeLamparas=3 && (marcaLampara == "FelipeLamparas")){
                            descuentoLampara = ((10*(cantidadDeLamparas*precioLamparas))/100);
                            alert((cantidadDeLamparas*precioLamparas) - descuentoLampara);
                        }
                        else{
                                descuentoLampara = ((5*(cantidadDeLamparas*precioLamparas))/100)
                                alert((cantidadDeLamparas*precioLamparas) - descuentoLampara);
                            }
                        }
                    }
                }
            }
        
        }
    }
    

    */



}

