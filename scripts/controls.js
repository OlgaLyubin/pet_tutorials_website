function showSidebar() {
    /*set variable to toggle between on and off state */
    var x = 1;
    if (x == 1) {
        x = 0;
        /*the side bar is not visible so set it to show */
        $('.menu-hide').toggleClass('show');
        $('.menu-tab').toggleClass('active');
    } else {
        x = 1;
        /*the side bar is visible so set it to hide */
            $('.menu-hide').removeClass('show');
            $('.menu-tab').removeClass('active');
    }
}

    /* Change nav colour depending on scroll */
    $(window).scroll(function(){
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 770);
    });


//BACK TO TOP BUTTON APPEAR
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }     