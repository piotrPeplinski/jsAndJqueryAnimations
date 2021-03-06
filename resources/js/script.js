$(document).ready(function () {

  /* sticky nav */
  $('.js-nav').waypoint(function (direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  },
    {
      offset: '50px;'
    });
  /* scroll buttons */
  $(".js-signup").click(function () {
    $('html, body').animate({
      scrollTop: $(".section-plans").offset().top - 50
    }, 2000);
  });
  $(".js-show-more").click(function () {
    $('html, body').animate({
      scrollTop: $(".section-features").offset().top - 50
    }, 500);
  });

  /* smooth scrolling snippet (required to add anchors in html file) */
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 40
          }, 1200
          );
        }
      }
    });

  /* scroll animations */
  $('.js-fade-in').waypoint(function (direction) {
    $('.js-fade-in').addClass('animate__animated animate__fadeInUp');
  }, { offset: '50%' });

  $('.js-phone').waypoint(function (direction) {
    $('.js-phone').addClass('animate__animated animate__fadeInUpBig');
  }, { offset: '50%' });

  $('.section-plans').waypoint(function (direction) {
    $('.js-pulse').addClass('animate__animated animate__pulse');
  }, { offset: '20%' });

  /* nav bar */
  $('.nav-burger').click(function () {
    $('.main-nav').slideToggle(200)
    if ($('.nav-burger ion-icon').attr('name') == 'reorder-three') {
      $('.nav-burger ion-icon').attr('name', 'close')
    } else {
      $('.nav-burger ion-icon').attr('name', 'reorder-three')
    }

  });
});
