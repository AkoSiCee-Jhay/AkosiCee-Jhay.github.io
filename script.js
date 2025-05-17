document.addEventListener('DOMContentLoaded', function() {
    // Typewriter effect
    const typewriterTexts = [
        "Professional Web Developer & Designer",
        "Gamer & Tech Enthusiast",
        "Lifelong Learner",
        "Building Responsive Websites"
    ];
    let twIndex = 0, charIndex = 0, isDeleting = false;
    const twSpan = document.querySelector('.typewriter-text');
    function typeWriter() {
        const current = typewriterTexts[twIndex];
        if (isDeleting) {
            twSpan.textContent = current.substring(0, charIndex--);
            if (charIndex < 0) {
                isDeleting = false;
                twIndex = (twIndex + 1) % typewriterTexts.length;
                setTimeout(typeWriter, 500);
            } else {
                setTimeout(typeWriter, 30);
            }
        } else {
            twSpan.textContent = current.substring(0, charIndex++);
            if (charIndex > current.length) {
                isDeleting = true;
                setTimeout(typeWriter, 1200);
            } else {
                setTimeout(typeWriter, 80);
            }
        }
        // Ensure caret is always visible even if text is empty
        if (twSpan.textContent === "") {
            twSpan.innerHTML = "&nbsp;";
        }
    }
    // Start the typewriter effect immediately
    typeWriter();
    
    // Back to top button
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });
    
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu when a link is clicked
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            }
        });
    });
    
    // Add shadow to navbar on scroll
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) {
            navbar.classList.add('shadow');
        } else {
            navbar.classList.remove('shadow');
        }
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For this example, we'll just show an alert
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Add animation to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.skill-item, .portfolio-item, .contact-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
    
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});