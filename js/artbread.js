// sec01 슬라이드
var swiper1 = new Swiper(".basic01", {
    spaceBetween: 30,
    centeredSlides: true,
    effect: "fade",
    loop:true,
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
$(".newsL h3 span span").click(function(){
    var tabindex = $(this).index();
    $(this).addClass('on').siblings().removeClass('on');
    $(".newsL ul").eq(tabindex).addClass('on').siblings().removeClass('on');
});
// top 서브메뉴(커뮤니티)
$(".submenu").hover(function(){
    $(".subgnb").toggleClass('on')
});
// header 모바일 서브메뉴
$(".header2 .inner > i").click(function() {
    $(".gnbmb").toggleClass("on")
    $(this).toggleClass("fa-times")
})
































