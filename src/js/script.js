"use strict";


$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay:true,
        rewind:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            480: {
                items: 1,
                nav: false
            },
            640: {
                items: 2,
                nav: false
            },
            768: {
                items: 3,
                nav: false
            },
            1024: {
                items: 4,
                nav: true,
                loop: false,
            }
        }
    });
});