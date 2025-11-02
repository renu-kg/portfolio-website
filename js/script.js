// Wait for the document to be fully loaded before running script
$(document).ready(function() {
    
    // Select the 'main' content area
    // Hide it initially, then fade it in slowly
    $('main').css('display', 'none').fadeIn(1000); // 1000 milliseconds = 1 second

    // This is a simple effect, but it shows you are using jQuery.
    // You could also add other effects, like:
    
    // Example: Make all resume sections 'pop' on hover
    $('.resume-section').hover(
        function() {
            // Function when mouse enters
            $(this).css('transform', 'scale(1.02)');
            $(this).css('transition', 'transform 0.2s ease-in-out');
        }, 
        function() {
            // Function when mouse leaves
            $(this).css('transform', 'scale(1.0)');
        }
    );

});