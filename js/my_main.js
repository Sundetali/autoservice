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
	$(".radio-wrap .form-check").click(function() {
		console.log($(this).find('input').val());
		if($(this).find('input').val() == 'customer2') {
			$('.optovy').css({'display':'block'});
		}
		else {
			$('.optovy').css({'display':'none'});
		}
	});
	/*types page list*/
	
	/*angle down and right*/
	$('.card-link').click(function() {
		$(this).toggleClass('activee');
		$(this).find('.fa').toggleClass('fa-angle-right');
		$(this).find('.fa').toggleClass('fa-angle-down');
	});
	
	/*activee class */
	$('.name-text').click(function() {
		$('.name-text').removeClass('activee-span');
		$(this).addClass('activee-span');
	});

	/*display block none for each card-link*/

	$('.card-link .name-text').click(function() {
		var name = $(this).attr('id').split('-')[0];
		$('.des-wrap').css({'display': 'none'});
		$('#'+name).css({'display': 'block'});
		console.log(name);
	});

	/*show all checkbox and change text in spare part */

	$('.search-wrap .line').click(function() {
		$(this).text($('.visible-1').hasClass('non-visible') ? 'Скрыть' : 'Показать все');
		$('.visible-1').toggleClass('non-visible');
	});

});