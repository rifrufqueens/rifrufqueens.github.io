$("#devices").change(function () {
  var firstDropVal = $('#devices').val();
  console.log(firstDropVal);

  $("#sizing-image").removeClass();
  $("#sizing-image").addClass(firstDropVal);
});