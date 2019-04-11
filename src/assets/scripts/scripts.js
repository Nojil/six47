/// smooth scroll
$('.scrolling').on('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 500);
    event.preventDefault();
});

var doc_height = $(document).height();
$(window).on('scroll', function () {
    if ($(this).scrollTop() > (doc_height - 1000)) {
        $('.scroll-top.active').removeClass('active');
        $('.scroll-top').addClass('active');
    } else {
        $('.scroll-top').removeClass('active');
    }
});
$('.scroll-top').on('click', function () {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});

$('.sm-nav-toggler').on('click', function () {
    $('.floating-menu').toggleClass('nav-open');
});