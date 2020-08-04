// polyfill
window.requestAnimationFrame_next = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();
  
  var speed = 3000;
  (function currencySlide_next(){
      var currencyPairWidth_next = $('.slideItem_next:first-child').outerWidth();
      $(".slideContainer_next").animate({marginLeft:-currencyPairWidth_next},speed, 'linear', function(){
                  $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
          });
          requestAnimationFrame_next(currencySlide_next);
  })();
  


  window.requestAnimationFrame_prev = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();
  
  
  (function currencySlide_prev(){
      var currencyPairWidth_prev = $('.slideItem_prev:first-child').outerWidth();
      
      $(".slideContainer_prev").animate({marginLeft :+currencyPairWidth_prev},speed, 'linear', function(){
                  $(this).css({marginLeft :0}).find("li:first").after($(this).find("li:last"));
          });
          requestAnimationFrame_prev(currencySlide_prev);
  })();