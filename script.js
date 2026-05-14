// Typewriter Effect
const roles = ["Data Analyst", "Problem Solver", "Tech Enthusiast"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;
const typewriterElement = document.getElementById("typewriter");

function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50; // Deleting speed
    } else {
        typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 150; // Typing speed
    }

    if (!isDeleting && charIndex === currentRole.length) {
        // Finished typing the word
        isDeleting = true;
        typeSpeed = 2000; // Wait before deleting
    } else if (isDeleting && charIndex === 0) {
        // Finished deleting the word
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length; // Move to next word
        typeSpeed = 500; // Wait before typing next word
    }

    setTimeout(type, typeSpeed);
}

// Start typewriter effect after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    if(typewriterElement) {
        setTimeout(type, 1000);
    }
});

// Scroll Reveal Animation using IntersectionObserver
function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150; // trigger point

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Initial check
window.addEventListener("scroll", reveal);
reveal(); // To check if elements are visible on page load

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
