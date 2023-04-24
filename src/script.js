$(document).ready(function(){
    $('.menu_icon').click(function(){
        $(this).hide(300);
        $('.close_icon, .background_overlay, .mobile_nav_links').show(300);
    })

    $('.close_icon').click(function(){
        $('.close_icon, .background_overlay, .mobile_nav_links').hide();
        $('.menu_icon').show(300);
    })
})