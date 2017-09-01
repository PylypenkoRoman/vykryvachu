(function () {

	$('#js-mobile-nav-btn').click(function(){
		$('body').addClass('overflow-hidden');
		$('#js-mobile-nav').addClass('open');
	});
	$('#js-mobile-nav-close-btn').click(function(){
		$('body').removeClass('overflow-hidden');
		$('#js-mobile-nav').removeClass('open');
	});

  $('.js-form-btn').click(function(){
    if($('#js-mobile-nav').hasClass('open')){
      $('#js-mobile-nav').removeClass('open');
    }
    $('#js-form').addClass('open');
    if($('body').hasClass('overflow-hidden')){
      return;
    }else{
      $('body').addClass('overflow-hidden');
    }

  });
  $('.js-form-close-btn').click(function(){
    $('body').removeClass('overflow-hidden');
    $('#js-form').removeClass('open');
  });


	$('a[href*="#"]').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top}, 1000);
		e.preventDefault();
	});

}());

