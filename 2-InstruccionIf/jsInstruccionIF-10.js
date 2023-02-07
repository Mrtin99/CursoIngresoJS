function mostrar()
{
	let notaRamdom;

	notaRamdom = Math.round(Math.random(notaRamdom)*10);

	alert(notaRamdom);

	if(notaRamdom>=9){
		alert("EXCELENTE");
	}else{
		if(notaRamdom<=8 && notaRamdom>=4){
			alert("APROBO");
		}
		else{
			alert("Vamos, la proxima se puede");
		}

	}

}//FIN DE LA FUNCIÓN