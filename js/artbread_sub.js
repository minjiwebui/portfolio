// top 서브메뉴(커뮤니티)
$(".submenu").hover(function () {
    $(".subgnb").toggleClass('on');
});
// top 검색팝업창
$(".search > i").click(function() {
    $(".popup").addClass("on");
});
$(".popup .fa-times").click(function() {
    $(".popup").removeClass("on");
});
// sec01 이미지 탭
$(".sec01 .leftbox div").click(function(){
    var tabindex = $(this).index();
    $(this).addClass('on').siblings().removeClass('on');
    $(".sec01 .rightbox div").eq(tabindex).addClass('on').siblings().removeClass('on');
});
$(".sec01 .leftbox div").eq(0).trigger("click")
$(".sec01 .leftbox div").hover(function(){
    var tabindex = $(this).index();
    $(this).addClass('on').siblings().removeClass('on');
    $(".sec01 .rightbox div").eq(tabindex).addClass('on').siblings().removeClass('on');
});
// header 모바일 검색팝업창
$(".header2 .inner > .fa-search").click(function() {
    $(".header2 .popup").addClass("on");
});
$(".header2 .popup .fa-times").click(function() {
    $(".header2 .popup").removeClass("on");
});
// header 모바일 서브메뉴
$(".header2 .inner > .fa-bars").click(function () {
    $(".gnbmb").toggleClass("on");
    $(this).toggleClass("fa-times");
});