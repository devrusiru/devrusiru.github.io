$(document).ready(function() {
    $(".nav-title.a").click(function() {
        $(".menu-container").toggleClass("menu-container-toggle");
        $(".nav-title").toggleClass("nav-title-toggle");
        $(this).toggleClass("active");
        $("svg.text-line").toggleClass("logo-active ");
        $(".project-body").hide();
        $(".edu-body").hide();
        $(".about-body").show();
        toggleSection(".nav-title.co");
        toggleSection(".nav-title.en");
        $(".menu-container").scrollTop(0);
    });

    $(".nav-title.co").click(function() {
        $(".menu-container").toggleClass("menu-container-toggle");
        $(".nav-title").toggleClass("nav-title-toggle");
        $(this).toggleClass("active");
        $("svg.text-line").toggleClass("logo-active ");
        $(".about-body").hide();
        $(".edu-body").hide();
        $(".project-body").show();
        toggleSection(".nav-title.en");
        toggleSection(".nav-title.a");
        $(".menu-container").scrollTop(0);
    });

    $(".nav-title.en").click(function() {
        $(".menu-container").toggleClass("menu-container-toggle");
        $(".nav-title").toggleClass("nav-title-toggle");
        $(this).toggleClass("active");
        $("svg.text-line").toggleClass("logo-active ");
        $(".about-body").hide();
        $(".edu-body").show();
        $(".project-body").hide();
        toggleSection(".nav-title.co");
        toggleSection(".nav-title.a");
        $(".menu-container").scrollTop(0);
    });

    $(".nav-title").click(function() {
        $(".hp-text-container").toggleClass("hp-text-container-toggle");
    });

    function toggleSection(sectionClass) {
        $(sectionClass).toggle();
    }

    $(".exp").hide();
    $(".edu-btn").addClass("active-btn");

    $(".edu-btn").click(function() {
        $(".edu").slideDown();
        $(".exp").slideUp();
        $(".edu-btn").addClass("active-btn");
        $(".exp-btn").removeClass("active-btn");
    });
    $(".exp-btn").click(function() {
        $(".exp").slideDown();
        $(".edu").slideUp();
        $(".exp-btn").addClass("active-btn");
        $(".edu-btn").removeClass("active-btn");
    });
});

var typed = new Typed(".auto-input", {
    strings: ["Developer", "Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});