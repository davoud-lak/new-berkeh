$(document).ready(function () {
  $logo_count = $(".portofilio_logos .customers_logo .logos").length;
  setInterval(function () {
    $(".portofilio_logos .customers_logo .logos").css("borderColor", "#fff");
    $(".portofilio_logos .customers_logo .logos img").css({
      filter: "grayscale(100%)",
      opacity: "0.5",
    });
    $activeChild = Math.floor(Math.random() * $logo_count) + 1;
    $(`.portofilio_logos .customers_logo .logos:nth-child(${$activeChild})`).css(
      "borderColor",
      "#00d0d8"
    );
    $(`.portofilio_logos .customers_logo .logos:nth-child(${$activeChild}) img`).css({
      filter: "unset",
      opacity: "unset",
    });
  }, 3000);
  if ($(".input_select2").length > 0) {
    $(".input_select2").select2();
  }
  // $logo_count1 = $(".best_features_store .customers_logo .logos").length;
  // setInterval(function () {
  //   $(".best_features_store .customers_logo .logos").css({
  //     color: "#00D0D8",
  //     borderColor: "#E9ECEF",
  //   });
  //   $activeChild1 = Math.floor(Math.random() * $logo_count1) + 1;  
  //   $(`.best_features_store .customers_logo .logos:nth-child(${$activeChild1})`).css({
  //     color: "#0B3A42",
  //     borderColor: "#0B3A42",
  //   });
  //   $data_text = $(`.best_features_store .customers_logo .logos:nth-child(${$activeChild1})`).attr("data-text")
  //   $(".best_features_store .description").html($data_text)
  // }, 2000);

  $(".best_features_store .customers_logo .logos").click(function () { 
    $(this).parent().find(".active_logo").removeClass("active_logo");
    $(this).addClass("active_logo");
    $title = $(this).attr("data-title");
    $text = $(this).attr("data-text");
    $(".best_features_store .title_property").html($title)
    $(".best_features_store .description").html($text)
   })

  $logo_count2 = $(".basic_features_items .customers_logo .logos").length; 
  setInterval(function () {
    $(".basic_features_items .customers_logo .logos").css({
      color: "#00D0D8",
      borderColor: "#00D0D8",
    });
    $activeChild2 = Math.floor(Math.random() * $logo_count2) + 1;  
    $(`.basic_features_items .customers_logo .row .col-6:nth-child(${$activeChild2}) .logos`).css({
      color: "#0B3A42",
      borderColor: "#0B3A42",
    });
  }, 2000);
  
  $(".filters .ul_filter .li_filter .label").click(function () {
    $(this).toggleClass("active");
  });

  $(".menu_btn").click(function () {
    $(".menu").animate(
      {
        right: "0%",
      },
      500
    );
    $(".app").css("filter", "blur(25px)");
    $("body").css("overflow", "hidden");
  });
  $(".menu .close").click(function () {
    $(".app").css("filter", "unset");
    $("body").css("overflow", "initial");
    $(".menu").animate(
      {
        right: "-90%",
      },
      1000
    );
  });
  $(".comments").click(function () {
    $(".modal_comments").animate(
      {
        right: "0%",
      },
      1000
    );
    $("body").css("overflow", "hidden");
    $(".bg_dark").css("display", "block");
  });
  $(".modal_comments .close").click(function () {
    $(".bg_dark").css("display", "none");
    $("body").css("overflow", "initial");
    $(".modal_comments").animate(
      {
        right: "-90%",
      },
      1000
    );
  });
  $(".box_icon.info").click(function () {
    $("body").css("overflow", "hidden");
    $(".bg_dark").fadeIn(300);
    $(".modals").fadeIn(300);
    $(".modal-detail").fadeIn(300);
  });
  $(".box_icon.share").click(function () {
    $("body").css("overflow", "hidden");
    $(".bg_dark").fadeIn(300);
    $(".modals").fadeIn(300);
    $(".modal-share").fadeIn(300);
  });

  $(".btn.close").click(function () {
    $("body").css("overflow", "initial");
    $(".modal-detail").fadeOut(300);
    $(".modal-share").fadeOut(300);
    $(".modals").fadeOut(300);
    $(".bg_dark").fadeOut(300);
  });
  $(".questions").click(function () {
    $drop = $(this).attr("data-drop");
    if ($drop == "0") {
      $(this).find(".answer").slideDown(300);
      $(this).find(".icon .fa-plus").css("transform", "rotate(45deg)");
      $(this).attr("data-drop", "1");
    } else {
      $(this).find(".answer").slideUp(300);
      $(this).find(".icon .fa-plus").css("transform", "rotate(0deg)");
      $(this).attr("data-drop", "0");
    }
  });
});

