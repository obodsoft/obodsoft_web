document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a nav link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (hamburger && navLinks) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // Scroll Animation
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };

    // Run animation check on load
    animateOnScroll();
    
    // Run animation check on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Header scroll effect
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');
            
            if (!nameInput || !emailInput || !subjectInput || !messageInput) {
                alert('Form elements not found');
                return;
            }
            
            // Type cast to appropriate HTML input elements
            const name = nameInput instanceof HTMLInputElement ? nameInput.value : '';
            const email = emailInput instanceof HTMLInputElement ? emailInput.value : '';
            const subject = subjectInput instanceof HTMLInputElement ? subjectInput.value : '';
            const message = messageInput instanceof HTMLTextAreaElement ? messageInput.value : '';
            
            // Simple form validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // For GitHub Pages, we'll use a mailto link as a fallback
            // In a real implementation, you would use a backend service or email API
            const mailtoLink = `mailto:alex@obodsoft?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;            
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            alert('Thank you for your message! Your email client should open shortly.');
            
            // Reset form
            if (contactForm instanceof HTMLFormElement) {
                contactForm.reset();
            }
        });
    }
});
