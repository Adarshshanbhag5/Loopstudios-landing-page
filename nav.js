const burger = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-nav');

burger.addEventListener('click',()=>{
    mobileNav.classList.toggle('toggle');
    burger.classList.toggle('click');
});