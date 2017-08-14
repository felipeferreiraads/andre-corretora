$(function(){
	$('.open-menu, .open-menu-circle').click(function(){
        $('.open-menu-circle').fadeOut();
        $('.menu-mobile').show("slide", { direction: "right" }, 500);
        $('.overlay-menu').fadeIn();
        return false;
    });
 
    $('.close-menu').click(function(){
        $('.menu-mobile').hide("slide", { direction: "right" }, 500);
        $('.overlay-menu').fadeOut();
        if($(window).scrollTop() > 100){
            $('.open-menu-circle').fadeIn();
        }
        return false;
    });

    $('.overlay-menu').click(function() {
    	$('.menu-mobile').hide("slide", { direction: "right" }, 500);
    	$(this).fadeOut();
        if($(window).scrollTop() > 100){
            $('.open-menu-circle').fadeIn();
        }
    });

    var width = $(window).width();
    var height = $(window).height();
    console.log('Width: ' + width + ' | Height: ' + height);
    if(width > height){
        $('#banner-home video').css({
            'width': '100%',
            'height' : 'auto'
        });
    } else {
        $('#banner-home video').css({
            'width': 'auto',
            'height' : '100vh'
        });
    }

   $('.owl-caroulsel').owlCarousel({
        items: 5,
        dots: false,
        responsive:{
            320:{
                items:1,
            },
            480:{
                items:2
            },
            992:{
                items:3
            },
            1250:{
                items:5
            }
        }
    });

    $('.next-carousel').click(function() {
        $('.owl-caroulsel').trigger('next.owl.carousel');
        return false;
    });

    $('.prev-carousel').click(function() {
        $('.owl-caroulsel').trigger('prev.owl.carousel', [300]);
        return false;
    });
});

$(window).on('resize', function() {
    var width = $(window).width();
    var height = $(window).height();
    if(width > height){
        $('#banner-home video').css({
            'width': '100%',
            'height' : 'auto'
        });
    } else {
        $('#banner-home video').css({
            'width': 'auto',
            'height' : '100vh'
        });
    }
});

$(window).scroll(function(event) {
    if($(window).width() < 768){
        if($(window).scrollTop() > 100){
            if(!$('.open-menu-circle').hasClass('opened')){
                $('.open-menu-circle').fadeIn().removeClass('closed').addClass('opened');
            }
        } else {
            $('.open-menu-circle').fadeOut().removeClass('opened').addClass('closed');
        }
    }
});