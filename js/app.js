const hamburger = document.querySelector('.hamburger');
const navr = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-list a');

hamburger.addEventListener('click', () => navr.classList.toggle('active'));

navLinks.forEach(link => {
    link.addEventListener('click', () => navr.classList.remove('active'));
});