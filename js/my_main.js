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
	            items:2
	        },
	        1000:{
	            items:4	
	        }
	    }
	});
	/*index page*/
	$('.fa-heart').click(function() {
		$(this).toggleClass('active-heart');
		var brand_name = $(this).closest('.spare-des').find('.des-name');
		$('#favourite h5').text(brand_name.text());

		/*add and remove modal*/
		if($(this).hasClass('active-heart')) {
			$(this).attr('data-toggle', 'modal');
		}
		else {
			$(this).removeAttr('data-toggle');
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

	/*cabinet page input and span event focus*/

	$('.cabinet-top .number').hover(function() {
		$(this).addClass('non-active');
		$('.cabinet-top .number-input').val($(this).text());
		$('.cabinet-top .number-input').removeClass('non-active');
	});

	$('.cabinet-top .number-input').focusout(function() {
		$(this).addClass('non-active');
		$('.cabinet-top .number').text($(this).val());
		$('.cabinet-top .number').removeClass('non-active');
	});
	/*shipping page address display none block*/

	$(".shipping-wrap.form-check").click(function() {
		var addres = $('.input-wrap .address-wrap');
		if($(this).find("input[type='radio']").attr('id') == 'shipping-1') {
			addres.css({'display': 'none'});	
		}
		else {
			addres.css({'display': 'block'});	
		}
	});

	/*modal*/
	$('.inital-icon').click(function() {
		$(this).css({'display': 'none'});
		$('.icons').css({'display': 'block'});
	});
	$('.icons .times-icon').click(function() {
		$('.icons').css({'display': 'none'});
		$('.inital-icon').css({'display': 'block'});
	});
	/*calculator*/

	$("#calc-button").click(function(){
        var w = parseFloat($.trim($("#weight").val()));
		var c = parseFloat($.trim($("#capacity").val()));
		var m = parseInt($.trim($("#kolvomest").val()));
		var cityFrom = $.trim($("#from option:selected").text());
		var cityTo = $.trim($("#to option:selected").text());
		
		$("#calc .error1").hide();
		$("#calc .sum-hidden").hide();
        if (cityFrom == cityTo) {
			$("#calc .error1").html("Направление не существует!");
            $("#calc .error1").show();
            return false;
        }  
		if(w<=0 || isNaN(w)){
			$("#calc .error1").html("Введите вес!");
			$("#calc .error1").show();
			return false;
		}
		if(c<=0 || isNaN(c)){
			$("#calc .error1").html("Введите объём!");
			$("#calc .error1").show();
			return false;
		}
		if(m < 1 || isNaN(m))
			m = 1;
		
		var data = new Object();
		data.cityfrom = cityFrom;
		data.cityto = cityTo;
		data.ves = w;
		data.obm3 = c;
		data.mest = m;
		data.noAuth = 1;
		console.log(data);
	});
});