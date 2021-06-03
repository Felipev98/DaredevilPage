$(document).ready(function(){


// Mostrar y ocultar el botón volver arriba

let btnVolverArriba = $('#btnVolverArriba');

$(window).on('scroll',function(){

let proyectosOffSetTop = $('#casosResueltos').offset().top;

if ($(window).scrollTop() >= proyectosOffSetTop) {

	btnVolverArriba.css('margin-right',0);

}else if($(window).scrollTop() <=proyectosOffSetTop/2){

	btnVolverArriba.css('margin-right','-60px');

}


})

// Movimiento suave de Scroll para "inicio" y "volver-arriba"

$('a.volver-arriba').on('click', function(e){

e.preventDefault();

if ($(window).scrollTop() != 0) {

	$('html, body').stop().animate({scrollTop: 0},1000);
}

})

// Movimiento suave de scroll de los demás items del menú pirncipal
$('a.scroll-suave').on('click', function(e){
e.preventDefault();

let seccionOT = $($(this).attr('href')).offset().top

$('html, body').stop().animate({scrollTop: seccionOT},1000);

})

$('a.scroll-nosotros').on('click', function(e){
e.preventDefault();

let seccionOT = $($(this).attr('href')).offset().top -122

$('html, body').stop().animate({scrollTop: seccionOT},1000);

})
$('a.scroll-aliados').on('click', function(e){
e.preventDefault();

let seccionOT = $($(this).attr('href')).offset().top -68

$('html, body').stop().animate({scrollTop: seccionOT},1000);

})


});