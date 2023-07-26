$(document).ready(function () {
    var mainOwl = $('.hero_slider');
    mainOwl.owlCarousel({
        autoplay: true,
        rtl: true,
        smartSpeed: 800,
        loop: true,
        nav: false,
        navText: false,
        dots: true,
        mouseDrag: true,
        navigation: false,
        slideBy: 1,
        items: 1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
    });
    var mainOwl1 = $('.all_clients');
    mainOwl1.owlCarousel({
        autoplay: false,
        rtl: true,
        smartSpeed: 800,
        loop: true,
        nav: false,
        navText: false,
        dots: false,
        mouseDrag: true,
        navigation: false,
        slideBy: 1,
        responsiveClass: true,
        responsive: {
            0:{
            items:3
            },
            480:{
            items: 4
            },
            769:{
            items: 5
            },
            991:{
                items:9
            }
        }
    });


    // humberger_menu 
    $('.toggle_icon_div').click (function(){
        $(this).toggleClass('show');
        $(".menu_left_p").slideToggle();
    });
    $('.heart').click (function(){
        $(this).toggleClass('red_color');
    });
      

    // product owl carewsel 
    

    //Range Slider
    var $range = $(".js-range-slider"),
        $from = $(".from"),
        $to = $(".to"),
        range,
        min = $range.data('min'),
        max = $range.data('max'),
        from,
        to;

    var updateValues = function () {
        $from.prop("value", from);
        $to.prop("value", to);
    };

    $range.ionRangeSlider({
        onChange: function (data) {
            from = data.from;
            to = data.to;
            updateValues();
        }
    });

    range = $range.data("ionRangeSlider");
    var updateRange = function () {
        range.update({
            from: from,
            to: to
        });
    };

    $from.on("input", function () {
        from = +$(this).prop("value");
        if (from < min) {
            from = min;
        }
        if (from > to) {
            from = to;
        }
        updateValues();
        updateRange();
    });

    $to.on("input", function () {
        to = +$(this).prop("value");
        if (to > max) {
            to = max;
        }
        if (to < from) {
            to = from;
        }
        updateValues();
        updateRange();
    });


});