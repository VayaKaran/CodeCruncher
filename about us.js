$(document).ready(function() {
    // Trigger fade-in animation on page load
    $('#aboutSection').addClass('fade-in');
    $('#aboutContent').addClass('fade-in');

    // Adding fade-in animation for each card with a slight delay
    $('.card').each(function(index) {
        $(this).delay(400 * index).queue(function(next) {
            $(this).addClass('fade-in');
            next();
        });
    });

    // Hover effect animation for cards
    $(".card").hover(function() {
        $(this).animate({
            marginTop: "-10px",
            transform: "scale(1.1)"
        }, 200);
    }, function() {
        $(this).animate({
            marginTop: "0px",
            transform: "scale(1.0)"
        }, 200);
    });
});
