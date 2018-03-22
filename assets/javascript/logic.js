// TypeIt functionality for jumbotron input
new TypeIt ("#input-type", {
    strings: ["web applications", "user experiences", "design pieces", "posters"],
    breakLines: false,
    nextStringDelay: 3000,
    loopDelay: 3000,
    speed: 75,
    deleteSpeed: 75,
    autoStart: false,
    cursor: true,
    loop: true
});

// Animated Buttons with pulse effect
// Animation set to variable
var animationName = "animated pulse";

// Variable to listen for any Animation ending
var animationEnd = "webkitAnimationEnd mozAnimationEnd MS AnimationEnd oanimationend animationend";

// Function for hover on button
$("#btn-animate").hover(function() {
    $("#btn-animate").addClass(animationName).one(animationEnd, function() {
        $(this).removeClass(animationName);
    });
});