if (document.querySelector(".custom_player")) {
  let custom_player = document.querySelector(".custom_player");
  let media = custom_player.querySelector("video");

  let play = custom_player.querySelector(".play");
  let rwd = custom_player.querySelector(".rewind");
  let fwd = custom_player.querySelector(".forward");
  let currentTime = custom_player.querySelector(".currentTime");
  let videoTime = custom_player.querySelector(".videoTime");
  let BarLine = custom_player.querySelector(".controls__progressbar-current");
  let volumeIcon = custom_player.querySelector(".volume i");
  let volumeProgressBar = custom_player.querySelector(".volume__progress");
  let volumeProgressBarInput = custom_player.querySelector(
    ".volume__progress input"
  );
  let fullscreen = custom_player.querySelector(".fullscreen");

  media.addEventListener("timeupdate", function () {
    currentTime.textContent = getTime(media.currentTime);

    let ValueBarLine = (media.currentTime / media.duration) * 100;
    BarLine.style = `background: linear-gradient(90deg, #00d0d8 ${ValueBarLine}%, #e1e1e1 0%)`;
    BarLine.value = ValueBarLine;
  });
  play.addEventListener("click", function () {
    videoTime.textContent = getTime(media.duration);
    if (media.paused) {
      togglePlayIcon();
      media.play();
    } else {
      togglePlayIcon();
      media.pause();
    }
  });
  rwd.addEventListener("click", function () {
    media.currentTime = media.currentTime - 5;
  });
  fwd.addEventListener("click", function () {
    media.currentTime = media.currentTime + 5;
  });
  BarLine.addEventListener("input", function () {
    media.currentTime = (this.value / 100) * media.duration;
  });
  volumeIcon.addEventListener("click", function () {
    volumeProgressBar.classList.toggle("active");
  });
  volumeProgressBarInput.addEventListener("input", function () {
    media.volume = this.value / 100;
    this.style = `background: linear-gradient(90deg, #00d0d8 ${this.value}%, #e1e1e1 50%)`;
  });
  fullscreen.addEventListener("click", function () {
    if (!document.fullscreenElement) {
      if (custom_player.requestFullscreen) {
        custom_player.requestFullscreen();
      } else if (custom_player.mozFullScreenElement) {
        custom_player.mozFullScreenElement();
      } else if (custom_player.msFullScreenElement) {
        custom_player.msFullScreenElement();
      } else if (custom_player.webkitFullScreenElement) {
        custom_player.webkitFullScreenElement();
      }
    } else {
      if (document.exitFullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (custom_player.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (custom_player.msCancelFullScreen) {
          document.msCancelFullScreen();
        } else if (custom_player.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    }
  });
  let togglePlayIcon = () => {
    let playIcon = play.querySelector("i");
    playIcon.classList.toggle("fa-play");
    playIcon.classList.toggle("fa-pause");
  };
  let getTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - minutes * 60);
    let minutesValue;
    let secondsValue;
    if (minutes < 10) {
      minutesValue = `0${minutes}`;
    } else {
      minutesValue = minutes;
    }
    if (seconds < 10) {
      secondsValue = `0${seconds}`;
    } else {
      secondsValue = seconds;
    }

    return `${minutesValue} : ${secondsValue}`;
  };

  $(".management_portal .management_portal .portal_box ._play").click(
    function () {
      $(this).css("display", "none");
      $(".management_portal .management_portal .portal_box .covar").css(
        "display",
        "none"
      );
      videoTime.textContent = getTime(media.duration);
      if (media.paused) {
        togglePlayIcon();
        media.play();
      } else {
        togglePlayIcon();
        media.pause();
      }
      $(
        ".management_portal .management_portal .portal_box .custom_buttons"
      ).css("display", "flex");
    }
  );
}
$(".inputs .label").click(function () {
  $(this).parent().find(".active").removeClass("active");
  $(this).addClass("active");
});

$(".type-of-request .inputs .label").click(function () {
  setTimeout(() => {
    switch ($(this).parent().find("input[type=radio]:checked").val()) {
      case "1":
        $(this)
          .parent()
          .parent()
          .find(".sent_button .sent_btn")
          .attr("data-level", "familiarity_webdesign");
        break;
      case "2":
        $(this)
          .parent()
          .parent()
          .find(".sent_button .sent_btn")
          .attr("data-level", "have_website");
        break;
      case "3":
        $(this)
          .parent()
          .parent()
          .find(".sent_button .sent_btn")
          .attr("data-level", "privacy_info");
        break;
    }
  }, 100);
});
$(".request[data-target=have_website] .inputs .label").click(function () {
  setTimeout(() => {
    switch ($(this).parent().find("input[type=radio]:checked").val()) {
      case "1":
        $(this)
          .parent()
          .parent()
          .find(".sent_button .sent_btn")
          .attr("data-level", "privary_and_seo_info");
        break;
      case "0":
        $(this)
          .parent()
          .parent()
          .find(".sent_button .sent_btn")
          .attr("data-level", "familiarity_webdesign");
        break;
    }
  }, 100);
});
$(".request[data-target=familiarity_webdesign] .inputs .label").click(
  function () {
    setTimeout(() => {
      switch ($(this).parent().find("input[type=radio]:checked").val()) {
        case "1":
          $(this)
            .parent()
            .parent()
            .find(".sent_button .sent_btn")
            .attr("data-level", "type_website");
          break;
        case "0":
          $(this)
            .parent()
            .parent()
            .find(".sent_button .sent_btn")
            .attr("data-level", "privacy_info");
          break;
      }
    }, 100);
  }
);
$(".type-of-request .sent_button .sent_btn").click(function () {
  switch ($(this).attr("data-level")) {
    case "familiarity_webdesign":
      $(".type-of-request").css("display", "none");
      $(".request[data-target=familiarity_webdesign]").css("display", "block");
      $(".request[data-target=familiarity_webdesign] .before_btn").attr(
        "data-back-level",
        "type_request"
      );
      break;
    case "have_website":
      $(".type-of-request").css("display", "none");
      $(".request[data-target=have_website]").css("display", "block");
      $(".request[data-target=have_website] .before_btn").attr(
        "data-back-level",
        "type_request"
      );
      break;
    case "privacy_info":
      $(".type-of-request").css("display", "none");
      $(".request[data-target=privacy_info]").css("display", "block");
      $(".request[data-target=privacy_info] .before_btn").attr(
        "data-back-level",
        "type_request"
      );
      break;
  }
});
$(".request[data-target=familiarity_webdesign] .sent_button .sent_btn").click(
  function () {
    switch ($(this).attr("data-level")) {
      case "type_website":
        $(".request[data-target=familiarity_webdesign]").css("display", "none");
        $(".request[data-target=type_website]").css("display", "block");
        $(".request[data-target=type_website] .before_btn").attr(
          "data-back-level",
          "familiarity_webdesign"
        );
        break;
      case "privacy_info":
        $(".request[data-target=familiarity_webdesign]").css("display", "none");
        $(".request[data-target=privacy_info]").css("display", "block");
        $(".request[data-target=privacy_info] .before_btn").attr(
          "data-back-level",
          "familiarity_webdesign"
        );
        break;
    }
  }
);
$(".request[data-target=have_website] .sent_button .sent_btn").click(
  function () {
    $(".request[data-target=have_website]").css("display", "none");
    switch ($(this).attr("data-level")) {
      case "familiarity_webdesign":
        $(".request[data-target=familiarity_webdesign]").css(
          "display",
          "block"
        );
        $(".request[data-target=familiarity_webdesign] .before_btn").attr(
          "data-back-level",
          "have_website"
        );
        break;
      case "privary_and_seo_info":
        $(".request[data-target=privary_and_seo_info]").css("display", "block");
        $(".input_select2").select2();
        $(".request[data-target=privary_and_seo_info] .before_btn").attr(
          "data-back-level",
          "have_website"
        );
        break;
    }
  }
);
$(".request[data-target=type_website] .sent_button .sent_btn").click(
  function () {
    $(".request[data-target=type_website]").css("display", "none");
    $(".request[data-target=privacy_info]").css("display", "block");
    $(".request[data-target=privacy_info] .before_btn").attr(
      "data-back-level",
      "type_website"
    );
  }
);
$(".before_btn").click(function () {
  $(this).parent().parent().css("display", "none");
  switch ($(this).attr("data-back-level")) {
    case "type_request":
      $(".request[data-target=type_request]").css("display", "block");
      break;
    case "have_website":
      $(".request[data-target=have_website]").css("display", "block");
      break;
    case "familiarity_webdesign":
      $(".request[data-target=familiarity_webdesign]").css("display", "block");
      break;
    case "type_website":
      $(".request[data-target=type_website]").css("display", "block");
      break;
  }
});
$(".portfolio_btn .web").click(function (){
  $(".important_seo_words").css("display","none");
  $(".more_portfolios").css("display","block");
  $(".portfolio_btn .seo").removeClass("active");
  $(this).addClass("active");
});
$(".portfolio_btn .seo").click(function (){
  $(".more_portfolios").css("display","none");
  $(".important_seo_words").css("display","block");
  $(".portfolio_btn .web").removeClass("active");
  $(this).addClass("active");
});

if(window.outerWidth <= 992){
  if (document.querySelector('.blog_slider') != null) {
    $(".blog_slider ").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      rtl: true,
      centerMode: false,
      centerPadding: "0px",
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            arrows:false
          },
        },
      ],
    });   
  };
  if (document.querySelector('exclusive_service_slider') != null) {
    $(".exclusive_service_slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      centerMode: false,
      centerPadding: "0px",
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            arrows:false
          },
        },
      ],
    });
  };
  if(document.querySelector('slider_web') != null){
    $(".slider_web").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: false,
      centerPadding: "0px",
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            arrows:false
          },
        },
      ],
    });
  }
};
if (document.querySelector(".portfolio_web") != null){

  $(".portfolio_web").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows:false
        },
      },
    ],
  });
}
if (document.querySelector(".more_portfolio_items") != null){
  $(".more_portfolio_items").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows:false
        },
      },
    ],
  });
}
$(".frequently_asked_question_items .li_dashboard").click(function () {
  $drop = $(this).attr("data-drop");
  $(".frequently_asked_question_items .li_dashboard .caption").removeClass(
    "active"
  );
  $(".frequently_asked_question_items .li_dashboard .description").slideUp(300);
  $(".frequently_asked_question_items .li_dashboard .caption i").css(
    "transform",
    "rotate(0deg)"
  );
  $(".frequently_asked_question_items .li_dashboard").attr("data-drop", "0");
  if ($drop == 0) {
    $(this).find(".description").slideDown(300);
    $(this).find(".caption").addClass("active");
    $(this).find(".caption i").css("transform", "rotate(180deg)");
    $(this).attr("data-drop", "1");
  } else {
    $(this).find(".caption i").css("transform", "rotate(0deg)");
    $(this).attr("data-drop", "0");
  }
});




