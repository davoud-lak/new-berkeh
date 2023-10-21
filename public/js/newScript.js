$(document).ready(function () {
    $(".topBarSection .fullScreen .fullIcon").click(function (e) { 
        e.preventDefault();
        $(".previewContent ._content_").hide();
        $("#fullScreen").show();
        $(".previewSection .previewContent").addClass("pt_full_screen");
        $(this).hide();
        $(this).parent().find("span").hide();
        $(this).parent().find(".closeBtn").show();
    });
    $(".topBarSection .fullScreen .closeBtn").click(function (e) { 
        e.preventDefault();
        $("#fullScreen").hide();
        $("#laptopContent").show();
        $(this).parent().find(".fullIcon").show();
        $(this).parent().find("span").show();
        $(this).hide();
        $(".previewSection .previewContent").removeClass("pt_full_screen");
    });
    $(".topBarSection .deviceBtns .laptop").click(function (e) { 
        e.preventDefault();
        $(".previewContent ._content_").hide();
        $("#laptopContent").show();
        $(".previewSection .previewContent").removeClass("pt_full_screen");
        $(".topBarSection .fullScreen .closeBtn").hide()
        $(".topBarSection .fullScreen .fullIcon").show()
        $(".topBarSection .fullScreen span").show()
    });
    $(".topBarSection .deviceBtns .tablet").click(function (e) { 
        e.preventDefault();
        $(".previewContent ._content_").hide();
        $("#tabletContent").show();
        $(".previewSection .previewContent").removeClass("pt_full_screen");
        $(".topBarSection .fullScreen .closeBtn").hide()
        $(".topBarSection .fullScreen .fullIcon").show()
        $(".topBarSection .fullScreen span").show()
    });
    $(".topBarSection .deviceBtns .mobile").click(function (e) { 
        e.preventDefault();
        $(".previewContent ._content_").hide();
        $("#mobileContent").show();
        $(".previewSection .previewContent").removeClass("pt_full_screen");
        $(".topBarSection .fullScreen .closeBtn").hide()
        $(".topBarSection .fullScreen .fullIcon").show()
        $(".topBarSection .fullScreen span").show()
    });

    // handle show & hide themes
    $('.themesSection .hdrSec .ulTitle .liTitle').on('click', function(e){
        e.preventDefault();
        let $target = $(this).attr('data-target');
        if ( $target == 'all') {
            $('.themesSection .all_theme').show(200);
            $('.themesSection .hdrSec .ulTitle .liTitle').removeClass('active');
            $(this).addClass('active');
        } else if ($target == "shop") {
            $('.themesSection .all_theme').hide(200);
            $('.themesSection .shopTheme').show(200);
            $('.themesSection .hdrSec .ulTitle .liTitle').removeClass('active');
            $(this).addClass('active');
        } else if ($target == "company") {
            $('.themesSection .all_theme').hide(200);
            $('.themesSection .companyTheme').show(200);
            $('.themesSection .hdrSec .ulTitle .liTitle').removeClass('active');
            $(this).addClass('active');
        }
        
        else {
            $('.themesSection .all_theme').show(200);
            $(this).removeClass('active');
        }
    })

});