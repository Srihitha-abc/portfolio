// ==========================================
// PORTFOLIO WEBSITE - JAVASCRIPT
// ==========================================

// ==========================================
// 1. TYPING ANIMATION
// ==========================================

const typingTexts = [
    'Programmer',
    'Problem Solver',
    'Data Science Enthusiast',
    'Lifelong Learner',
    'Developer'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const pauseSpeed = 2000;
const deleteSpeed = 50;

function type() {
    const typingElement = document.querySelector('.typing');
    const currentText = typingTexts[textIndex];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent = currentText.substring(0, charIndex);

    let speed = isDeleting ? deleteSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentText.length) {
        speed = pauseSpeed;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
    }

    setTimeout(type, speed);
}

// Start typing animation when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', type);
} else {
    type();
}

// ==========================================
// 2. SMOOTH SCROLLING FOR NAVBAR LINKS
// ==========================================

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            // Close mobile menu if open
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.remove('active');

            // Scroll to section
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// 3. MOBILE MENU TOGGLE
// ==========================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        hamburger.querySelectorAll('span').forEach((span, index) => {
            if (navMenu.classList.contains('active')) {
                if (index === 0) {
                    span.style.transform = 'rotate(45deg) translateY(12px)';
                } else if (index === 1) {
                    span.style.opacity = '0';
                } else {
                    span.style.transform = 'rotate(-45deg) translateY(-12px)';
                }
            } else {
                span.style.transform = 'none';
                span.style.opacity = '1';
            }
        });
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.querySelectorAll('span').forEach(span => {
                span.style.transform = 'none';
                span.style.opacity = '1';
            });
        });
    });
}

// ==========================================
// 4. SCROLL REVEAL ANIMATIONS
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe fade-in elements
document.querySelectorAll('.fade-in').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// ==========================================
// 5. CONTACT FORM HANDLING
// ==========================================

const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validation
        if (!name) {
            showFormMessage('Please enter your name.', 'error');
            return;
        }

        if (!email || !isValidEmail(email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }

        if (!message || message.length < 10) {
            showFormMessage('Please enter a message with at least 10 characters.', 'error');
            return;
        }

        // Simulate form submission
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        // Simulate network delay
        setTimeout(() => {
            showFormMessage('Thank you for your message! I will get back to you soon.', 'success');
            contactForm.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 1500);
    });
}

// Helper function to validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Helper function to show form message
function showFormMessage(message, type) {
    formNote.textContent = message;
    formNote.className = `form-note ${type}`;
    
    // Clear message after 5 seconds
    setTimeout(() => {
        formNote.textContent = '';
        formNote.className = 'form-note';
    }, 5000);
}

// ==========================================
// 6. ACTIVE NAVBAR LINK ON SCROLL
// ==========================================

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        if (href.substring(1) === current) {
            link.style.color = 'var(--primary-color)';
        } else {
            link.style.color = 'var(--text-secondary)';
        }
    });
});

// ==========================================
// 7. SKILL TAG ANIMATIONS
// ==========================================

const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach((tag, index) => {
    tag.style.opacity = '0';
    tag.style.animation = `fadeInUp 0.6s ease forwards`;
    tag.style.animationDelay = `${index * 0.1}s`;
});

// ==========================================
// 8. BUTTON RIPPLE EFFECT
// ==========================================

function addRippleEffect(button) {
    const ripples = button.querySelectorAll('.ripple');
    ripples.forEach(ripple => ripple.remove());

    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    button.appendChild(ripple);

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
}

// ==========================================
// 9. NAVBAR BACKGROUND ON SCROLL
// ==========================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
});

// ==========================================
// 13. DOWNLOAD RESUME
// ==========================================

const resumeButton = document.querySelector('a[href="assets/Resume.pdf"]');

if (resumeButton) {
    resumeButton.addEventListener('click', (e) => {
        // You can add analytics here if needed
        console.log('Resume downloaded');
    });
}

// ==========================================
// 14. SOCIAL ICON ANIMATIONS
// ==========================================

const socialIcons = document.querySelectorAll('.social-icon');

socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'translateY(-5px) rotate(360deg)';
        icon.style.transition = 'all 0.6s ease';
    });

    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'translateY(0) rotate(0deg)';
    });
});

// ==========================================
// 15. PAGE LOAD ANIMATIONS
// ==========================================

