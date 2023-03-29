// sec04 슬라이드
var swiper1 = new Swiper(".basic01", {
    centeredSlides: true,
    effect: "fade",
    loop: true,
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
// 섹션이동 시 리모콘(스크롤 버튼)에 하이라이트
$(document).scroll(function() {
    var scrolltop = $(window).scrollTop();
    $("section").each(function() {
        if (scrolltop >= $(this).offset().top) {
            $("li[data-class=" + $(this).attr('class').split(' ')[0] + "]").addClass('on').siblings().removeClass('on');
        } else if (scrolltop >= 2300) {
            $("li[data-class=sec05]").addClass('on').siblings().removeClass('on');
        }
    });
});