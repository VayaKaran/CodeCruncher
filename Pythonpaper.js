$('h2').hover(function () {
    $(this).addClass('animate__pulse');
}, function () {
    $(this).removeClass('animate__pulse');
});


$(document).ready(function() {
    // Animation on hover using jQuery
    $('.animated-anchor').hover(function() {
    $(this).animate({
        paddingLeft: '30px',
        paddingRight: '30px'
    }, 200);
    }, function() {
    $(this).animate({
        paddingLeft: '20px',
        paddingRight: '20px'
    }, 200);
    });
});