window.addEventListener('load', () => {
    // Add entrance animation to hero section
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 1s ease forwards';
    }

    // Stagger animations for different elements
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        const cards = section.querySelectorAll('[class*="card"], [class*="item"]');
        cards.forEach((card, cardIndex) => {
            card.style.animation = `fadeInUp 0.8s ease forwards`;
            card.style.animationDelay = `${cardIndex * 0.1}s`;
        });
    });
});

// ==========================================
// 16. INTERSECTION OBSERVER FOR SECTIONS
// ==========================================

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            sectionObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    sectionObserver.observe(section);
});

// ==========================================
// 17. ACCESSIBILITY IMPROVEMENTS
// ==========================================

// Add keyboard navigation for nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            link.click();
        }
    });
});

// ==========================================
// 17. ENHANCED ANIMATIONS FOR SKILL CARDS
// ==========================================

const skillCards = document.querySelectorAll('.skill-card.skill-animate');

// Intersection Observer for skill cards
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }, index * 100);
            skillObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
});

// Observe each skill card with enhanced animations
skillCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px) scale(0.8) rotateX(-20deg)';
    skillObserver.observe(card);
    
    // Enhanced hover effects with color morphing
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        this.style.filter = 'brightness(1.2) saturate(1.3)';
        
        // Create floating particles on hover
        createParticles(this, 5);
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.filter = 'brightness(1) saturate(1)';
    });
    
    // Enhanced click animation with 3D effect
    card.addEventListener('click', function(e) {
        this.style.transform = 'translateY(-15px) scale(1.1) rotateY(15deg) rotateX(-10deg)';
        this.style.transition = 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        
        // Create burst effect
        createBurstEffect(e, this);
        
        setTimeout(() => {
            this.style.transform = '';
        }, 400);
    });
    
    // Add parallax effect on mouse move
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// Create floating particles effect
function createParticles(element, count) {
    const rect = element.getBoundingClientRect();
    const colors = ['#8b5cf6', '#ec4899', '#06b6d4', '#10b981', '#f59e0b'];
    
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.left = (rect.left + rect.width / 2) + 'px';
        particle.style.top = (rect.top + rect.height / 2) + 'px';
        particle.style.boxShadow = `0 0 10px ${colors[Math.floor(Math.random() * colors.length)]}`;
        
        document.body.appendChild(particle);
        
        const angle = (Math.PI * 2 * i) / count;
        const distance = 50 + Math.random() * 30;
        const duration = 1 + Math.random() * 0.5;
        
        particle.animate([
            {
                transform: `translate(0, 0) scale(1)`,
                opacity: 1
            },
            {
                transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: duration * 1000,
            easing: 'ease-out'
        }).onfinish = () => particle.remove();
    }
}

