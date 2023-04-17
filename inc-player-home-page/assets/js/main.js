!function(e){"use strict";if(e(window).on("load",function(){e("#preloader").length&&e("#preloader").delay(5).fadeOut("slow",function(){e(this).remove()})}),e(".typed").length){var t=e(".typed").data("typed-items");t=t.split(","),new Typed(".typed",{strings:t,loop:!0,typeSpeed:100,backSpeed:50,backDelay:2e3})}e(document).on("click",".nav-menu a, .scrollto",function(t){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var o=e(this.hash);if(o.length){t.preventDefault();var a=o.offset().top;return e("html, body").animate({scrollTop:a},1500,"easeInOutExpo"),e(this).parents(".nav-menu, .mobile-nav").length&&(e(".nav-menu .active, .mobile-nav .active").removeClass("active"),e(this).closest("li").addClass("active")),e("body").hasClass("mobile-nav-active")&&(e("body").removeClass("mobile-nav-active"),e(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close")),!1}}}),e(document).ready(function(){if(window.location.hash){var t=window.location.hash;if(e(t).length){var o=e(t).offset().top;e("html, body").animate({scrollTop:o},1500,"easeInOutExpo")}}}),e(document).on("click",".mobile-nav-toggle",function(t){e("body").toggleClass("mobile-nav-active"),e(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close")}),e(document).click(function(t){var o=e(".mobile-nav-toggle");o.is(t.target)||0!==o.has(t.target).length||e("body").hasClass("mobile-nav-active")&&(e("body").removeClass("mobile-nav-active"),e(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"))});var o=e("section"),a=e(".nav-menu, #mobile-nav");e(window).on("scroll",function(){var t=e(this).scrollTop()+300;o.each(function(){var o=e(this).offset().top,n=o+e(this).outerHeight();t>=o&&t<=n&&(t<=n&&a.find("li").removeClass("active"),a.find('a[href="#'+e(this).attr("id")+'"]').parent("li").addClass("active")),t<200&&e(".nav-menu ul:first li:first").addClass("active")})}),e(window).scroll(function(){e(this).scrollTop()>100?e(".back-to-top").fadeIn("slow"):e(".back-to-top").fadeOut("slow")}),e(".back-to-top").click(function(){return e("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1}),e('[data-toggle="counter-up"]').counterUp({delay:10,time:1e3}),e(".skills-content").waypoint(function(){e(".progress .progress-bar").each(function(){e(this).css("width",e(this).attr("aria-valuenow")+"%")})},{offset:"80%"})}(jQuery),particlesJS("particles-js",{particles:{number:{value:120,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"polygon",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3.5,random:!0,anim:{enable:!0,speed:15,size_min:1,sync:!0}},line_linked:{enable:!0,distance:100,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!0,straight:!1,out_mode:"bounce",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:481.0236182596568}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"bubble"},onclick:{enable:!0,mode:"repulse"},resize:!0},modes:{grab:{distance:1500,line_linked:{opacity:1}},bubble:{distance:1315.565083928179,size:4,duration:2,opacity:.7227487189481971,speed:3},repulse:{distance:500,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0});

           document.addEventListener("contextmenu", function (e) {
             e.preventDefault();
           }, false);
           document.addEventListener("keydown", function (e) {
             //document.onkeydown = function(e) {
             // "I" key
             if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
               disabledEvent(e);
             }
             // "J" key
             if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
               disabledEvent(e);
             }
             // "S" key + macOS
             if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
               disabledEvent(e);
             }
             // "U" key
             if (e.ctrlKey && e.keyCode == 85) {
               disabledEvent(e);
             }
             // "F12" key
             if (event.keyCode == 123) {
               disabledEvent(e);
             }
           }, false);
           function disabledEvent(e) {
             if (e.stopPropagation) {
               e.stopPropagation();
             } else if (window.event) {
               window.event.cancelBubble = true;
             }
             e.preventDefault();
             return false;
           }