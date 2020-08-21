$("#phones").change(function () {
  var firstDropVal = $('#phones').val();
  console.log(firstDropVal);

  $("#sizing-image").removeClass();
  $("#sizing-image").addClass(firstDropVal);
});