$(document).ready(function(){

// Variables
let slider = $('#slider');
let btnAnterior = $('#btnAnterior');
let btnSiguiente = $('#btnSiguiente');

$('#slider .slide:last').insertBefore('#slider .slide:first')

// Aplicamos  margen nergativo para ver la imagen del primer slide
slider.css('margin-left', '-19%');

function moverDerecha(){

	if (!slider.is(':animated')) {

		slider.animate({
		marginLeft: '-72%'
	},700,function(){
	
	$('#slider .slide:first').insertAfter('#slider .slide:last');
	slider.css('margin-left', '-25%');
	resetInterval();

	});

	}


}

btnSiguiente.on('click',moverDerecha);


function moverIzquierda(){

if (!slider.is(':animated')) {

$('#slider .slide:last').insertBefore('#slider .slide:first')

slider.css('margin-left', '-72%');	
slider.animate({

	marginLeft: '-25%'
},700,function(){

	resetInterval();
});	

}	



}

btnAnterior.on('click', moverIzquierda);


// Intervalo

let intervalo = setInterval(moverDerecha,3000);

function resetInterval(){
	clearInterval(intervalo);
	intervalo = setInterval(moverDerecha,3000);
}

});