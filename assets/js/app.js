$(function() { 
    $('.nav__item-logo').addClass('logo__rot')
    setTimeout(function(){
        $('.nav__item-logo').removeClass('logo__rot')
      }, 3000);

      $(".nav__item-logo").on("click", function(event) {
        event.preventDefault();
        $('.nav__item-logo').addClass('logo__rot')

        setTimeout(function(){
            $('.nav__item-logo').removeClass('logo__rot')
          }, 3000);
    })
    
    $(window).scroll(function(){
        let wt = $(window).scrollTop();
        let token = $('.token__inner');
        let navigation = $('.navigation');
        let heigt = token.offset().top;
        let navig = navigation.offset().top;
        let heigt2 = heigt - 500;

        if (wt < 10) {
            $('.nav__item-logo').addClass('logo__rot')
            setTimeout(function(){
                $('.nav__item-logo').removeClass('logo__rot')
              }, 3000);
        }

        if (wt >= navig) {
            $('.mob').addClass('mob-active')
            $('.mob').removeClass('token-noneaktive__bg')
        } else {
            $('.mob').removeClass('mob-active')
            $('.mob').addClass('token-noneaktive__bg')
        }

        if (wt >= heigt){
            $('.fg__block').addClass('fg4-active')
            $('.token-bg1').addClass('token-aktive__bg1')
            $('.token-bg1').removeClass('token-noneaktive__bg')
        } 
        
        if (wt < heigt2){
            $('.fg__block').removeClass('fg4-active')
            $('.token-bg1').removeClass('token-aktive__bg1')
            $('.token-bg1').addClass('token-noneaktive__bg')
        }

        if (wt >= heigt){
            $('.fg__block').addClass('fg4-active')
            $('.token-bg2').addClass('token-aktive__bg2')
            $('.token-bg2').removeClass('token-noneaktive__bg')
        } 
        
        if (wt < heigt2){
            $('.fg__block').removeClass('fg4-active')
            $('.token-bg2').removeClass('token-aktive__bg2')
            $('.token-bg2').addClass('token-noneaktive__bg')
        }

        if (wt >= heigt){
            $('.fg__block').addClass('fg4-active')
            $('.token-bg3').addClass('token-aktive__bg3')
            $('.token-bg3').removeClass('token-noneaktive__bg')
        } 
        
        if (wt < heigt2){
            $('.fg__block').removeClass('fg4-active')
            $('.token-bg3').removeClass('token-aktive__bg3')
            $('.token-bg3').addClass('token-noneaktive__bg')
        }

        if (wt >= heigt){
            $('.fg__block').addClass('fg4-active')
            $('.token-bg4').addClass('token-aktive__bg4')
            $('.token-bg4').removeClass('token-noneaktive__bg')
        } 
        
        if (wt < heigt2){
            $('.fg__block').removeClass('fg4-active')
            $('.token-bg4').removeClass('token-aktive__bg4')
            $('.token-bg4').addClass('token-noneaktive__bg')
        }
    })

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let scrollEl = $(this).data("scroll");
        let scrollElPos = $(scrollEl).offset().top;

        $("html, body").animate({
            scrollTop: scrollElPos
        }, 500)
    });

    setAutoCopy();

    function setAutoCopy(){
        var $area = $('<textarea>').hide();
        $('body').append( $area );
        
        $(".js-copy").on('click', function(){
            var txt = $(this).parent().find(".js-field").text(); // достал текст для копирования
            
            initCopy(txt);
        });
        
        function initCopy(str){
            $area.show().val(str).select();
            document.execCommand("copy");
            $area.hide();
        }
    }

    let navToggle = $("#navToggle");
    let nav = $("#nav");

    $(function() {

        navToggle.on('click', function() {
            navToggle.toggleClass('burger-active');

            nav.toggleClass('show');
        });
    });
})