window.onscroll = function() {Nav()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function Nav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
