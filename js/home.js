function setHeight() {
    // ブラウザのの高さを取得 更にヘッダー分だけ縮小
    let hsize = $(window).height();
    $(".top-image").css("height", hsize + "px");
    $(".top-image-transparent").css("height", hsize + "px");
    $(".top-image-title").css("padding-top", hsize / 2.3 + "px");
}

$(function () {
    // サイドバーのトリガー
    $('.button-collapse').sideNav({
        menuWidth: 300,
        edge: 'right',
        closeOnClick: true,
        draggable: true
    });

    //トップ画像の高さ調整
    setHeight();
    // ウィンドウ変更時も同様の処理
    $(window).resize(function () {
        setHeight();
    });

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