$(document).ready(function () {
  $("#mobile-btn").click(function () {
    $("#mobile-menu").toggleClass("active");
    $("#mobile-btn").find('i').toggleClass("fa-x");
  });
})