let fadeTime = 1000;

/*$('.titulo').hide();
$( document ).ready(function() {
    console.log( "ready!" );
    $('.titulo').slideDown(fadeTime);
});

$("#servicios").click(() => {
    function topFunction() {
        document.documentElement.scrollTop = 460;
      }
      topFunction();

} )*/

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 