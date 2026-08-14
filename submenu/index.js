$(document).ready(function(){
    $(".submenu").click(function(){
        $(".menu-mobile").slideToggle();
    })
})

$(".menu-desktop > ul > li").hover(
    function () {
        $(this).find(".hide").stop(true, true).slideDown(100);
    },
    function () {
        $(this).find(".hide").stop(true, true).slideUp(100);
    }
);

$(window).on("resize", function () {

    if ($(window).width() > 760) {
        $(".hide").removeAttr("style");
    }

});