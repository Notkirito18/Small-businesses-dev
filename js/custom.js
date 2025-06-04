$(window).load(function () {
  jQuery("#all").click();
  return false;
});

$(document).ready(function () {
  $("#header_wrapper").scrollToFixed();
  $(".res-nav_click").click(function () {
    $(".main-nav").slideToggle();
    return false;
  });

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
    end: function () {
      if (!$("#main-nav ul li:first-child").hasClass("active")) {
        $(".header").addClass("addBg");
      } else {
        $(".header").removeClass("addBg");
      }
    },
    scrollChange: function ($currentListItem) {
      if (!$("#main-nav ul li:first-child").hasClass("active")) {
        $(".header").addClass("addBg");
      } else {
        $(".header").removeClass("addBg");
      }
    },
  });
});

wow = new WOW({
  animateClass: "animated",
  offset: 100,
});
wow.init();
