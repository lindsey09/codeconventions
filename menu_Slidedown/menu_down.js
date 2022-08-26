$(document).ready(function(){
    $('.header .header-nav > li').hover(function(e){
        $('.header .header-nav > li > ul').slideToggle(1000);
        e.stopPropagaton();
    })

});