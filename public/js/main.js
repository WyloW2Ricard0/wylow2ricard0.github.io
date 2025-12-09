// Smooth scroll enhancement
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add subtle animation to project cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe project cards
    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });

    // Shield hover effect
    const shield = document.querySelector('.shield');
    if (shield) {
        shield.addEventListener('mouseenter', () => {
            shield.style.transform = 'scale(1.05) rotate(2deg)';
            shield.style.transition = 'transform 0.3s ease';
        });
        
        shield.addEventListener('mouseleave', () => {
            shield.style.transform = 'scale(1) rotate(0deg)';
        });
    }

    // Console easter egg
    console.log('%cSTRUCTURARE AD PROFICERE', 
        'font-size: 20px; font-weight: bold; color: #f4b942; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);');
    console.log('%cBienvenue sur mon site ! 🚀', 
        'font-size: 14px; color: #d946a6;');
    console.log('%cCode source: https://github.com/WyloW2Ricard0/wylow2ricard0.github.io', 
        'font-size: 12px; color: #b3b3b3;');
});

// Add year to footer dynamically (if needed)
const updateYear = () => {
    const yearElement = document.querySelector('footer p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2025', currentYear);
    }
};

updateYear();
