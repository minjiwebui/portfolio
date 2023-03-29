// sec04 슬라이드
var swiper1 = new Swiper(".basic01", {
    centeredSlides: true,
    effect: "fade",
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    slidesPerView: 1,
});
// 스크롤 버튼
$("header .nav li").each(function() {
    var thisOffset = $("." + $(this).data('class')).offset().top;
    console.log(thisOffset)
    $(this).click(function() {
        $("html, body").animate({
            scrollTop: thisOffset -105
        }, 1000);
        $(this).addClass('on').siblings().removeClass("on");
    });
});