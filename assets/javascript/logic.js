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
var animationName = "animated pulse";
var animationEnd = "webkitAnimationEnd mozAnimationEnd MS AnimationEnd oanimationend animationend";

// Functions for hover on button
$("#btn-animate").mouseover(function() {
    $("#btn-animate").addClass(animationName);
});

$("#btn-animate").mouseout(function() {
    $("#btn-animate").removeClass(animationName);
});