$("#devices").change(function () {
  var firstDropVal = $('#devices').val();
  console.log(firstDropVal);

  $("#sizing-image").removeClass();
  $("#sizing-image").addClass(firstDropVal);
});

document.addEventListener('touchmove', function (event) {
  if (event.scale !== 1) { event.preventDefault(); }
}, false);