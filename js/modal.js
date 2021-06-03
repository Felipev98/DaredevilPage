$(document).ready(function(){

$('.imagen-casos').on('click', function(){

	let rutaImagen = $(this).attr('src');
	var modal = '<div class="modal" id="modal"><img src="'+rutaImagen+'" alt=""><div class="btn-cerrar" id="btnCerrar"><i class="fas fa-times"></i></div></div>'
	
	$('#casosResueltos').after(modal);

	$('#btnCerrar').on('click', function(){

		$('#modal').remove();

	})
	
})	

$(document).on('keyup',function(e){

	if (e.which==27) {
		$('#modal').remove();
	}
})

})