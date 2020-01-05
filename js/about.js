  $('#show1').on('click', function(){

  if ($("#dots1").css("display") === "none") {
      $("#dots1").css("display","inline");
      $("#show1").html("Read more");
      $("#more1").css("display","none");
    } else {
      $("#dots1").css("display","none");
      $("#show1").html("Read less");
      $("#more1").css("display","inline");
    }
  });
