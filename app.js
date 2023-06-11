
$(document).ready(function(){
    var circle = $("#circle"); // Reference to the circle element

    $(document).mousemove(function(event){
      var x = event.pageX;
      var y = event.pageY;

      // Delay the circle movement by 100 milliseconds
      setTimeout(function() {
        circle.css({top: y - 10, left: x - 10}); // Position the circle around the pointer
      }, 10);
    });

    $("h1").hover(
      function(){
        circle.css("transform", "scale(3)");// Scale the circle to 2x size
        circle.css("opacity", "difference");
        circle.css(" mix-blend-mode", "0.2");
      },
      function(){
        circle.css("transform", "scale(1)"); // Scale the circle back to normal size
        circle.css("opacity", "1");
      }
    );

    $("img.h1-title").hover(
      function(){
        circle.css("transform", "scale(2)");// Scale the circle to 2x size
        circle.css("opacity", "difference");
        circle.css(" mix-blend-mode", "0.2");
      },
      function(){
        circle.css("transform", "scale(1)"); // Scale the circle back to normal size
        circle.css("opacity", "1");
      }
    );

    $(".hamburger").hover(
      function(){
        circle.css("transform", "scale(5)");// Scale the circle to 2x size
        circle.css("opacity", "difference");
        circle.css(" mix-blend-mode", "0.2");
      },
      function(){
        circle.css("transform", "scale(1)"); // Scale the circle back to normal size
        circle.css("opacity", "1");
      }
    );

    $(".menu-list").hover(
      function(){
        circle.css("transform", "scale(2)");// Scale the circle to 2x size
        circle.css("opacity", "difference");
        circle.css(" mix-blend-mode", "0.2");
      },
      function(){
        circle.css("transform", "scale(1)"); // Scale the circle back to normal size
        circle.css("opacity", "1");
      }
    );

    $(".text-line").hover(
      function(){
        circle.css("transform", "scale(5)");// Scale the circle to 2x size
        circle.css("opacity", "difference");
        circle.css(" mix-blend-mode", "0.2");
      },
      function(){
        circle.css("transform", "scale(1)"); // Scale the circle back to normal size
        circle.css("opacity", "1");
      }
    );

    $(".visual-slider-text-area-lp h3").hover(
      function(){
        circle.css("transform", "scale(2)");// Scale the circle to 2x size
        circle.css("opacity", "difference");
        circle.css(" mix-blend-mode", "0.2");
      },
      function(){
        circle.css("transform", "scale(1)"); // Scale the circle back to normal size
        circle.css("opacity", "1");
      }
    );

    $(".reachme-container i").hover(
      function(){
        circle.css("transform", "scale(4)");// Scale the circle to 2x size
        circle.css("opacity", "difference");
        circle.css(" mix-blend-mode", "0.2");
      },
      function(){
        circle.css("transform", "scale(1)"); // Scale the circle back to normal size
        circle.css("opacity", "1");
      }
    );

    $(".visual-slider-img-lp img").hover(
      function(){
        circle.css("transform", "scale(3)");// Scale the circle to 2x size
        circle.css("opacity", "difference");
        circle.css(" mix-blend-mode", "0.2");
      },
      function(){
        circle.css("transform", "scale(1)"); // Scale the circle back to normal size
        circle.css("opacity", "1");
      }
    );

    $(".cv a").hover(
      function(){
        circle.css("transform", "scale(2)");// Scale the circle to 2x size
        circle.css("opacity", "difference");
        circle.css(" mix-blend-mode", "0.2");
      },
      function(){
        circle.css("transform", "scale(1)"); // Scale the circle back to normal size
        circle.css("opacity", "1");
      }
    );

    $(".who-container div").hover(
      function(){
        circle.css("transform", "scale(3)");// Scale the circle to 2x size
        circle.css("opacity", "difference");
        circle.css(" mix-blend-mode", "0.2");
      },
      function(){
        circle.css("transform", "scale(1)"); // Scale the circle back to normal size
        circle.css("opacity", "1");
      }
    );


    $(".hamburger-svg").click(function(){
      $(".menu").fadeToggle("active");
  });

  $(".pro1").hover(function(){
    $('.project-out-top').toggleClass("cpro1");
    $('.project-out-bottom').toggleClass("cpro1");
});

  $(".pro2").hover(function(){
    $('.project-out-top').toggleClass("cpro2");
    $('.project-out-bottom').toggleClass("cpro2");
  });

  $(".pro3").hover(function(){
    $('.project-out-top').toggleClass("cpro3");
    $('.project-out-bottom').toggleClass("cpro3");
  });

  $(".pro4").hover(function(){
    $('.project-out-top').toggleClass("cpro4");
    $('.project-out-bottom').toggleClass("cpro4");
  });

  $(".pro5").hover(function(){
    $('.project-out-top').toggleClass("cpro5");
    $('.project-out-bottom').toggleClass("cpro5");
  });

  $(".pro6").hover(function(){
    $('.project-out-top').toggleClass("cpro6");
    $('.project-out-bottom').toggleClass("cpro6");
  });

  $(".uil-facebook-f").hover(function(){
    $('.i1').toggleClass("animate__animated animate__rubberBand");
    $('.project-out-top').toggleClass("fb");
    $('.project-out-bottom').toggleClass("fb");
});

$(".uil-instagram").hover(function(){
  $('.i2').toggleClass("animate__animated animate__rubberBand");
  $('.project-out-top').toggleClass("inst");
  $('.project-out-bottom').toggleClass("inst");
});

$(".uil-github-alt").hover(function(){
  $('.i3').toggleClass("animate__animated animate__rubberBand");
  $('.project-out-top').toggleClass("git");
  $('.project-out-bottom').toggleClass("git");
});

$(".uil-behance").hover(function(){
  $('.i4').toggleClass("animate__animated animate__rubberBand");
  $('.project-out-top').toggleClass("be");
  $('.project-out-bottom').toggleClass("be");
});

$(".uil-google").hover(function(){
  $('.i5').toggleClass("animate__animated animate__rubberBand");
  $('.project-out-top').toggleClass("gm");
  $('.project-out-bottom').toggleClass("gm");
});

$(".uil-phone-volume").hover(function(){
  $('.i6').toggleClass("animate__animated animate__rubberBand");
  $('.project-out-top').toggleClass("cm");
  $('.project-out-bottom').toggleClass("cm");
});

$(".cv a").hover(function(){
  $('.project-out-top').toggleClass("cpro1");
  $('.project-out-bottom').toggleClass("cpro1");
});






  
  // Show the first visual-slider-text-area-lp's visual-slider-description-lp and image on page load
  $('.visual-slider-text-area-lp:first').addClass('active');
  $('.visual-slider-text-area-lp:first').find('.visual-slider-description-lp').show();
  $('.visual-slider-img-lp img:first').show();

  // Toggle visual-slider-description-lp and image when a visual-slider-text-area-lp is clicked
  $('.visual-slider-text-area-lp').hover(function() {
    // Remove 'active' class from all visual-slider-text-area-lp elements
    $('.visual-slider-text-area-lp').removeClass('active');
    
    // Remove left border from all visual-slider-text-area-lp elements
    $('.visual-slider-text-area-lp').css('border-left', 'none');

    // Hide all visual-slider-description-lps
    $('.visual-slider-description-lp').hide();

    // Hide all images
    $('.visual-slider-img-lp img').hide();

    // Show the clicked visual-slider-text-area-lp's visual-slider-description-lp and corresponding image
    $(this).addClass('active');
    $(this).css('border-left', '4px solid #22ffe2'); // Change the color as desired
    $(this).css('margin-left', '-4px');
    $(this).find('.visual-slider-description-lp').show();
    var index = $(this).index();
    $('.visual-slider-img-lp img').eq(index).show();
    $('.visual-slider-img-lp img').toggleClass("animate__animated animate__fadeIn animate__slow");
  });
  
  });

  
