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
// sec01 슬라이드
var swiper1 = new Swiper(".basic01", {
    spaceBetween: 30,
    centeredSlides: true,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    slidesPerView: 1,
});
// sec05 게시판 탭
$(".newsL h3 span span").click(function () {
    var tabindex = $(this).index();
    $(this).addClass('on').siblings().removeClass('on');
    $(".newsL ul").eq(tabindex).addClass('on').siblings().removeClass('on');
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
// sec04 모바일 리뷰 슬라이드
var swiper2 = new Swiper(".reviewbox", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: ".reviewbox .swiper-button-next",
        prevEl: ".reviewbox .swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 10
        },
    },
});






























