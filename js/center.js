$(document).ready(function(){
    
    $('body').on('click','.nav-burger' , function(){
        $(this).toggleClass('nb-active');
        $('.nav-right').toggleClass('nb-active');
    });
    
    $('body').on('click','.js-call' , function(){
        $('.modal-call').show(500);
        $('.modal-back').show(500);
    });
    
    $('body').on('click','.js-more' , function(){
        $('.modal-more').show(500);
        $('.modal-back').show(500);
    });
    
    $('body').on('click','.modal-back' , function(){
        $('.modal-call').hide(500);
        $('.modal-more').hide(500);
        
        $('.modal-back').hide(500);
    });
    
    $('body').on('click','.modal-close' , function(){
        $('.modal-call').hide(500);
        $('.modal-more').hide(500);
        
        $('.modal-back').hide(500);
    });
    
    /*
    $('.section-price').waypoint({
        handler: function(direction) {

            if (direction === 'down') {
                $('.navigation').addClass('nav-fix').addClass('fadeInDown');
                
            }
            else{
                $('.navigation').removeClass('nav-fix').removeClass('fadeInDown');
            }

        },
        offset: 0
    });*/
    
         /* SLICK SLIDERS */
    
        $('#slick-slider-main').slick({
            centerMode: false,
            slidesToShow: 1,
            centerPadding: '0px',
            arrows: true,
            dots: true,
            autoplay: true,
            autoplaySpeed: 4000,
            customPaging : function(slider, i) {
                var thumb = ['ЕНТ', 'НИШ', 'ЭКЗАМЕНЫ', 'SAT', 'ОЛИМПИАДЫ'];
                return '<span class="slick-thumb">'+thumb[i]+'</span>';
            },

        });
    
        $('.slick-slider-s').slick({
            centerMode: false,
            slidesToShow: 2,
            centerPadding: '0px',
            arrows: true,
            dots: false,
            autoplay: true,
            autoplaySpeed: 4000,
            responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 1,
              }
            }
            ]
        });
    
        $('#slick-slider-t').slick({
            centerMode: false,
            slidesToShow: 1,
            centerPadding: '0px',
            arrows: true,
            dots: false,
            autoplay: false,
            autoplaySpeed: 4000
        });

        $('#slick-slider-0').slick({
            centerMode: false,
            slidesToShow: 1,
            centerPadding: '0px',
            arrows: true,
            dots: false,
            autoplay: true,
            autoplaySpeed: 4000
        });    
    
        $('#slick-slider-1').slick({
            centerMode: false,
            slidesToShow: 1,
            centerPadding: '0px',
            arrows: true,
            dots: false,
            autoplay: true,
            autoplaySpeed: 4000
        });   

        $('.navigation').InPageNav({
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

