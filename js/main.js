$(function () {
    'use strict';
    $(window).scroll(function () {
        var navbar = $('.navbar');
        if ($(window).scrollTop() >= navbar.height()) {
            navbar.addClass('scrolled');
        }else{
            navbar.removeClass('scrolled');
        }
    });
    //Deal with Tabs
    $('.tab-switch li').click(function () {
        //Add Selected Class to Active Link
        $(this).addClass('selected').siblings().removeClass('selected');
        //Hide all Divs
        $('.tabs-section .tabs-content > div').hide();
        //Show Div Connected with this link
        $('.' + $(this).data('class')).show();
        //window.console.log($(this).data('class'));
    });
});