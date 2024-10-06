// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navbarMenu = document.getElementById('navbar-menu');

mobileMenuBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

// Close Mobile Menu on Link Click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
    });
});

// Initialize AOS (Animate On Scroll Library)
AOS.init({
    duration: 800,
    once: true
});
