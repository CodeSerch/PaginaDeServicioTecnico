let fadeTime = 1000;

$('h1').hide();
$('.itemText').hide();
$('.texto').hide();
$( document ).ready(function() {
    console.log( "ready!" );
    $('h1').show(fadeTime);
    $('.itemText').show(fadeTime);
    $('.texto').show(fadeTime);
});

$("#servicios").click(() => {
    function topFunction() {
        document.documentElement.scrollTop = 460;
      }
      topFunction();

} )