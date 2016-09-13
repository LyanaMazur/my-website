
//slow scroll

$(document).ready(function(){
    $(".top_nav").on("click","a",function (event){
    event.preventDefault();
    
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop:top}, 1500);
    });
});

//for photos
var imageCount = 10;
var currentImageIndex;



$('#myImg1').click(function(){
    openImage('#myImg1');
});

$('#myImg2').click(function(){
    openImage('#myImg2');
});

$('#myImg3').click(function(){
    openImage('#myImg3');
});

$('#myImg4').click(function(){
    openImage('#myImg4');
});

$('#myImg5').click(function(){
    openImage('#myImg5');
});

$('#myImg6').click(function(){
    openImage('#myImg6');
});

$('#myImg7').click(function(){
    openImage('#myImg7');
});

$('#myImg8').click(function(){
    openImage('#myImg8');
});

$('#myImg9').click(function(){
    openImage('#myImg9');
});

$('#myImg10').click(function(){
    openImage('#myImg10');
});


$(".close").click(function(){
   $('#myModal').hide();
});

$(".prev").click(function(){
    var prevImageIndex;
    if (currentImageIndex > 1)
    {
        prevImageIndex = currentImageIndex - 1;
    }
    else
    {
        prevImageIndex = imageCount;
    }
    
    openImage("#myImg" + prevImageIndex);
});

$(".next").click(function(){
    var nextImageIndex;
    if (currentImageIndex < imageCount)
    {
        nextImageIndex = currentImageIndex + 1;
    }
    else
    {
        nextImageIndex = 1;
    }
    
    openImage("#myImg" + nextImageIndex);
});


function openImage(id)
{
    currentImageIndex = parseInt(id.replace( /^\D+/g, ''));
    // Get the modal
var modal = document.getElementById('myModal');
// Get the image and insert it inside the modal - use its "alt" text as a caption

var img = $(id);
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = img.attr("src");
    captionText.innerHTML = img.attr("alt");

}

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
//span.onclick = function() {
//    modal.style.display = "none";
//}
// -------------------------------------------------------------
// forms
$(function(){
    $('#btn-send').click(sendForm);
});
    function sendForm(e) {
        
        e.preventDefault();
        $.ajax({
        url: "https://formspree.io/qweenlyana@gmail.com", 
        method: "POST",
        data: {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#msg').val()
        },
        dataType: "json",
        success: function() {
            $('#thanks').html('Thank You for contacting me :)!');
        }
});
    
};
// -------------------------------------------------------------
//for printing h1 on the home page letter by letter
var text = $('.type_writer').text();

var length = text.length;
var timeOut;
var character = 0;


(function typeWriter() { 
    timeOut = setTimeout(function() {
        character++;
        var type = text.substring(0, character);
        $('.type_writer').text(type);
        typeWriter();

        if (character == length) {
            clearTimeout(timeOut);
        }

    }, 70);
}());
// -------------------------------------------------------------
