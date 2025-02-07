const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', function (e) {
        // Check if the clicked link is the Resume button
        if (this.getAttribute('href') === '../MyResume/index.html') {
            return; // Do nothing (prevent smooth scroll behavior) for the Resume link
        }

        // Prevent default link behavior for smooth scroll
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Hamburger menu toggle (for mobile view)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// For detecting window resizing (to toggle the mobile nav)
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
    }
});

// Optional: Close the mobile menu when a link is clicked
navLinks.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
        navLinks.classList.remove('active');
    }
});
const backToTopButton = document.getElementById("backToTop");

// Show the button when scrolling down
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Scroll to top when the button is clicked
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});