// Create burst effect on click
function createBurstEffect(e, element) {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const colors = ['#8b5cf6', '#ec4899', '#06b6d4', '#10b981'];
    
    for (let i = 0; i < 12; i++) {
        const burst = document.createElement('div');
        burst.style.position = 'absolute';
        burst.style.width = '6px';
        burst.style.height = '6px';
        burst.style.background = colors[i % colors.length];
        burst.style.borderRadius = '50%';
        burst.style.left = x + 'px';
        burst.style.top = y + 'px';
        burst.style.pointerEvents = 'none';
        burst.style.zIndex = '1000';
        burst.style.boxShadow = `0 0 15px ${colors[i % colors.length]}`;
        
        element.appendChild(burst);
        
        const angle = (Math.PI * 2 * i) / 12;
        const distance = 60;
        
        burst.animate([
            {
                transform: `translate(0, 0) scale(1)`,
                opacity: 1
            },
            {
                transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 600,
            easing: 'ease-out'
        }).onfinish = () => burst.remove();
    }
}

// Add ripple effect on skill card click
skillCards.forEach(card => {
    card.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('skill-ripple');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// ==========================================
// 18. ENHANCED ANIMATIONS FOR EDUCATION CARDS
// ==========================================

const educationCards = document.querySelectorAll('.education-card');

educationCards.forEach((card, index) => {
    card.style.animation = `slideInRight 0.8s ease forwards`;
    card.style.animationDelay = `${index * 0.15}s`;
    
    card.addEventListener('mouseenter', () => {
        card.style.animation = 'glow 0.8s ease infinite';
    });

    card.addEventListener('mouseleave', () => {
        card.style.animation = 'none';
    });
});

// ==========================================
// 19. ENHANCED ANIMATIONS FOR PROJECT CARDS
// ==========================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card, index) => {
    card.style.animation = `fadeInUp 0.8s ease forwards`;
    card.style.animationDelay = `${index * 0.2}s`;

    card.addEventListener('mouseenter', () => {
        card.querySelectorAll('.tech-tag').forEach((tag, tagIndex) => {
            tag.style.animation = `wiggle 0.4s ease forwards`;
            tag.style.animationDelay = `${tagIndex * 0.05}s`;
        });
    });
});

// ==========================================
// 20. ENHANCED ANIMATIONS FOR ACHIEVEMENT ITEMS
// ==========================================

const achievementItems = document.querySelectorAll('.achievement-item');

achievementItems.forEach((item, index) => {
    item.style.animation = `fadeInUp 0.8s ease forwards`;
    item.style.animationDelay = `${index * 0.1}s`;
    
    const icon = item.querySelector('.achievement-icon');
    
    item.addEventListener('mouseenter', () => {
        icon.style.animation = 'spin 0.6s ease';
        icon.style.transform = 'scale(1.2) rotate(360deg)';
        item.style.transform = 'translateY(-8px) scale(1.02)';
        item.style.boxShadow = '0 15px 40px rgba(139, 92, 246, 0.4)';
    });

    item.addEventListener('mouseleave', () => {
        icon.style.animation = 'none';
        icon.style.transform = 'scale(1) rotate(0deg)';
        item.style.transform = '';
        item.style.boxShadow = '';
    });
});

// ==========================================
// 23. ADD FLOATING PARTICLES BACKGROUND
// ==========================================

function createFloatingParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.style.position = 'fixed';
    particleContainer.style.top = '0';
    particleContainer.style.left = '0';
    particleContainer.style.width = '100%';
    particleContainer.style.height = '100%';
    particleContainer.style.pointerEvents = 'none';
    particleContainer.style.zIndex = '0';
    particleContainer.id = 'particle-container';
    document.body.appendChild(particleContainer);
    
    const colors = ['#8b5cf6', '#ec4899', '#06b6d4', '#10b981', '#f59e0b', '#a855f7'];
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        particle.style.boxShadow = `0 0 ${Math.random() * 10 + 5}px ${colors[Math.floor(Math.random() * colors.length)]}`;
        
        particleContainer.appendChild(particle);
        
        // Animate particles
        const duration = Math.random() * 10 + 10;
        const xMovement = (Math.random() - 0.5) * 200;
        const yMovement = (Math.random() - 0.5) * 200;
        
        particle.animate([
            {
                transform: 'translate(0, 0)',
                opacity: particle.style.opacity
            },
            {
                transform: `translate(${xMovement}px, ${yMovement}px)`,
                opacity: Math.random() * 0.5 + 0.2
            }
        ], {
            duration: duration * 1000,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out'
        });
    }
}

// Initialize particles on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createFloatingParticles);
} else {
    createFloatingParticles();
}

// ==========================================
// 21. COUNTER ANIMATION FOR STATS
// ==========================================

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 20);
}
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==========================================
// 19. RESPONSIVE DESIGN ADJUSTMENTS
// ==========================================

// Adjust hero height on smaller screens
function adjustHeroHeight() {
    const hero = document.querySelector('.hero');
    if (window.innerWidth <= 768) {
        hero.style.minHeight = '80vh';
    } else {
        hero.style.minHeight = '100vh';
    }
}

window.addEventListener('resize', adjustHeroHeight);
adjustHeroHeight();

// ==========================================
// 22. CSS ANIMATIONS DEFINITION
// ==========================================

const styles = `
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes bounce-in {
    0% {
        opacity: 0;
        transform: scale(0.3);
    }
    50% {
        opacity: 1;
    }
    70% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
}

@keyframes glow {
    0%, 100% {
        box-shadow: 0 0 10px rgba(99, 102, 241, 0.2);
    }
    50% {
        box-shadow: 0 0 30px rgba(99, 102, 241, 0.6);
    }
}

@keyframes wiggle {
    0%, 100% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(-2deg);
    }
    75% {
        transform: rotate(2deg);
    }
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);
console.log('%cWelcome to Srihitha\'s Portfolio!', 'font-size: 20px; color: #6366f1; font-weight: bold;');
console.log('%cMade with HTML, CSS & JavaScript ❤️', 'font-size: 14px; color: #a78bfa;');
console.log('%c✨ Features: Animations, Responsive Design, Dark Theme, Colorful UI ✨', 'font-size: 12px; color: #06b6d4;');
