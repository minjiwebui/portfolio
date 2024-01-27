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
// nav 색상 고정
// $(document).ready( function(){
//     $("nav .gnb2 li:nth-of-type(2)").css("color","#4d6846")
// });
// sec01 슬라이드
var swiper1 = new Swiper(".basic01", {
    spaceBetween: 30,
    centeredSlides: true,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 5000,
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
// sec03 이미지 탭
$(".sec03 .ybox div").click(function(){
    var tabindex = $(this).index();
    $(this).addClass('on').siblings().removeClass('on');
    $(".sec03 .xbox .pdbox").eq(tabindex).addClass('on').siblings().removeClass('on');
});
$(".sec03 .ybox div").eq(2).trigger("click")
// sec04 SNS 아이콘 클릭 시 색상 변경 
$(".snsbox .fa-heart").click(function() {
    $(this).toggleClass("on")
    return false
});
// sec05 태블릿, 모바일 게시판 탭
$(".newsL h3 span span").click(function () {
    var tabindex = $(this).index();
    $(this).addClass('on').siblings().removeClass('on');
    $(".newsL ul").eq(tabindex).addClass('on').siblings().removeClass('on');
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
// 스크롤 버튼
$(".scroll span").each(function() {
    var thisOffset = $("." + $(this).data('class')).offset().top;
    console.log(thisOffset)
    $(this).click(function() {
        $("html, body").animate({
            scrollTop: thisOffset -80
        }, 1000);
        $(this).addClass('on').siblings().removeClass("on");
    });
});
// 섹션이동 시 리모콘(스크롤 버튼)에 하이라이트
$(document).scroll(function() {
    var scrolltop = $(window).scrollTop();
    $("main > *").each(function() {
        if (scrolltop >= $(this).offset().top) {
            $("span[data-class=" + $(this).attr('class').split(' ')[0] + "]").addClass('on').siblings().removeClass('on');
        } else if (scrolltop >= 1675) {
            $("span[data-class=sec05]").addClass('on').siblings().removeClass('on');
        }
    });
});
// AOS 연결
AOS.init();





























