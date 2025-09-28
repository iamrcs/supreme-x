const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open'); // Slide menu
    hamburger.classList.toggle('open'); // Morph to X
});

// Optional: Close menu when clicking outside (mobile)
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
    }
});