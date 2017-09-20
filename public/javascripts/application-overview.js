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
    $('.searchApplications').keyup(function() {
        var valThis = $(this).val();
        $('.acceptedList>li').each(function() {
            var text = $(this).text().toLowerCase();
            (text.indexOf(valThis) == 0) ? $(this).show(): $(this).hide();
        });
        $('.pendinglist>li').each(function() {
            var text = $(this).text().toLowerCase();
            (text.indexOf(valThis) == 0) ? $(this).show(): $(this).hide();
        });
        $('.rejectedlist>li').each(function() {
            var text = $(this).text().toLowerCase();
            (text.indexOf(valThis) == 0) ? $(this).show(): $(this).hide();
        });
    });
});