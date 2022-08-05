$(function(){
        $('#header nav .gnb > li').hover(function(){
            $(this).find('.sub').stop().slideDown();
        },function(){
            $(this).find('.sub').stop().slideUp();
        });
    });