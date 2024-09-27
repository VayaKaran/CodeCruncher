$(document).ready(function() {
    // Add bounce animation when card is hovered
    $('.subject-card').hover(function() {
        $(this).addClass('animate__animated animate__bounce');
    }, function() {
        $(this).removeClass('animate__animated animate__bounce');
    });
});










$(document).ready(function() {
    // Fade in all cards when the page loads
    $('.subject-card').hide().fadeIn(1000);

    // Add pulse animation when hovering for a bit longer
    $('.subject-card').hover(function() {
        setTimeout(() => {
            $(this).addClass('animate__animated animate__pulse');
        }, 500);  // Delay for pulse to make sure it doesn't trigger instantly
    }, function() {
        $(this).removeClass('animate__animated animate__pulse');
    });

    // Add zoom effect when the card enters the viewport (on scroll)
    $(window).scroll(function() {
        $('.subject-card').each(function() {
            var elementTop = $(this).offset().top;
        });
    });

    // Add shake animation when the button is clicked
    $('.btn').click(function() {
        $(this).closest('.card').addClass('animate__animated animate__shakeX');

        // Remove the shake class after animation ends to allow repeated clicks
        setTimeout(() => {
            $(this).closest('.card').removeClass('animate__animated animate__shakeX');
        }, 1000);
    });
});

