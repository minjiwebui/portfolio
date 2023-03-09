// top 서브메뉴(커뮤니티)/(공통요소)
$(".submenu").hover(function () {
    $(".subgnb").toggleClass('on');
});
// top 검색팝업창(공통요소)
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
// sec04 영양정보 탭
$(".sec04 .btbox span").click(function () {
    var tabindex = $(this).index();
    $(this).addClass('on').siblings().removeClass('on');
    $(".sec04 .tablebox > div").eq(tabindex).addClass('on').siblings().removeClass('on');
});
// sec01 태블릿, 모바일 슬라이드
var swiper = new Swiper(".basic02", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
    loop: true
  });
// 태블릿, 모바일 하단 고정 버튼 스크롤
$(document).scroll(function() {
    var scrolltop = $(window).scrollTop();
    if(scrolltop > 465 && scrolltop < 1413){
        $(".fixebt").addClass("off")
    } else{
        $(".fixebt").removeClass("off")
    }
});
// header 모바일 검색팝업창(공통요소)
$(".header2 .inner > .fa-search").click(function() {
    $(".header2 .popup").addClass("on");
});
$(".header2 .popup .fa-times").click(function() {
    $(".header2 .popup").removeClass("on");
});
// header 모바일 서브메뉴(공통요소)
$(".header2 .inner > .fa-bars").click(function () {
    $(".gnbmb").toggleClass("on");
    $(this).toggleClass("fa-times");
});