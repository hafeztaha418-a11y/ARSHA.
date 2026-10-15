window.addEventListener("scroll" , function(){
    let navbar = document.getElementById("NAVE");
    if(window.scrollY >= 100 ){
        navbar.classList.add("navbar-scrolled");

    }else{
        navbar.classList.remove("navbar-scrolled");
    }
});
const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navbarlist');

function toggleMenu() {
  navLinks.classList.toggle('show');
}


menuIcon.addEventListener('click', toggleMenu);













  













