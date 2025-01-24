// script.js
const header = document.getElementById('header');
const main = document.getElementById('main');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if(window.scrollY <= 80) {
        header.style.top = '0';
        header.style.position = 'relative';
        main.style.marginTop = '0';
    } else{
        header.style.top = '-80px';
        header.style.position = 'fixed';
        main.style.marginTop = '140px';
    }
});
