$(document).ready(function() {
  // Toggle Navbar icon change on click
    $(".navbar-toggler").click(function() {
        $(this).toggleClass("open");
    });
});




$(document).ready(function() {
    // On click, toggle dropdown animation
    $('.dropdown-toggle').on('click', function() {
    var dropdownMenu = $(this).next('.dropdown-menu');
    
    if (dropdownMenu.hasClass('show')) {
        dropdownMenu.removeClass('show').slideUp(300); // Hide with animation
    } else {
        dropdownMenu.addClass('show').slideDown(300); // Show with animation
    }
    });

    // Hide the dropdown when clicking outside
    $(document).on('click', function(e) {
    if (!$(e.target).closest('.dropdown').length) {
        $('.dropdown-menu').removeClass('show').slideUp(300);
    }
    });
});




$(document).ready(function() {
    // Smooth Scroll Animation for Back-to-Top Button
    $('#back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const text = "The diploma in Computer Science provides in-depth knowledge of algorithms, data structures, and the latest programming practices.Computer Science and Engineering is 3-year diploma program that covers theoretical foundations of computation, information technology, their implications and the functioning of computer systems.";
    let index = 0;
    const target = document.getElementById('typing-animation');
    const cursor = document.querySelector('.cursor');

    // Function to generate random speed between min and max milliseconds
    function getRandomSpeed(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // AI-like Typing Effect
    function typeWriter() {
        if (index < text.length) {
            target.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, getRandomSpeed(30, 40)); // Vary speed between 30ms to 120ms
        } else {
            cursor.classList.add('fade-out'); // Fade out cursor after typing ends
        }
    }

    // Start typing animation on page load
    typeWriter();
});



$(document).ready(function() {
    // When the page is scrolled, check if the image is in view and fade it in
    $(window).on('scroll', function() {
        const diplomaImage = $('.diploma-image');
        const imagePosition = diplomaImage.offset().top;
        const windowPosition = $(window).scrollTop() + $(window).height();
        
        if (windowPosition > imagePosition) {
            diplomaImage.css('opacity', '1'); // Fade in when image is in view
        }
    });

    // Optionally, fade in the image when the page loads without scrolling
    $('.diploma-image').css('opacity', '1');
});




document.addEventListener('DOMContentLoaded', function () {
    const faders = document.querySelectorAll('.fade-in');

    // Function to handle the fade-in animation when the cards come into view
    const fadeInOnScroll = () => {
        faders.forEach(fader => {
            const faderPosition = fader.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2; // Trigger when card is 1/3 down the screen

            if (faderPosition < screenPosition) {
                fader.classList.add('show');
            }
        });
    };

    // Event listener for scrolling
    window.addEventListener('scroll', fadeInOnScroll);
});




$(document).ready(function() {
  // Back to Top Button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 1000);
    });

  // Mobile Menu Toggle
    $('#menu-toggle').click(function() {
        $('#mobile-menu').css('left', '0');
    });

    $('.mobile-menu .close-menu').click(function() {
        $('#mobile-menu').css('left', '-100%');
    });

    $(document).click(function(event) {
        if (!$(event.target).closest('#menu-toggle, #mobile-menu').length) {
            $('#mobile-menu').css('left', '-100%');
        }
    });
});
$(document).ready(function() {
  // Add fade-in effect to the navbar on page load
    $('.navbar').css('opacity', '0');
    setTimeout(function() {
    $('.navbar').css('opacity', '1').addClass('fadeIn');
    }, 100);
});





$(document).ready(function() {
    // Back to Top Button Visibility
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
        $('#back-to-top').fadeIn();
        } else {
        $('#back-to-top').fadeOut();
        }
    });
    
    // Scroll to Top Functionality
    $('#back-to-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 500);
        return false;
    });
    });
    
