$(document).ready(function() {
    $(".rejectedlist li").hover(function() {
            $(this).toggleClass("hover");
            $("a", this).show();
        },
        function() {
            $(this).toggleClass("hover");
            $("a", this).hide();
        });
    $(".acceptedList li").hover(function() {
            $(this).toggleClass("hover");
            $("a", this).show();
        },
        function() {
            $(this).toggleClass("hover");
            $("a", this).hide();
        });
    $(".pendinglist li").hover(function() {
            $(this).toggleClass("hover");
            $("a", this).show();
        },
        function() {
            $(this).toggleClass("hover");
            $("a", this).hide();
        });
});