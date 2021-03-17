// Hides the side menu if clicked outside
$(document).click(function(e) {
    if (!$(e.target).is("#menu, #menuX, #menuIcon")) {
        $("#menu").css("width", "0");
    }
});

// Shows side menu when clicked
$("#menuIcon").click(function() {
    $("#menu").css("width", "200px");
});

// Hides the side menu if button is clicked
$("#menuX").click(function() {
    $("#menu").css("width", "0");
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