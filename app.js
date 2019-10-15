var slideUp = {
    opacity: 0.5,
    scale: 0,
    duration: 1000
};

var slideUpOne = {
    opacity: 0.5,
    scale: 0,
    duration: 1000,
    interval: 300,
};

ScrollReveal().reveal('.slide-up', slideUp);
ScrollReveal().reveal('.slide-up-one', slideUpOne);
