"use strict";

const DEFAULT_LOCALE = 'ru';
var currentLocale = localStorage.getItem('locale') || DEFAULT_LOCALE;

$(document).ready(function(){
    // TEMPLATES LOADING FUNCTION
    let templates = [
        ['layouts/menu.html', 'main-menu-wc'],
        ['layouts/header.html', 'header-wc'],
        ['layouts/footer.html', 'footer-wc']
    ];
    
    const templatesLength = templates.length;
    let templatesCnt = 0;
    for(let t of templates){
        templatesCnt++;
        loadTemplates(t[0], t[1], templatesCnt == templatesLength, templatesCnt, templatesLength);
    }
    
    function loadTemplates(url, id, isLast, templatesCnt, templatesLength){
      //console.log(url,templatesCnt, templatesLength);
      $.get(url, function(headerEl) {
            //console.log("loaded url" + url);
            let headerContainer = document.getElementById(id);
            if(headerContainer){
                headerContainer.innerHTML = headerEl; 
            }
            if(isLast){
            //console.log("temp ready");
                templatesReady();
            }
      });
    }
    
    function templatesReady(){
        localize();
        loadLandIndex();
        logoSwitcher();
        dateLangSwitcher();
        $('.lang-icons a').on('click', function(e){
            const thisel = $(this);
            currentLocale = thisel.data('lang');
            localStorage.setItem('locale', currentLocale);
            localize();  
            logoSwitcher(); 
            dateLangSwitcher(); 
            e.preventDefault();
            return false;
        });

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
        
    }

    // LOCALIZATION FUNCTIONS
    function localize(){
        // MENU HEADER
        $.get('locale/header/' + currentLocale + '.json', function(ans){
            localizeMenu(ans);
           
        }).fail( function (){
            $.get('locale/header/' + DEFAULT_LOCALE + '.json', function(ans){
                localizeMenu(ans);
            });
        });

        //PROJECT SECTIONS
        $.get('locale/body-static-txt/' + currentLocale + '.json', function(ans){
            localizeProjectSection(ans);
           
        }).fail( function (){
            $.get('locale/body-static-txt/' + DEFAULT_LOCALE + '.json', function(ans){
                localizeProjectSection(ans);
            });
        });

    }
    
    function loadLandIndex(){
        $("a[data-lang]").on('click', function(e){
            const thisel = $(this);
            currentLocale = thisel.data('lang');
            localStorage.setItem('locale', currentLocale);
            document.location = thisel.attr('href');
            e.preventDefault();
            return false;
        });
    }

    // MENU HEADER
    function localizeMenu(menu){
        for (let m of menu.links){
            $('.menu-link a[href='+m.url.replace('\.', '\\.')+']');
        }
        for (let t in menu.texts){
            $('#' + t).text(menu.texts[t]);
        }
    }

    // PROJECT SECTIONS
    function localizeProjectSection(section){
        for (let t in section.texts){
            $('#' + t).text(section.texts[t]);
        }
        
    }

    // LOGO TOP SWITCHER
    function logoSwitcher(){
        if (currentLocale === "ru"){
            $("#logo-footer-ru").css("display", "flex");
            $("#logo-footer-en").css("display", "none");
            $("#logo-footer-tj").css("display", "none");

            $("#logo-top-ru").css("display", "flex");
            $("#logo-top-en").css("display", "none");
            $("#logo-top-tj").css("display", "none");

        }else if(currentLocale === "en"){
            $("#logo-footer-ru").css("display", "none");
            $("#logo-footer-en").css("display", "flex");
            $("#logo-footer-tj").css("display", "none");

            $("#logo-top-ru").css("display", "none");
            $("#logo-top-en").css("display", "flex");
            $("#logo-top-tj").css("display", "none");

        }else if(currentLocale === "tj"){
            $("#logo-footer-ru").css("display", "none");
            $("#logo-footer-en").css("display", "none");
            $("#logo-footer-tj").css("display", "flex");

            $("#logo-top-ru").css("display", "none");
            $("#logo-top-en").css("display", "none");
            $("#logo-top-tj").css("display", "flex");

        }
    }

    //TODAY DATE LANG SWITCHER
    function dateLangSwitcher(){
        let dateOptions = {weekday: 'short', year: 'numeric', month: 'long', day: 'numeric'};
        if (currentLocale === "ru"){
            let todayDate = new Date().toLocaleDateString('ru-RU', dateOptions);
            $('#todayDate').html(todayDate);
        } else if (currentLocale === "en"){
            let todayDate = new Date().toLocaleDateString('en-GB', dateOptions);
            $('#todayDate').html(todayDate);
        } else if (currentLocale === "tj"){
            let todayDate = new Date().toLocaleDateString('ru-RU', dateOptions);
            $('#todayDate').html(todayDate);
        }
    }
});