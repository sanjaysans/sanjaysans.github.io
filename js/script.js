// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Highlight active section based on scroll position
    const sections = document.querySelectorAll('section');
    
    function highlightCurrentSection() {
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const id = section.getAttribute('id');
                // Could add active class to navigation items if you add navigation
            }
        });
    }
    
    window.addEventListener('scroll', highlightCurrentSection);
    
    // Add animation to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.experience-item, .achievement-item, .skill-category');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initial styling for animation
    const animatedElements = document.querySelectorAll('.experience-item, .achievement-item, .skill-category');
    animatedElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animation on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});
