// sec04 슬라이드
var swiper1 = new Swiper(".basic01", {
    spaceBetween: 5,
    centeredSlides: true,
    // effect: "fade",
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
        } else if (scrolltop >= 2627) {
            $("li[data-class=sec05]").addClass('on').siblings().removeClass('on');
        }
    });
});
// emailjs를 활용한 contact폼
document.querySelector('#contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // submit이벤트 막기
    const fromName = document.querySelector('#from_name').value; // 전송자 이름 추출

    emailjs.init("A9IWnO1ke9JXI0Fk0"); // API keys
    emailjs.sendForm('minjiwebui', 'minjiwebuiTemplate', this)
        .then(function() {
            alert(`${fromName}님, 메일 전송 완료 되었습니다 :)`)
        }, function(error) {
            alert(`${fromName}님, 메일 전송이 실패했습니다 :(`)
            console.log('전송실패', error);
        });
});
