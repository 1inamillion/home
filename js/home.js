function setHeight() {
    // ブラウザのの高さを取得 更にヘッダー分だけ縮小
    let hsize = $(window).height();
    $(".contents-top").css("height", hsize / 2 + "px");
    $(".contents-top").css("margin-top", hsize / 2 - 50 + "px");
}

$(function () {
    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
    });

    setHeight();    
    // ウィンドウ変更時も同様の処理
    $(window).resize(function () {
        setHeight();
    });

    $(window).on("load scroll", function () {
        //ヘッダーの高さ分(80px)スクロールするとfixedクラスを追加
        if ($(window).scrollTop() > 100) {
            $("nav").slideDown("fast");
            $(".fixed-action-btn").fadeIn("fast");
        } else {
            //80px以下だとfixedクラスを削除
            $("nav").slideUp("fast");
            $(".fixed-action-btn").fadeOut("fast");
        }
    });
})