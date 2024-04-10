// Date Slider
$('.date-slider').owlCarousel({
	loop:false,
    margin:10,
	nav:false,
	dots:false,
	responsive:{
		0:{
			items:3
		},
		600:{
			items:4
		},
		1000:{
			items:5
		},
		1200:{
			items:6
		},
		1400:{
			items:7
		}
	}
});

/*--- Payment Method Accordion ---*/
$('input[name="paymentmethod"]').on('click', function () {
	var $value = $(this).attr('value');
	$('.return-departure-dts').slideUp();
	$('[data-method="' + $value + '"]').slideDown();
});

/*--- Multi Dropdown JS ---*/ 

$(document).ready(function(){
	$('.dropdown-submenu a.submenu-item').on("click", function(e){
	  $(this).next('ul').toggle();
	  e.stopPropagation();
	  e.preventDefault();
	});
  });
  