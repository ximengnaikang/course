$(function () {
    $('#content').fullpage({
        verticalCentered: true,
        scrollingSpeed:1000,
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90']
    });
    $('.login').hide();
    $('.reg').hide();
    $('.denglu').click(function () {
        if ($('.login').css('display')=='none'){
            $('.login').show();
            $('#content').hide();
            $('.reg').hide();
        }else {
            $('#content').toggle();
            $('.login').toggle();
        }
    });
    $('.zhuce').click(function () {
        if ($('.reg').css('display')=='none'){
            $('.reg').show();
            $('#content').hide();
            $('.login').hide();
        }else {
            $('.reg').toggle();
            $('#content').toggle();
        }
    })

})