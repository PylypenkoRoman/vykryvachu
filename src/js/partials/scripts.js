(function () {
  jQuery('.article h3').each(function(i,elem) {
    var titleNumber = i + 1;
    var counterValue;
    if (titleNumber < 10){
      counterValue = "0" + titleNumber
    }else{
      counterValue = titleNumber
    }
    jQuery(this).append( "<a class='article__counter'></a>" );
    jQuery(this).attr( 'id', 'header-' + titleNumber);
    jQuery(this).children(".article__counter").attr( 'href', '#header-' + titleNumber);
    jQuery(this).children(".article__counter").text(counterValue);


  });
  jQuery('#js-mobile-nav-btn').click(function(){
    jQuery('body').addClass('overflow-hidden');
    jQuery('#js-mobile-nav').addClass('open');
	});
  jQuery('#js-mobile-nav-close-btn').click(function(){
    jQuery('body').removeClass('overflow-hidden');
    jQuery('#js-mobile-nav').removeClass('open');
	});

  jQuery('.js-form-btn').click(function(){
    if( jQuery('#js-mobile-nav').hasClass('open')){
      jQuery('#js-mobile-nav').removeClass('open');
    }
    jQuery('#js-form').addClass('open');
    if(jQuery('body').hasClass('overflow-hidden')){
      return;
    }else{
      jQuery('body').addClass('overflow-hidden');
    }

  });
  jQuery('.js-form-close-btn').click(function(){
    jQuery('body').removeClass('overflow-hidden');
    jQuery('#js-form').removeClass('open');
  });


  jQuery('a[href*="#"]').bind("click", function(e){
		var anchor = $(this);
    jQuery('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top}, 1000);
		e.preventDefault();
	});




}());

