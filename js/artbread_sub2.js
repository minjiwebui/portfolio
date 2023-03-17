// top 서브메뉴(커뮤니티)/(공통요소)
$(".submenu").hover(function () {
    $(".subgnb").toggleClass('on');
});
// top 검색팝업창(공통요소)
$(".search > i").click(function () {
    $(".popup").addClass("on");
});
$(".popup .fa-times").click(function () {
    $(".popup").removeClass("on");
});
// // nav 색상 고정
$(document).ready( function(){
    $("nav .gnb2 li:nth-of-type(2)").css("color","#4d6846")
});
// sec01 - json 데이터 파일 연결
$.ajax({
    type: "GET",
    url: "/portfolio/js/artbread_sub2_data.json",
    dataType: "json",
    success: function (data) {
        var elem = "";
        $.each(data, function () {
            elem += `<a class="minibox ${this.class}" href="${this.href}">`;
            elem += `<div class="thumbnail"></div>`;
            elem += `<div class="txtbox">`;
            elem += `<div class="rowbox">`;
            elem += `<span class="title">${this.title},</span>`;
            elem += `<span class="unit">${this.unit}개</span>`;
            elem += `</div>`;
            elem += `<p class="contents">${this.contents}</p>`;
            elem += `<del class="cost">`+ numberWithCommas(`${this.cost}`)+`원</del>`;
            elem += `<div class="rowbox">`;
            elem += `<span class="disrate">${this.disrate}%</span>`;
            elem += `<span class="disprice">`+ numberWithCommas(`${this.disprice}`)+`원</span>`;
            elem += `</div>`;
            elem += `<div class="rowbox">`;
            elem += `<div class="starbox">`;
            //  if문을 통해서 json에서 들어오는 grade값의 크기를 비교하는 식 넣기
            if(`${this.grade}` == 5){
                elem += `<i class="fa-sharp fa-solid fa-star"></i>`;
                elem += `<i class="fa-sharp fa-solid fa-star"></i>`;
                elem += `<i class="fa-sharp fa-solid fa-star"></i>`;
                elem += `<i class="fa-sharp fa-solid fa-star"></i>`;
                elem += `<i class="fa-sharp fa-solid fa-star"></i>`;
            }else if(`${this.grade}` >= 4 && `${this.grade}` <= 4.999){
                elem += `<i class="fa-sharp fa-solid fa-star"></i>`;
                elem += `<i class="fa-sharp fa-solid fa-star"></i>`;
                elem += `<i class="fa-sharp fa-solid fa-star"></i>`;
                elem += `<i class="fa-sharp fa-solid fa-star"></i>`;
                elem += `<i class="fa-sharp fa-solid fa-star-half-stroke"></i>`;
            }
            elem += `</div>`;
            elem += `<span class="grade">${this.grade}</span>`;
            elem += `<span class="count">(${this.count})</span>`;
            elem += `</div>`;
            elem += `</div>`;
            elem += `</a>`;
        });
        $(".tabbox").append(elem);
    },
    error: function (xhr) {
        console.log(xhr.status + "/" + xhr.errorText);
    }
});

// sec01 카테고리 품목 리스트 탭 + 탭 별로 리스트 sorting
$(".sec01 .btbox span").click(function () {
    $(".minibox").removeClass('on')
    var tabid = "." + $(this).attr("id");
    $(this).addClass('on').siblings().removeClass('on');
    $(tabid).addClass('on')
});
$(".sec01 .btbox span").eq(0).trigger("click");

// 3자리마다 ,콤마찍는 함수
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


// header 모바일 검색팝업창(공통요소)
$(".header2 .inner > .fa-search").click(function () {
    $(".header2 .popup").addClass("on");
});
$(".header2 .popup .fa-times").click(function () {
    $(".header2 .popup").removeClass("on");
});
// header 모바일 서브메뉴(공통요소)
$(".header2 .inner > .fa-bars").click(function () {
    $(".gnbmb").toggleClass("on");
    $(this).toggleClass("fa-times");
});