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

    // SLICK SLIDER
    $('.about-gallery-wrap').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint:991,
                settings:{
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint:767,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint:575,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});