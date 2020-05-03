(function ($) {
    "use strict";

    jQuery(document).on('ready', function () {


        function initNav() {
            /***MENU TOGGLE ANIMATION***/
            $('div.toggle-normal').on('click', function () {
                $('i.top-bar').toggleClass('top-transform');
                $('i.middle-bar').toggleClass('middle-transform');
                $('i.bottom-bar').toggleClass('bottom-transform');
            });


            /***MENU FERME***/
            $('.section,div#menu-options a').on('click', function () {
                $('nav#theMenu').removeClass('menu-open');
                $('i.top-bar').removeClass('top-transform');
                $('i.middle-bar').removeClass('middle-transform');
                $('i.bottom-bar').removeClass('bottom-transform');
            });

            /***MENU OUVERT***/
            $('div#menuToggle').on('click', function () {
                $('div#menuToggle').toggleClass('active');
                $('body').toggleClass('body-push-toright');
                $('nav#theMenu').toggleClass('menu-open');
            });
        }

            /***INFOS CACHEES***/
            $('#other-skills').hide();

            /***COMPETENCES OUVERTES***/
            $('#button-other-skills-show').on('click', function () {
                $('#other-skills').show();
                $('#button-other-skills-show').hide();
            });

            /***COMPETENCES FERMEES***/
            $('#button-other-skills-hide').on('click', function () {
                $('#other-skills').hide();
                $('#button-other-skills-show').show();
            });

        function initSmoothScroll() {
            /***SMOOTH SCROLL***/
            $('div#menu-options,div#about-btn').find('a[href*=#]:not([href=#])').on('click', function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 900, "swing");
                        return false;
                    }
                }
            });
        }


        function initScrollToTop() {
            /***SCROLL TO TOP***/
            $(window).on('scroll', function () {
                if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
                    $('div#scrollup').addClass('animated flipInY').fadeIn(200);    // Fade in the arrow
                } else {
                    $('div#scrollup').fadeOut(200);
                }
            });

            $('div#scrollup').on('click', function () {
                $("html,body").animate({
                    scrollTop: 0
                }, 600);

                return false;
            });
        }

        /* ---------------------------------------------
         INITIALIZING ALL FUNCTIONS
         --------------------------------------------- */
        initNav();               // for main NAV
        initSmoothScroll();      // enables SmoothScroll
        initScrollToTop();       // Smooth Scroll To Top
    });


    jQuery(window).on('load', function () {

        /***FADES OUT PRE-LOADER***/
        $('div#loading').fadeOut(500);

        /***SCROLL ANIMATION***/
        window.sr = ScrollReveal({reset: false}); // reset false stops repetition of animation
        var commonCards = '#port-add-icon,#map-card,.interest-icon-even,.interest-icon,' +
            '.timeline-dot,.timeline-content,#add-more,#testimonials-card,' +
            '#portfolios-card,#interest-card,#p-one,#p-two,#p-three,#blog-card,#contact-card,#testimonials,.section-title img';
        // Customizing a reveal set
        sr.reveal(commonCards, {duration: 1100});
        sr.reveal('#about-card,.map-label', {duration: 1400, delay: 500});
        sr.reveal('#v-card-holder', {duration: 1400, distance: '150px'});
        //sr.reveal('.skillbar-bar', { duration: 200 });

        var slideRight = {
            distance: '150%',
            origin: 'left',
            duration: 1500
        };

        sr.reveal('.skillbar-bar.mainskill', slideRight);
        

    });


})(jQuery);


