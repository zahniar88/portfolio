// activation scrollIt Plugin
$.scrollIt({
    upKey: 38, // key code to navigate to the next section
    downKey: 40, // key code to navigate to the previous section
    easing: 'linear', // the easing function for animation
    scrollTime: 600, // how long (in ms) the animation takes
    activeClass: 'active', // class given to the active nav element
    onPageChange: null, // function(pageIndex) that is called when page is changed
    topOffset: -70 // offste (in px) for fixed top navigation
});

// navbar change position and view
$(window).scroll(function() {
    var scroll = $(this).scrollTop();
    if (scroll >= 60) {
        $('header').removeClass('absolute py-4').addClass('fixed py-2 shadow');
    } else {
        $('header').removeClass('fixed py-2 shadow').addClass('absolute py-4');
    }
});
