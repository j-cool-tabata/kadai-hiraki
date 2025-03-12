'use strict';

{
    $(function(){
        $('.menu_toggle').on('click', function(){
            $('.nav_content').toggleClass('active');
        });

        $('.button_close .navlist a').on('click', function(){
            $('.nav_content').removeClass('active');
        });
    });

}