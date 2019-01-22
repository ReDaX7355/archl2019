'use strict';

var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      centeredSlides: false,
      spaceBetween: 0,
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });



$(document).ready(function($) {

  //////////Button Menu///////////
  $('.menu_trigger').on('click', function(){
    $(this).toggleClass('menu_trigger_active');
    $('.mobile_nav').toggleClass('mobile_nav_active');
    $('.page_wrapper').toggleClass('page_slide');
  });

  //////////Mobile Menu///////////
  $('.mobile_nav li a').on('click', function(){
    $('.menu_trigger').toggleClass('menu_trigger_active');
    $('.mobile_nav').toggleClass('mobile_nav_active');
    $('.page_wrapper').toggleClass('page_slide');
  });

  if($('.mobile_nav').hasClass('mobile_nav_active')){
	  $('.page_wrapper').on('click', function(){
	  	$('.menu_trigger').toggleClass('menu_trigger_active');
	    $('.mobile_nav').toggleClass('mobile_nav_active');
	    $('.page_wrapper').toggleClass('page_slide');
	  });
  };

  ////////// Optimization For Mobile////////////
  $(window).resize(function(event) {
    if( $(window).width() > 992 ){
      $('.menu_trigger').removeClass('menu_trigger_active');
      $('.mobile_nav').removeClass('mobile_nav_active');
      $('.page_wrapper').removeClass('page_slide');
    };
  });
  


  ///////Button on Top///////////
  $('.go_up').on('click', function () {
      $('body,html').animate({
          scrollTop: 0
      }, 1000);
      return false;
  });  







////////// Links Navigation//////////
  $('#1, #6').click(function(){
    // скорость скролла
    var speed = 1000;
    
    // место скролла
    var top = $('#home').offset().top;
    $('.menu-tr').toggleClass('rotate');
    if($(window).width() < 890){
      $('nav ul').slideToggle(300);
      $('html, body').animate({scrollTop: top}, speed);
    } else{
      $('html, body').animate({scrollTop: top}, speed);
    }   
    
    return false;
  });

  $('#2, #7').click(function(){
    // скорость скролла
    var speed = 1000;
    
    // место скролла
    var top = $('#projects').offset().top;
    $('.menu-tr').toggleClass('rotate');
    if($(window).width() < 890){
      $('nav ul').slideToggle(300);
      $('html, body').animate({scrollTop: top}, speed);
    } else{
      $('html, body').animate({scrollTop: top}, speed);
    }   
    
    return false;
  });

  $('#3, #8').click(function(){
    // скорость скролла
    var speed = 1000;
    
    // место скролла
    var top = $('#solutions').offset().top;
    $('.menu-tr').toggleClass('rotate');
    if($(window).width() < 890){
      $('nav ul').slideToggle(300);
      $('html, body').animate({scrollTop: top}, speed);
    } else{
      $('html, body').animate({scrollTop: top}, speed);
    }   
    
    return false;
  });

  $('#5, #10').click(function(){
    // скорость скролла
    var speed = 1000;
    
    // место скролла
    var top = $('#contact').offset().top;
    $('.menu-tr').toggleClass('rotate');
    if($(window).width() < 890){
      $('nav ul').slideToggle(300);
      $('html, body').animate({scrollTop: top}, speed);
    } else{
      $('html, body').animate({scrollTop: top}, speed);
    }   
    
    return false;
  });

  $('#11, #14').click(function(){
    // скорость скролла
    var speed = 1000;
    
    // место скролла
    var top = $('#about').offset().top;
    $('.menu-tr').toggleClass('rotate');
    if($(window).width() < 890){
      $('nav ul').slideToggle(300);
      $('html, body').animate({scrollTop: top}, speed);
    } else{
      $('html, body').animate({scrollTop: top}, speed);
    }   
    
    return false;
  });

  $('#12, #15').click(function(){
    // скорость скролла
    var speed = 1000;
    
    // место скролла
    var top = $('#comments').offset().top;
    $('.menu-tr').toggleClass('rotate');
    if($(window).width() < 890){
      $('nav ul').slideToggle(300);
      $('html, body').animate({scrollTop: top}, speed);
    } else{
      $('html, body').animate({scrollTop: top}, speed);
    }   
    
    return false;
  });

  $('#13, #16').click(function(){
    // скорость скролла
    var speed = 1000;
    
    // место скролла
    var top = $('#news').offset().top;
    $('.menu-tr').toggleClass('rotate');
    if($(window).width() < 890){
      $('nav ul').slideToggle(300);
      $('html, body').animate({scrollTop: top}, speed);
    } else{
      $('html, body').animate({scrollTop: top}, speed);
    }   
    
    return false;
  });

});

  