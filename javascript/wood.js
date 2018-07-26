$("#pine-button").click( function() {
  $("#pine-image").show();
  $("#fir-image").hide();
  $("#cedar-image").hide();
});

$("#fir-button").click( function() {
  $("#pine-image").hide();
  $("#fir-image").show();
  $("#cedar-image").hide();
});

$("#cedar-button").click( function() {
  $("#pine-image").hide();
  $("#fir-image").hide();
  $("#cedar-image").show();
});
