// Hides the top menu if clicked outside
$(document).click(function(e) {
    if (!$(e.target).is("#menu, #menuX, #menuIcon")) {
        $("#menu").css("height", "0");
    }
});

// Shows top menu when clicked
$("#menuIcon").click(function() {
    if ($(window).width() >= 600) {
        $("#menu").css("height", "70px");
    }
    else {
        $("#menu").css("height", "200px");
    }
});

// Hides the top menu if button is clicked
$("#menuX").click(function() {
    $("#menu").css("height", "0");
});

// If the top menu is open while the browser size increases it hides the top menu
$(window).resize(function(){
    var menuHeight = $("#menu").css("height");

    if(($(this).width() <= 600) && (menuHeight != "0px")) {
        $("#menu").css("height", "200px");
    }
    else if (menuHeight != "0px") {
        $("#menu").css("height", "70px");
    }
});

// Shows/hides text on hover over portfolio arrow
$("#portfolioArrow").on({
    mouseenter: function () {
        var span = $(this).find("span");

        span.removeClass("animate__fadeOutRight");
        span.addClass("animate__fadeInRight");
        span.css("display", "inline-block");    
    },
    mouseleave: function () {
        var span = $(this).find("span");

        span.removeClass("animate__fadeInRight");
        span.addClass("animate__fadeOutRight");
    }
});

// Shows/hides text on hover over contact arrow
$("#contactArrow").on({
    mouseenter: function () {
        var span = $(this).find("span");

        span.removeClass("animate__fadeOutLeft");
        span.addClass("animate__fadeInLeft");
        span.css("display", "inline-block");    
    },
    mouseleave: function () {
        var span = $(this).find("span");

        span.removeClass("animate__fadeInLeft");
        span.addClass("animate__fadeOutLeft");
    }
});

$("#requestPanel").click(function() {
    $("#requestApp").css("display", "flex");
    $("#portfolio").addClass("unselect");
    $("#socials").addClass("unselect");
});

$("#garagePanel").click(function() {
    $("#garageWebsite").css("display", "flex");
    $("#portfolio").addClass("unselect");
    $("#socials").addClass("unselect");
});

$(".panelX").click(function() {
    $(this).parent().parent().css("display", "none");
    $("#portfolio").removeClass("unselect")
    $("#socials").removeClass("unselect");
});

// Hides the expanded panel if clicked outside
$(document).click(function(e) {
    if (!$(e.target).is(".expandedPanel, .panel, .panelX")) {
        $(this).parent().parent().css("display", "none");
    }
});