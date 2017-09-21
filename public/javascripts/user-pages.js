$(document).ready(function() { 
    $('.searchusers').keyup(function() {
        var valThis = $(this).val();
        $('.adminlist>p').each(function() {
            var text = $(this).text().toLowerCase();
            (text.indexOf(valThis) == 0) ? $(this).show(): $(this).hide();
        });
        $('.userlist>p').each(function() {
            var text = $(this).text().toLowerCase();
            (text.indexOf(valThis) == 0) ? $(this).show(): $(this).hide();
        });
    });
    jQuery('.user-tabs .user-tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
 
        // Show/Hide Tabs
        jQuery('.user-tabs ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
});