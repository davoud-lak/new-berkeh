$(document).ready(function () {
  $(".login_section .login_card .card_header .btn_card").on(
    "click",
    function (e) {
      e.preventDefault();
      let btnCard = $(".login_section .login_card .card_header .btn_card");
      if ($(this).hasClass("signUp")) {
        $(".login_section .login_card .card_header .btn_card").removeClass(
          "active"
        );
        $(this).addClass("active");
        $("#signInForm").fadeOut(1);
        $("#signUpForm").fadeIn(300);
      } else {
        $(".login_section .login_card .card_header .btn_card").removeClass(
          "active"
        );
        $(this).addClass("active");
        $("#signUpForm").fadeOut(1);
        $("#signInForm").fadeIn(300);
      }
    }
  );
//   show and hide pass in login form
  $(".login_section .login_card .card_body .form_item .pass").on("click",
    function () {
      showPassword($(this).parent().find("input"));
      changeAttr(this, "data-show");
      chnageIconPassword(this, "data-show");
    }
  );
  function showPassword($object) {
    $($object).attr("type", $($object).attr("type") == "password" ? "text" : "password");
  };
  function changeAttr($object, $attr) {
    $($object).attr($attr, $($object).attr($attr) == 1 ? 0 : 1);
  }
  function chnageIconPassword($object, $attr) {
    $show = $($object).attr($attr);

    $showPassword = "public/images/icons/eye.svg";
    $hidePassword = "public/images/icons/eye-slash.svg";

    $($object).find("img").attr("src", $show == 1 ? $hidePassword : $showPassword);
  }
});
// checkBox in setting page
$(".check_change_notification_method .check_box .label_check").on('click' , function (e) {
  e.preventDefault();
  $(this).toggleClass("active_check");
});
