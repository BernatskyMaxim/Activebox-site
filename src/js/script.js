$(function() {

    // Fixed Header
    let header = $('#header');
    let intro = $('#intro');
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $('#nav');
    let navToggle = $('#navToggle');
    
    $(window).on('scroll load', function() {
        scrollPos = $(this).scrollTop();
        
        if ( scrollPos > introH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    });
    
    // Smooth scroll
    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass('show');

        $('html, body').animate({
            scrollTop: elementOffset - 70
        }, 1000);
    });

    // Nav Toggle
    navToggle.on('click', function(event) {
        event.preventDefault();

        nav.toggleClass('show');
    });   
    
});