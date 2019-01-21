///////////////Button on Top in Blog/////////////////

  $(window).resize(function(event) {
    if($(window).width() <= 992){
      $('.button_up').addClass('button_up_hidden');
    } else{
      $('.button_up').removeClass('button_up_hidden');
    }
  });

  if($(window).width() <= 992){
    $('.button_up').addClass('button_up_hidden');
  } else{
    $('.button_up').removeClass('button_up_hidden');
  }

  $('.button_up').on('click', function () {
      $('body,html').animate({
          scrollTop: 0
      }, 1000);
      return false;
  });

  $(window).scroll(function(event) {

    if( $('.button_up').offset().top < 800 ){

      $('.button_up').removeClass('button_up_visibility');
    } else{
      $('.button_up').addClass('button_up_visibility');
    }
  });