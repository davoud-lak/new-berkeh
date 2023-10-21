$(document).ready(function(){
  $(".themeDetails .themeFeatures .featureTitle").click(function () {
      $target_now = $(this).parent().find(".active").attr("data-target");
      handleTabsDetail($target_now, "hide");
      $(this).parent().find(".active").removeClass("active");
      $(this).addClass("active");
      $target_new = $(this).parent().find(".active").attr("data-target");
      handleTabsDetail($target_new, "show");
    });
    
    function handleTabsDetail($target, $action) {
      switch ($target) {
        case "wordpress":
          if ($action == "hide") {
            $(".themeFeatures .wordpress").fadeOut(100);
          } else {
            $(".themeFeatures .wordpress").fadeIn(100);
          }
          break;
        case "php":
          if ($action == "hide") {
            $(".themeFeatures .php").fadeOut(100);
          } else {
            $(".themeFeatures .php").fadeIn(100);
          }
          break;
      }
    }
    // change images in theme image
    $('.themeDetails .themeImage .otherImgs .smImg img').on('click' , function(e){
      e.preventDefault();
      let lgImgSrc = $('.themeDetails .themeImage .image img');
      let smImgSrc = $(this).attr('src');
      lgImgSrc.attr('src' , smImgSrc);
      $('.themeDetails .themeImage .otherImgs .smImg img').removeClass('activeImg');
      $(this).addClass("activeImg");
  })
  $('.price_of_platforms .platformItems .priceBox .seePlan').on('click' , function(e){
    e.preventDefault();
    $(this).parent().find('.showMoreFeature').slideToggle(300);
    $(this).hide(300)
  })
})