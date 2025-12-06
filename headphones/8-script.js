// Select elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav ul');

// Toggle menu on click
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('show');
});
