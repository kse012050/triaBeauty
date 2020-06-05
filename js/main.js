$(document).ready(function(){
    mainTopBannerBtn();
    // header menu hover
    headerMenuHover();
    QnATab();
    // 고객센터
    tab();
    // 모바일 메뉴
    mobileMenu();

    // 연혁 버튼
    aboutUsButton();

    TOPBtn();

});

function mainTopBannerBtn(){
    $('.mainTopBannerBtn').click(function(e){
        e.stopPropagation();
        $('.mainTopBannerArea').addClass('active');
    });
}

function headerMenuHover(){
    var menuBg = $('header .menuArea .menuBgArea');
    menuBg .hover(function(){
        $('header .menuArea nav ul li ol').addClass('active');
    },function(){
        $('header .menuArea nav ul li ol').removeClass('active');
    });

    $('header .menuArea nav ul > li a').focus(function(){
        if($(window).width() > 1080){
            menuBg.addClass('active');
            $('header .menuArea nav ul li ol').addClass('active');
        }
    });
    $('header .menuArea nav ul > li a').blur(function(){
        if($(window).width() > 1080){
            menuBg.removeClass('active');
            $('header .menuArea nav ul li ol').removeClass('active');
        }
    });
}

function QnATab(){
    $('.QnAArea ul li').click(function(){
        $('.QnAArea ul li').removeClass('active');
        $(this).addClass('active');
    });
}

// 고객센터
function tab(){
    $('.tabArea li').click(function(){
        $('.tabArea li').removeClass('active');
        $(this).addClass('active');
        $('.QnAArea').removeClass('active');
        $('.QnAArea').eq($(this).index()).addClass('active');
    })
}

// 모바일 메뉴
function mobileMenu(){
    $('header .menuArea > .menuContentsArea >nav ul > li:first-of-type > a').click(function(e){
        if($(window).width() < 1080){
            e.preventDefault();
        }
    });

    $('header .menuArea > .menuContentsArea >nav ul > li:nth-of-type(3) > a').click(function(e){
        if($(window).width() < 1080){
            e.preventDefault();
        }
    });

    $('header .menuArea > .menuContentsArea >nav > ul > li').click(function(e){
        $('header .menuArea > .menuContentsArea >nav > ul > li').removeClass('active');
        $(this).addClass('active');
    });

    $('header .menuArea .mobileMenuArea .hamburgerMenuArea').click(function(){
        $(this).toggleClass('active');
        if($('header .menuArea > .menuContentsArea').hasClass('active')){
            $('header .menuArea > .menuContentsArea').removeClass('active');
        }else{
            $('header .menuArea > .menuContentsArea').addClass('active');
        }
    });
}

function aboutUsButton(){
    var aboutUsButton =  $('.introduceHistoryArea > div ul li figure figcaption div button');
    aboutUsButton.click(function(){
        $(this).parent().prev().children().toggleClass('active');
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $(this).html('read ress');
        }else{
            $(this).html('read more');
        }
    });
}

function TOPBtn(){
    $(window).scroll(function(){
        console.log($(document).scrollTop());
        if($('header + *').eq(0).offset().top < $(document).scrollTop()){
            $('.TOPBtn').addClass('active');
        }else{
            $('.TOPBtn').removeClass('active');
        }
    });

    $('.TOPBtn').click(function(){
        $('html,body').animate({scrollTop:'0'},1000);
    });
}