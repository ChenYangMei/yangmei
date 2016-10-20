var s;
$(document).ready(function(){

  s = skrollr.init();

  var firstPath = $("#svg_1").get(0);
  var firstPathLength = firstPath.getTotalLength();

  var secondPath = $("#svg_2").get(0);
  var secondPathLength = secondPath.getTotalLength();

  var thirdPath = $("#svg_3").get(0);
  var thirdPathLength = thirdPath.getTotalLength();

  var fourthPath = $("#svg_5").get(0);
  var fourthPathLength = fourthPath.getTotalLength();

  var fifthPath = $("#svg_23").get(0);
  var fifthPathLength = fifthPath.getTotalLength();

  var sixthPath = $("#svg_28").get(0);
  var sixthPathLength = sixthPath.getTotalLength();

  var seventhPath = $("#svg_29").get(0);
  var seventhPathLength = seventhPath.getTotalLength();

  var eighthPath = $("#svg_68").get(0);
  var eighthPathLength = eighthPath.getTotalLength();

  var ninethPath = $("#svg_69").get(0);
  var ninethPathLength = ninethPath.getTotalLength();



  $("#svg_1").css({
    "stroke-dasharray": firstPathLength,
    "stroke-dashoffset": firstPathLength
  });

  $("#svg_2").css({
    "stroke-dasharray": secondPathLength,
    "stroke-dashoffset": secondPathLength
  });

  $("#svg_3").css({
    "stroke-dasharray": thirdPathLength,
    "stroke-dashoffset": thirdPathLength
  });

  $("#svg_5").css({
    "stroke-dasharray": fourthPathLength,
    "stroke-dashoffset": fourthPathLength
  });

  $("#svg_23").css({
    "stroke-dasharray": fifthPathLength,
    "stroke-dashoffset": fifthPathLength
  });

  $("#svg_28").css({
    "stroke-dasharray": sixthPathLength,
    "stroke-dashoffset": sixthPathLength
  });

  $("#svg_29").css({
    "stroke-dasharray": seventhPathLength,
    "stroke-dashoffset": seventhPathLength
  });

  $("#svg_68").css({
    "stroke-dasharray": eighthPathLength,
    "stroke-dashoffset": eighthPathLength
  });

  $("#svg_69").css({
    "stroke-dasharray": ninethPathLength,
    "stroke-dashoffset": ninethPathLength
  });

  $("svg").css("opacity", 1);

  $("path").addClass("complete");

  $("#svg_1").animate({
    "stroke-dashoffset": 0
  }, 500, function(){
    $("#svg_2").animate({
      "stroke-dashoffset": 0
    }, 500, function(){
      $("#svg_3").animate({
        "stroke-dashoffset": 0
      }, 500, function(){
        $("#svg_5").animate({
          "stroke-dashoffset": 0
        }, 300, function(){
          $("#svg_23").animate({
            "stroke-dashoffset": 0
          }, 300, function(){
            $("#svg_28").animate({
              "stroke-dashoffset": 0
            }, 300, function(){
              $("#svg_29").animate({
                "stroke-dashoffset": 0
              }, 300, function(){
                $("#svg_68").animate({
                  "stroke-dashoffset": 0
                }, 500, function(){
                  $("#svg_69").animate({
                    "stroke-dashoffset": 0
                  }, 300);
                });
              });
            });
          });
        });
      });
    });
  });



  $("nav").hide();
  $(".down").hide();
  $(".right").hide();
  $("nav").delay(5000).fadeIn("slow");
  $(".down").delay(5000).fadeIn("slow");
  $(".right").delay(4000).fadeIn("slow");

  $(".down").on("click", function(){
    $("html,body").animate({
      scrollTop: $(".intro").offset().top
    }, 3000);
  });

  $(".right").on("click", function(){
    $(".slides_container").css({
      "-webkit-transform":"translate(-50%,0%)",
      transition: "transform 1s"
    });
  });

});
