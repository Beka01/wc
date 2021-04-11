"use strict";


$(document).ready(function(){


    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
        let act = $(this).hasClass("is-active");
        if(act){
            $(".menu-wrap").show(1500);
            //$(".header-wrap").removeClass("fixed");
        } else {
            $('.menu-wrap').hide(1500);
            //$(".header-wrap").addClass("fixed");
        }
    });
    
    function myFunction(x){
        if(x.matches){
            $('.menu-wrap').css("display", "none");
            $('.menu-wrap').addClass("mobile-active");
            $(".menu-wrap").removeClass("p-4");
        } else {
            $('.menu-wrap').css("display", "flex");
            $(".menu-wrap").removeClass("mobile-active");
            $(".hamburger").removeClass("is-active");
            $(".menu-wrap").addClass("p-4");
        }
    }
    let x = window.matchMedia("(max-width: 991px)");
    myFunction(x);
    x.addListener(myFunction);

    $(document).scroll(function(){
        var st = $(this).scrollTop();
        if(st > 250) {
            let act = $(".hamburger").hasClass("is-active");
            if(!act){
                $(".header-wrap").addClass('fixed');
                $(".stiky-off").css("display", "none");
                
            } else{
                $(".header-wrap").removeClass('fixed');
                $(".stiky-off").css("display", "flex");
                
            }
        } else {
            $(".header-wrap").removeClass('fixed');
            $(".stiky-off").css("display", "flex");
        }
    });

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