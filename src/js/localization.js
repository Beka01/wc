"use strict";

const DEFAULT_LOCALE = 'ru';
var currentLocale = localStorage.getItem('locale') || DEFAULT_LOCALE;

$(document).ready(function(){
    localize();
    loadLandIndex();
    logoSwitcher();
    dateLangSwitcher();

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