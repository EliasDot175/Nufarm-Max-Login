$(document).ready(function(){

   	 $('.link-mostrar').click(function() {
   	 	var elemento = $(this).attr('to');
   	 	mostrar(elemento);
	});

   	 $('.link-cerrar').click(function() {
   	 	ocultar();
   	 	var elemento = $(this).attr('to');
   	 	$('#titulo-col'+elemento+' .link-mostrar').css('display', 'block');
   	 	$('.columnasTitulo .titulo').addClass('activo');
	});
});


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