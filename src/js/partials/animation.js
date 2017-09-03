if(window.innerWidth>=768){
  var scrollMagicController = new ScrollMagic();

  jQuery('.posts .post').each(function(){

  var currentArticle = $(this);
  var post_animation = TweenMax.staggerFromTo(currentArticle, 0.5, {
      position: "relative",
      opacity: 0,
      bottom: "-70px"
    },
    {
      position: "relative",
      opacity: 1,
      bottom: "0"
    },
    0.2);

  var posts = new ScrollScene({
    triggerElement: currentArticle,
    triggerHook: "onEnter"

  })
    .setTween(post_animation)
    .addTo(scrollMagicController)
  });
};

