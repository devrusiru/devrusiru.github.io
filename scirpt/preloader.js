//$(".body-wrapper").hide();
$(".nav-title-wrappe").hide();
$(window).on("load", function () {
  // makes sure the whole site is loaded

  $("#preloader").delay(5000).fadeOut("slow");
  $(".body-wrapper").delay(5000).fadeIn("slow");
  $(".nav-title-wrappe").delay(5000).fadeIn("slow");
});
