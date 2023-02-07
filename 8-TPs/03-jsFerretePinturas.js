/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let ingresarTemperatura;
    let convertirFahrenheitACentrigrados;

    ingresarTemperatura = txtIdTemperatura.value;

    ingresarTemperatura = parseFloat(ingresarTemperatura);

    convertirFahrenheitACentrigrados = (ingresarTemperatura - 32)*(5/9);

    alert("La temperatura en Centigrados es de " + convertirFahrenheitACentrigrados + "°");
	
}

function CentigradosFahrenheit () 
{
    let ingresarTemperatura;
    let convertirCentrigradosAFahrenheit;

    ingresarTemperatura = txtIdTemperatura.value;
    ingresarTemperatura = parseFloat(ingresarTemperatura);

    convertirCentrigradosAFahrenheit = ((9/5)*ingresarTemperatura)+32;

    alert("La temperatura en Fahrenheit es de " + convertirCentrigradosAFahrenheit + "°");
	
}
