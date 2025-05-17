const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const title = document.querySelector('h1');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    title.classList.toggle('active');
});