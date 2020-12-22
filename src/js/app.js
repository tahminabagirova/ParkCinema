'use strict';
import 'bootstrap/dist/js/bootstrap';
import 'owl.carousel/dist/owl.carousel';

$(function () {
  // ------------- DECLARE ONTOUCH EVENT ------------- //
  if ("ontouchstart" in document.documentElement) {
    //touch
    $('#toggleMenu').addClass('touch');
  } else {
    $('#toggleMenu').removeClass('touch');
  }


  //#region TOGGLE MENU BUTTON
  let header = $('header');
  let menuModal = $('#menuModal');
  let toggleMenu = $('#toggleMenu');

  toggleMenu.click(function () {
    $(this).toggleClass('active');
    header.toggleClass('active');
    $('.innerMenuModal').slideToggle();
    menuModal.toggleClass('active');
    $('body').toggleClass('ov-hidden');
  });
  //#endregion

  //#region LANGUAGE SELECT DROPDOWN
  let innerItems = $('.inner-items-top-footer');
  $('.drop-down-key').click(function () {
    $(this).next().slideToggle();
    $(this).children().toggleClass('active');
  });

  $('.drop-down-language li').click(function () {
    $(this).parents('.drop-down-language').prev().find('p').text($(this).text().trim());
    $(this).parents('.drop-down-language').slideToggle();
    innerItems.removeClass('active');
    let selectedDataId = $(this).data('id');
    $('.drop-down-language li').removeClass('active');
    $(this).addClass('active');
  });

  $('.langSelectContainer').click(function () {
    $('.selectLanguage').slideDown();
  });

  $('.closeIconLang').click(function () {
    $('.selectLanguage').slideUp();
  });
  //#endregion


  //#region Menu Owl carousel
  $('#menuModal .owl-carousel').owlCarousel({
    items: 4,
    dots: false,
    nav: true,
    navText: ["<img src='../assets/Arrow left.svg'>", "<img src='../assets/Arrow right.svg'>"],
    loop: true,

    responsive: {
      1281: {
        stagePadding: false
      },

      768: {
        // loop:false,
        items: 4,
        stagePadding: 60
      },

      0: {
        items: 3,
        stagePadding: 30
      }
    }
  });
  //#endregion


  //#region OWL CAROUSEL HOME PAGE
  let $owlMain = $('#main .main-bottom .owl-carousel');
  let mainTop = $('.main-top');

  //data position index
  $owlMain.children().each(function (index) {
    $(this).attr('data-position', index); // NB: .attr() instead of .data()
  });
  $owlMain.owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    center: true,
    navText: ["<img src='../assets/Arrow left.svg'>", "<img src='../assets/Arrow right.svg'>"],
    stagePadding: 100,

    responsive: {
      0: {
        items: 3
      },

      0: {
        items: 3
      },

      450: {
        navText: ["<img src='../assets/Vector right.svg'>", "<img src='../assets/Vector left.svg'>"],
        items: 4
      },

      499: {
        items: 4
      },

      690: {
        items: 5
      },

      768: {
        items: 5
      },

      900: {
        items: 7
      },

      1200: {
        items: 9
      },

      1600: {
        items: 10
      },

      2000: {
        items: 13
      },
    }
  });

  //data position speed
  $(document).on('click', '#main .main-bottom .owl-item-child', function () {
    let speed = 300; // in ms
    $owlMain.trigger('to.owl.carousel', [$(this).data('position'), speed]);
  });

  //carousel items data-src transfer to mainTop 
  $owlMain.on('changed.owl.carousel', function (el) {
    let dataSrc = $('#main .main-bottom .center .owl-item-child').attr('data-src');
    mainTop.css('background-image', 'url("' + dataSrc + '")');
    videoSrcTransfer();
  });

  //POP UP FOR VIDEO TRAILER <START>
  let popUpVideoSrc = $('.popUpVidSrc');
  let playBtn = $('.playButton');
  let overlayVidSrc = $('.overlayPopUpVidSrc');
  let closeBtn = $('.popUpVidSrc #times');

  playBtn.click(function () {
    videoSrcTransfer();
    popUpVideoSrc.addClass('active');
    closeBtn.removeClass('close');
    $('body').addClass('ov-hidden');
  });

  overlayVidSrc.click(function () {
    popUpVideoSrc.removeClass('active');
    $('body').removeClass('ov-hidden');
  });

  closeBtn.click(function () {
    popUpVideoSrc.removeClass('active');
    $(this).addClass('close');
    $('body').removeClass('ov-hidden');
  });

  //video src transfer to pop up iframe
  function videoSrcTransfer() {
    let dataVidSrc = $('#main .main-bottom .center .owl-item-child').attr('data-video-src');
    let fullDataVidSrc = dataVidSrc.replace('watch?v=', 'embed/');
    $('.popUpVidSrc iframe').attr('src', fullDataVidSrc);
  }
  // <END>
  //#endregion


  //#region QUICK BUY
  let quickBuy = $('#quickBuy');
  let quickBuyBtn = $('#quickBuyBtn');
  let closeQuickBuy = $('.closeQuickBuy');

  quickBuyBtn.click(function () {
    quickBuy.addClass('active');
    quickBuyBtn.addClass('active');
    $('body').addClass('ov-hidden');
  });

  closeQuickBuy.click(function () {
    quickBuy.removeClass('active');
    quickBuyBtn.removeClass('active');
    $('body').removeClass('ov-hidden');
  });


  $('.moviesInner .card-hedaer').click(function () {
    $('.moviesInner .card-hedaer').not($(this)).removeClass('active');
    $('.moviesInner .card-body').not($(this).next()).slideUp();

    $(this).toggleClass('active');
    $(this).next().slideToggle();
    console.log("done")
  })
  //#endregion


  //#region SOON POP UP TRAILER
  $('#soon .playButtonPoster , .trailer').click(function () {
    $('.popUpVidSrc').addClass('active');
    console.log('clicked')
  })
  //#endregion


  //#region QUICK BUY MOBILE CAROUSEL
  $('#dateQuickBuy .owl-carousel').owlCarousel({
    dots: false,
    nav: true,
    navText: ["<img src='../assets/Line 4 (Stroke).svg'>", "<img src='../assets/Line 5 (Stroke).svg'>"],

    responsive: {
      0: {
        items: 5,
        margin: 10,
      },

      991: {
        items: 4
      }
    }
  });

  $('#mobileSession .owl-carousel').owlCarousel({
    dots: false,
    nav: false,
    margin: 10,
    nav: false,

    responsive: {
      0: {
        items: 4,
      },
      500: {
        items: 6
      }
    }
  });


  //#endregion

  //#region SCHEDULE
  $('#dateSchedule .owl-carousel').owlCarousel({
    dots: false,
    loop: true,
    nav: true,
    navText: ["<img src='../assets/Line 4 (Stroke).svg'>", "<img src='../assets/Line 5 (Stroke).svg'>"],

    responsive: {
      0: {
        items: 5,
        margin: 10,
      },

      991: {
        items: 7
      }
    }
  });

  // schedule page top
  $('.advanced-search .inner').click(function () {
    $('.advanced-search').prev().slideToggle();
    $(this).toggleClass('active');
  });

  //schedule cards toggle
  $('.toggleSchedule').click(function () {
    $(this).parents($('.scheduleCard')).toggleClass('active');
    $(this).toggleClass('active');
    // $(this).parent().prev().slideToggle()
    
  })


  //filter
  $('.filter .sessionInner .owl-carousel').owlCarousel({
    loop: false,
    items: 3
  });


  $('.filterButton').click(function () {
    $('.filter').addClass('active');
    $('body').addClass('ov-hidden');
  });

  $('.filter .times').click(function () {
    $('.filter').removeClass('active');
    $('body').removeClass('ov-hidden');
  })
  //#endregion


  //#region BUY TICKET
  $('#pickDate .owl-carousel').owlCarousel({
    nav: false,
    dots: false,
    navText: ["<img src='../assets/Line 4 (Stroke).svg'>", "<img src='../assets/Line 5 (Stroke).svg'>"],
    // loop:true

    responsive: {
      0: {
        items: 4,
      },

      499: {
        items: 5,
      },

      1023: {
        items: 7
      }
    }
  });

  //large accordion
  $('.large-accordion-header').click(function () {
    $(this).next().slideToggle();
  })

  // input count
  $('.minus').click(function () {
    let $input = $(this).parent().find('input');
    let count = parseInt($input.val()) - 1;
    count = count < 0 ? 0 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    let $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });


  $('.mobile-version-table-carousel .owl-carousel').owlCarousel({
    loop:true,
    margin:20,

    responsive:{
      0:{
        margin:20,
        items:1,
        stagePadding:70
      },

      400:{
        margin:20,
        items:1,
        stagePadding:100
      },

      450:{
        margin:20,
        items:2,
        stagePadding:10
      },

      512:{
        margin:20,
        items:2,
        stagePadding:40
      },

      555:{
        margin:20,
        items:2,
        stagePadding:60
      },

      630:{
        margin:20,
        items:2,
        stagePadding:80
      },
    }
  });

  //#endregion


  //#region PROFILE
  $('.profile-popUp').click(function(){
    $('.user-popUp').slideToggle();
    $('.profile-popUp').toggleClass('active');
  });

  // tab main page desktop verion
  $('.menu-list .tab-item').on('click', function(e){
    e.preventDefault();
    $('.menu-list .tab-item').removeClass('active');
    $(this).addClass('active');
    $('#main-profile-id .tab-body').removeClass('active');
    
    let id = $(this).attr('href');
    $('' + id).addClass('active');
  });

  // tab main page mobile version
  $('.carousel-profile-page .item').on('click', function(e){
    e.preventDefault();
    $('.carousel-profile-page .item').removeClass('active');
    $(this).addClass('active');
    $('#tab-body-mobile .tab-body').removeClass('active');
    
    let id = $(this).attr('href');
    $('' + id).addClass('active');
  });

  // mobile carousel tab items
  $('.carousel-profile-page .owl-carousel').owlCarousel({
    loop:false,
    stagePadding:30,
    margin:0,

    responsive:{
      0:{
        items:2,
      },

      380:{
        items:2,
        stagePadding:55,
      },

      420:{
        items:3,
        stagePadding:5,
      },

      470:{
        items:3,
        stagePadding:25,
      },

      500:{
        items:3,
        stagePadding:65,
      },

      600:{
        items:4,
        stagePadding:3,
      },
    }
  });

  // bonuse card open
  $('.mobile-tab-body .bonuse-card-container button').click(function(){
    $('.mobile-tab-body .bonuse-card-container').slideUp();
    $('.add-bonuse-card-wrapper').slideDown();
  });

  // bonuse card close
  $('.mobile-tab-body .add-bonuse-card-wrapper .close-add-bonuse-card , .mobile-tab-body .add-bonuse-card-wrapper .cancel-add-bonuse-card').click(function(){
    $('.add-bonuse-card-wrapper').slideUp();
    $('.mobile-tab-body .bonuse-card-container').slideDown();
  });

  // choose where send open
  $('.mobile-tab-body .activation-add-bonuse-card').click(function(){
    $('.mobile-tab-body .choose-where-send').slideDown();
    $('.mobile-tab-body .add-bonuse-card-wrapper').slideUp();
  });

  // choose where send close
  $('.mobile-tab-body .close-choose-where-send').click(function(){
    $('.mobile-tab-body .choose-where-send').slideUp();
    $('.mobile-tab-body .bonuse-card-container').slideDown();
  });

  //promo code open
  $('.mobile-tab-body .promo-code-container .promo-code').click(function(){
    $('.mobile-tab-body .promo-code-container .promo-code').slideUp();
    $('.promo-code-container .inputGroup').slideDown();
    $('.activate-promo-code').slideDown();
  });

  
  $('.mobile-tab-body .activate-promo-code-button').click(function(){
    $('.mobile-tab-body .promo-code-activated').slideDown();
    $('.promo-code-container').slideUp();
    $('.mobile-tab-body .activate-promo-code-button').slideUp();
  });

  $('.mobile-tab-body .close-promo-code').click(function(){
    $('.promo-code-container .inputGroup').slideUp();
    $('.mobile-tab-body .promo-code-activated').slideUp();
    $('.promo-code-container').slideDown();
    $('.mobile-tab-body .promo-code').slideDown();
  });

  //profile edit upload image
  $('.profile-image-edit input').click(function(){
    $('.overlay-profile-image-edit').addClass('active');
    setTimeout(function(){
    $('.overlay-profile-image-edit').removeClass('active');
     }, 1000);
  })
  

  //#endregion
  

  //#region  CINEMA 
  //halls
  $('.halls-content .owl-carousel').owlCarousel({
    nav:false,
    dots:false,
    // loop:true,
    

    responsive:{
      0:{
        items:3
      },
      565:{
        items:4
      } 
    }
  });
  //#endregion
});