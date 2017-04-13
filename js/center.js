$(document).ready(function(){
    
    $('body').on('click','.burger' , function(){
        $(this).toggleClass('b-active');
        $('.navigations').toggleClass('navigations-active');
    });
    
    $('body').on('click','.js-cabinet' , function(){
        $('.modal-wrapper').addClass('js-active');
    });
    
    $('body').on('click','.modal-close' , function(){
        $('.modal-wrapper').removeClass('js-active');
    });
    
    $('.section-about').waypoint({
        handler: function(direction) {

            if (direction === 'down') {
                $('.navigation').addClass('nav-fix').addClass('fadeInDown');
                
            }
            else{
                $('.navigation').removeClass('nav-fix').removeClass('fadeInDown');
            }

        },
        offset: 200
    });
    
    function scrollToAnchor(aid){
        var aTag = $("a[name='"+ aid +"']");
        $('html,body').animate({scrollTop: aTag.offset().top},'slow');
    }

    $('.js-want').click(function() {
        scrollToAnchor('an-call');
    });
    
         /* SLICK SLIDERS */

        $('#slick-slider-0').slick({
            centerMode: false,
            slidesToShow: 1,
            centerPadding: '0px',
            arrows: true,
            dots: false,
            autoplay: true,
            autoplaySpeed: 4000,
        });    
    
        $('#slick-slider-1').slick({
            centerMode: false,
            slidesToShow: 1,
            centerPadding: '0px',
            arrows: true,
            dots: false,
            autoplay: true,
            autoplaySpeed: 4000,
        });   

        $('.navigations').InPageNav({
            currentClass: 'nav-active',
            scrollSpeed: 1000,
            scrollOffset: 60,
            scrollThreshold: 0.5,
            filter: '',
            easing: 'swing',
            begin: function() {
                },
            end: function() {
                //$('body').removeClass('menu-opened').addClass('menu-closed');
            },
            scrollChange: function($currentListItem) {
                    // Fired when you enter a section and pass the list item of the section
                }
        });
    
});

