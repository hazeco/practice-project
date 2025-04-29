document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.querySelector('.overlay');
    const menuToggle = document.getElementById('menu-toggle');

    overlay.addEventListener('click', function() {
        menuToggle.checked = false;
    });

    const scrollDown = document.querySelector('.arrow-down');
    
    scrollDown.addEventListener('click', function() {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    });
});

const loader = document.querySelector(".loader");
const preloader = document.querySelector("#preloader");
window.addEventListener("load", function(){
    preloader.style.display = "none"
    loader.style.display = "none"
})