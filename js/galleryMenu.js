// external js: isotope.pkgd.js

// init Isotope
var $grid = $(".gallery").isotope({
  itemSelector: ".element-item"
  // layoutMode: "fitRows"
});
// bind filter button click
$(".menu-hover-lines").on("click", "li", function() {
  var filterValue = $(this).attr("data-filter");
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$(".menu-hover-lines").each(function(i, buttonGroup) {
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on("click", "li", function() {
    $buttonGroup.find(".active").removeClass("active");
    $(this).addClass("active");
  });
});
