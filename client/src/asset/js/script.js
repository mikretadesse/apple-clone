$(".fotter-links-wrapper h3").on("click", function () {
  if ($(window).width() <= 768) {
    $(this).next("ul").slideToggle();
    $(this).togleClass("iconRotator");
  }
});

$(window).resize(function () {
    
})