$(document).ready(function(){
    // header menu hover
    headerMenuHover();
});


function headerMenuHover(){
    var menuBg = $('header .menuArea .menuBgArea');
    menuBg .hover(function(){
        $('header .menuArea nav ul li ol').addClass('active');
    },function(){
        $('header .menuArea nav ul li ol').removeClass('active');
    });

    $('header .menuArea nav ul > li a').focus(function(){
        menuBg .addClass('active');
        $('header .menuArea nav ul li ol').addClass('active');
    });
    $('header .menuArea nav ul > li a').blur(function(){
        menuBg .removeClass('active');
        $('header .menuArea nav ul li ol').removeClass('active');
    });
}