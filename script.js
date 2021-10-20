const menuToggle = document.querySelector('nav .menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener("click", function(){
    menuToggle.classList.toggle('spanTransform');
    nav.classList.toggle('slide');
})