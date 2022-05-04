$(function(){



    var i=0;
    function slide(){
        i++;
        if(i>$('.slide ul li:last-child').index()){
            i=0;
        }
        $('.slide ul li').eq(i).stop().fadeIn('fast');
        $('.slide ul li').eq(i-1).stop().fadeOut();
    }
    setInterval(slide, 3000);

})

$(function(){
    $('.mainmenu>li').mouseenter(function(){
        $(this).find('.submenu').stop().slideDown();
    });
    $('.mainmenu>li').mouseleave(function(){
        $(this).find('.submenu').stop().slideUp();
    });
});
