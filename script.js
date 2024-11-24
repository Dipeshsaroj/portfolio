// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing Effect for Hero Section
const typedText = "Web Developer | ECE Student at IIIT Allahabad";
let i = 0;

function typeEffect() {
    if (i < typedText.length) {
        document.querySelector('.tagline').textContent += typedText.charAt(i);
        i++;
        setTimeout(typeEffect, 100); // Adjust typing speed
    }
}
window.onload = typeEffect;

// Scroll Animations for Sections
const sections = document.querySelectorAll('section');
const animateOnScroll = () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
            section.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Initial check for sections that are already in view

// Scroll-to-Top Button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.textContent = '↑';
scrollTopBtn.classList.add('scroll-top-btn');
document.body.appendChild(scrollTopBtn);

// Show/Hide Scroll-to-Top Button
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// Scroll to Top Functionality
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
