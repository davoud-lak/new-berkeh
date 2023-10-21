$(".images .small_images .sm_img").click(function () {
    $imgSrc = $(this).find("img").attr("src");
    $(this).parent().parent().find(".large_img img").attr("src", $imgSrc);
    $(".images .small_images .sm_img").removeClass("active_img");
    $(this).addClass("active_img");
  });