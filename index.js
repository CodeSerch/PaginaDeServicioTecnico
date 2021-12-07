let fadeTime = 1000;

$('.titulo').hide();
$( document ).ready(function() {
    console.log( "ready!" );
    $('.titulo').slideDown(fadeTime);
});

$("#servicios").click(() => {
    function topFunction() {
        document.documentElement.scrollTop = 460;
      }
      topFunction();

} )