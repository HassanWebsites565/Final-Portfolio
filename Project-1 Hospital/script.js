// Header Scroll 

// let nav = document.querySelector(".navbar");
// window.onscroll = function() {
//     if(document.documentElement.scrollTop > 100) {
//         nav.classList.add("header-scrolled")
//     }
// }

// Nav-Hide 
let navbar = document.querySelectorAll(".nav-link")
let navColap = document.querySelector(".navbar-collapse.collapse")
navbar.forEach(function(a) {
    a.addEventListener("click", function(){
        navColap.classList.remove("show")
    })
})