/*$(function() {

	$(".top_nav a").mPageScroll2id({
		offset: 100
	});
});*/

$(document).ready(function(){
    $(".top_nav").on("click","a",function (event){
    event.preventDefault();
    
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop:top}, 1500);
    });
});