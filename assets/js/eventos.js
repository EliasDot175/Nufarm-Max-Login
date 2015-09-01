/* FUNCIONES*/

 function mostrar (elemento){
 	ocultar();
 	$('#info-col'+elemento).fadeIn('slow');
 	$('#titulo-col'+elemento+'  .titulo').addClass('activo');
 	$('#titulo-col'+elemento+' .link-cerrar').css('display', 'block');
 	$('#titulo-col'+elemento+' .link-mostrar').css('display', 'none');
 	$('#contenidoGeneral').removeClass('contenidoGeneral');	
}


 function ocultar (){
 	$('.columnasTitulo .titulo').removeClass('activo');
 	$('.columnasInfo').css('display', 'none');
 	$('.link-cerrar').css('display', 'none');
 	$('.link-mostrar').css('display', 'block');
 	$('#contenidoGeneral').addClass('contenidoGeneral');
}


$(document).ready(function(){
	//mostrar item
   	 $('.link-mostrar').click(function() {
   	 	var elemento = $(this).attr('to');
   	 	mostrar(elemento);
	});

   	 //cerrar item
   	 $('.link-cerrar').click(function() {
   	 	ocultar();
   	 	var elemento = $(this).attr('to');
   	 	$('#titulo-col'+elemento+' .link-mostrar').css('display', 'block');
   	 	$('.columnasTitulo .titulo').addClass('activo');
	});

   	 //footer
   	 $(window).resize(function() {
		var windowHeight = $(window).height();
		if(windowHeight > 1110){
			$('.footer').css('position', 'fixed');
		}else{
			$('.footer').css('position', 'relative');
		}
	});

	var windowHeight = $(window).height();
	console.log(windowHeight);
	if(windowHeight > 1110){
		$('.footer').css('position', 'fixed');
	}else{
		$('.footer').css('position', 'relative');
	}

});

