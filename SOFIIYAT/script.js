const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

const modeBtn = document.getElementById('mode-btn');
const body = document.body;

modeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        modeBtn.textContent = 'Light Mode';
    } else {
        modeBtn.textContent = 'Dark Mode';
    }
});

// Contact Form Submisson (Dummy)
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent!');
});