$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	});
	/*registraion page form*/
	$(".form-check").click(function() {
		console.log($(this).find('input').val());
		if($(this).find('input').val() == 'customer2') {
			$('.optovy').css({'display':'block'});
		}
		else {
			$('.optovy').css({'display':'none'});
		}
	});
	/*types page list*/

});