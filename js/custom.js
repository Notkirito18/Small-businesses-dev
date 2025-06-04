$(window).load(function () {
  jQuery("#all").click();
  return false;
});

$(document).ready(function () {
  $("#header_wrapper").scrollToFixed();
  if ($("#main-nav ul li:first-child").hasClass("active")) {
    $("#main-nav").css("background", "none");
  }

  $("#mainNav").onePageNav({
    currentClass: "active",
    changeHash: false,
    scrollSpeed: 950,
    scrollThreshold: 0.2,
    filter: "",
    easing: "swing",
    begin: function () {},
    end: function () {},
  });

  // Collapse the navbar when any link is clicked
  $("#mainNav li a").on("click", function () {
    if ($(".navbar-toggle").is(":visible")) {
      $(".navbar-toggle").click();
    }
  });

  $("#mainNav li a:not(.dropdown-toggle)").on("click", function () {
    if ($(".navbar-toggle").is(":visible")) {
      $(".navbar-toggle").click();
    }
  });
});
