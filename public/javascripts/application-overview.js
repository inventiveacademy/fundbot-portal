$(document).ready(function(){
    $(".rejectedlist li").hover(function(){
        $(this).toggleClass("hover");
    });
    $(".acceptedList li").hover(function(){
        $(this).toggleClass("hover");
    });
    $(".pendinglist li").hover(function(){
        $(this).toggleClass("hover");
    });

});