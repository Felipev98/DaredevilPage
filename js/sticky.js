$(document).ready(function(){

let encabezadoFijo = $('#encabezadoFijo')

$(window).on('scroll',function(){

let proyectosOffSetTop = $('#casosResueltos').offset().top;

if ($(window).scrollTop() >= proyectosOffSetTop) {

	encabezadoFijo.css('margin-top',0);

}else if($(window).scrollTop() <=proyectosOffSetTop/2){

	encabezadoFijo.css('margin-top','-120px');

}


})

});