if (document.querySelector("#starter_sentence") != null) {
  $sentence = $("#starter_sentence").val();
  $string = [];
  for ($i = 0; $i <= $sentence.length - 1; $i++) $string.push($sentence[$i]);

  $counter = 0;
  $string_result = "";
  $start = true;
  $object = $(".text_index");
  $starter = setInterval(() => {
      if ($counter == $string.length) {
          setTimeout(() => {
              if ($start) {
                  $string_result += $string[$counter];
                  $object.text($string_result);
                  $counter++;
                  $counter == $string.length ? ($start = false) : "";
              } else {
                  $string_result = $string_result.substring(
                      0,
                      $string_result.length - 1
                  );
                  $object.text($string_result);
                  $counter--;
                  $counter == 0 ? ($start = true) : "";
              }
          }, 1000);
      } else {
          if ($start) {
              $string_result += $string[$counter];
              $object.text($string_result);
              $counter++;
              $counter == $string.length ? ($start = false) : "";
          } else {
              $string_result = $string_result.substring(0, $string_result.length - 1);
              $object.text($string_result);
              $counter--;
              $counter == 0 ? ($start = true) : "";
          }
      }
  }, 100);
}

$(".modal_btn").click(function(){
  $("#personalModal").modal('show')
})
$("#personalModal .btn-close").click(function(){
  $("#personalModal").modal('hide')
})
