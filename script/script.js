//----------------- DARK / LIGHT
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    //change theme of the body
    document.querySelector('.header').classList.toggle('dark');
    document.querySelector('main').classList.toggle('dark');
    document.querySelector('footer').classList.toggle('dark');
});


//------------Shrink header
jQuery(function ($) {
    var $nav = $('header');
    var $navbar = $('.navbar');
    var $win = $(window);
    var winH = $win.height();   // Get the window height.

    $win.on("scroll", function () {
        if ($(this).scrollTop() > winH) {
            $nav.addClass('shrink');
            $navbar.removeClass('col-9 col-md-10');
            $navbar.addClass('col-5 col-md-8');
        } else {
            $nav.removeClass('shrink');
            $navbar.removeClass('col-5 col-md-8');
            $navbar.addClass('col-9 col-md-10');
        }
    }).on("resize", function () { // If the user resizes the window
        winH = $(this).height(); // you'll need the new height value
    });

});

// --------- Toggle menu
$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('.menu-toggle').toggleClass('active')
        $('nav').toggleClass('active')
        $('.dropdown').toggleClass('dropright')
        $('.navbar').toggleClass('col-md-12')
        // $('.navbar').toggleClass('align-items-center')
        // $('.navbar').toggleClass('justify-content-end')
        $('.navbar').toggleClass('d-flex')
        // $('.navbar').toggleClass('d-inline')
        $('.flags').toggleClass('flag')
        $('.iconos').toggleClass('icono')
    })
});
