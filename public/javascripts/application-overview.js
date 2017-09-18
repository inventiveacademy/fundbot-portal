$(document).ready(function(){
    $(".rejectedlist li").hover(function(){
        $(this).toggleClass("hover");
    });
    $(".acceptedList li").hover(function(){
        $(this).toggleClass("hover");
        $(".viewDetails").show();
    });
    $(".pendinglist li").hover(function(){
        $(this).toggleClass("hover");

    });

});