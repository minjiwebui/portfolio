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
$(document).ready( function(){
    $("nav .gnb2 li:nth-of-type(2)").css("color","#4d6846")
});
// sec01 탭 버튼 색상 고정
$(document).ready( function(){
    $(".sec01 .btbox span:first-of-type").css("background","#000000").css("color","#ffffff")
});
// json 데이터 파일 연결
$.ajax({
    type: "GET",
    url: "artbread_sub2_data.json",
    dataType: "json",
    success: function(data) {
        var elem = "";
        $.each(data, function(index, obj) {
            elem += `<div>`;
                elem += `<div>${obj.thumbnail}</div>`;
            elem += `</div>`;
        });
        $(".tabbox .minibox").append(elem);
    },
    error: function(xhr) {
        console.log(xhr.status + "/" + xhr.errorText);
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