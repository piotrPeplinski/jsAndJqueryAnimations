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
});