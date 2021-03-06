
$(function () {
    var NEWS_POS = $(".contents-news").offset().top - 70;
    var DISCO_POS = $(".contents-disco").offset().top - 70;
    var CONTACT_POS = $(".contents-contact").offset().top - 70;

    $(window).resize(function () {
        NEWS_POS = $(".contents-news").offset().top - 70;
        DISCO_POS = $(".contents-disco").offset().top - 70;
        CONTACT_POS = $(".contents-contact").offset().top - 70;
    });

    // サイドバーのトリガー
    $('.button-collapse').sideNav({
        menuWidth: 320,
        edge: 'right',
        closeOnClick: true,
        draggable: true
    });

    $("#side_news").click(function () {
        $("html,body").animate(
            { scrollTop: NEWS_POS },
            { queue: false }
        );
    });

    $("#side_disco").click(function () {
        $("html,body").animate(
            { scrollTop: DISCO_POS },
            { queue: false }
        );
    });

    $("#side_contact").click(function () {
        $("html,body").animate(
            { scrollTop: CONTACT_POS },
            { queue: false }
        );
    });

    $(".fixed-action-btn").hide();

    $(window).on("load scroll", function () {
        // スクロールするとfixedクラスを追加
        if ($(window).scrollTop() > 350) {
            $("nav").slideDown("fast");
            $(".fixed-action-btn").fadeIn("fast");
        } else {
            //80px以下だとfixedクラスを削除
            $("nav").slideUp("fast");
            $(".fixed-action-btn").fadeOut("fast");
        }
    });
})