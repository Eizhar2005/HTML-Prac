// ========================================
// ABOUT PAGE - JAVASCRIPT
// ========================================

// Smooth Scrolling
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

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========================================
// MOBILE MENU TOGGLE
// ========================================
function createMobileMenu() {
    const navbarContainer = document.querySelector('.navbar .container');
    const navMenu = document.querySelector('.nav-menu');
    
    if (document.querySelector('.hamburger')) return;
    
    const hamburger = document.createElement('button');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    
    const hireBtn = document.querySelector('.btn-hire');
    navbarContainer.insertBefore(hamburger, hireBtn);
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
}

createMobileMenu();

// ========================================
// SCROLL ANIMATIONS
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe timeline items
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach(item => {
    observer.observe(item);
});

// Observe testimonial cards
const testimonialCards = document.querySelectorAll('.testimonial-card');
testimonialCards.forEach(card => {
    observer.observe(card);
});

// ========================================
// TESTIMONIALS SLIDER
// ========================================
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const testimonialsTrack = document.querySelector('.testimonials-track');
const testimonials = document.querySelectorAll('.testimonial-card');

let currentIndex = 0;
const cardsPerView = window.innerWidth > 768 ? 2 : 1;
const totalCards = testimonials.length;
const maxIndex = Math.ceil(totalCards / cardsPerView) - 1;

function updateSlider() {
    if (window.innerWidth <= 768) {
        const offset = -currentIndex * 100;
        testimonialsTrack.style.transform = `translateX(${offset}%)`;
    }
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < maxIndex) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = maxIndex;
    }
    updateSlider();
});

// Reset slider on resize
window.addEventListener('resize', () => {
    currentIndex = 0;
    updateSlider();
});

// ========================================
// BUTTON ACTIONS
// ========================================

// Get in touch button
const btnContact = document.querySelector('.btn-contact');
if (btnContact) {
    btnContact.addEventListener('click', () => {
        window.location.href = 'mailto:hello@bentoswalker.com?subject=Project Inquiry';
    });
}

// Let's Talk button
const btnCta = document.querySelector('.btn-cta');
if (btnCta) {
    btnCta.addEventListener('click', () => {
        window.location.href = 'mailto:hello@bentoswalker.com?subject=Let\'s Work Together';
    });
}

// Hire Me button
const btnHire = document.querySelector('.btn-hire');
if (btnHire) {
    btnHire.addEventListener('click', () => {
        window.location.href = 'mailto:hello@bentoswalker.com?subject=Hire Inquiry';
    });
}

// ========================================
// TIMELINE ANIMATION ON SCROLL
// ========================================
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.2 });

timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = 'all 0.5s ease';
    timelineObserver.observe(item);
});

// ========================================
// LOADING ANIMATION
// ========================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ========================================
// CONSOLE MESSAGE
// ========================================
console.log('%c👋 Hello from About Page!', 'font-size: 20px; font-weight: bold; color: #D4A574;');
console.log('%cLike what you see? Let\'s connect!', 'font-size: 14px; color: #a89584;');
console.log('%c📧 hello@bentoswalker.com', 'font-size: 14px; color: #D4A574;');