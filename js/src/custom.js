window.onscroll = function () { myFunction() };

var sticky = document.getElementById("sticky");
var header = document.getElementById("header");
var sidebarTags = document.getElementById("sidebarTags");
function myFunction() {
    if (window.pageYOffset > sticky.offsetHeight + header.clientHeight + sidebarTags.clientHeight) {
        sticky.classList.add("sticky");
    } else {
        sticky.classList.remove("sticky");
    }
}