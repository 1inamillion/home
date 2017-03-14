$(function () {
    // サイドバーのトリガー
    $('.button-collapse').sideNav({
        menuWidth: 300,
        edge: 'right',
        closeOnClick: true,
        draggable: true
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