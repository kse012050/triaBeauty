$(document).ready(function(){
    // header menu hover
    headerMenuHover();
    QnATab();
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

function QnATab(){
    $('.QnAArea ul li').click(function(){
        $('.QnAArea ul li').removeClass('active');
        $(this).addClass('active');
    });
}