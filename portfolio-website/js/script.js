// ========================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// ========================================
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
// ACTIVE NAVIGATION LINK ON SCROLL
// ========================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ========================================
// MOBILE MENU TOGGLE
// ========================================
function createMobileMenu() {
    const navbar = document.querySelector('.navbar .container');
    const navMenu = document.querySelector('.nav-menu');
    
    // Check if hamburger already exists
    if (document.querySelector('.hamburger')) return;
    
    // Create hamburger button
    const hamburger = document.createElement('button');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    
    // Insert hamburger before hire button
    const hireBtn = document.querySelector('.btn-hire');
    navbar.insertBefore(hamburger, hireBtn);
    
    // Toggle menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
    
    // Close menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
}

// Initialize mobile menu
createMobileMenu();

// ========================================
// PROJECT FILTERING SYSTEM
// ========================================
const filterButtons = document.querySelectorAll('.tab-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get filter value
        const filterValue = button.textContent.trim().toLowerCase();
        
        // Filter projects
        projectCards.forEach(card => {
            const category = card.querySelector('.project-category').textContent.trim().toLowerCase();
            
            if (filterValue === 'all' || category === filterValue) {
                card.style.display = 'block';
                // Add fade-in animation
                card.style.animation = 'fadeIn 0.5s ease-in-out';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

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

// Observe project cards
projectCards.forEach(card => {
    observer.observe(card);
});

// Observe other sections
const animatedElements = document.querySelectorAll('.profile-card, .intro-card, .companies-section, .section-title, .section-description');
animatedElements.forEach(el => {
    observer.observe(el);
});

// ========================================
// NAVBAR BACKGROUND ON SCROLL
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
// DOWNLOAD CV BUTTON
// ========================================
const downloadBtn = document.querySelector('.btn-download');

downloadBtn.addEventListener('click', () => {
    // Replace 'cv.pdf' with your actual CV file path
    const cvUrl = 'assets/documents/bentos-walker-cv.pdf';
    
    // Create temporary link and trigger download
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Bentos_Walker_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Optional: Show success message
    showNotification('CV download started!');
});

// ========================================
// LET'S TALK BUTTON (CTA)
// ========================================
const ctaBtn = document.querySelector('.btn-cta');

ctaBtn.addEventListener('click', () => {
    // Option 1: Open email client
    window.location.href = 'mailto:hello@bentoswalker.com?subject=Project Inquiry';
    
    // Option 2: Scroll to contact section (if you add one)
    // const contactSection = document.querySelector('#contact');
    // contactSection.scrollIntoView({ behavior: 'smooth' });
    
    // Option 3: Open contact modal (if you add one)
    // openContactModal();
});

// ========================================
// HIRE ME BUTTON
// ========================================
const hireBtn = document.querySelector('.btn-hire');

hireBtn.addEventListener('click', () => {
    // Option 1: Open email
    window.location.href = 'mailto:hello@bentoswalker.com?subject=Hire Inquiry';
    
    // Option 2: Navigate to contact page
    // window.location.href = 'contact.html';
});

// ========================================
// NOTIFICATION SYSTEM
// ========================================
function showNotification(message, duration = 3000) {
    // Check if notification already exists
    let notification = document.querySelector('.notification');
    
    if (!notification) {
        notification = document.createElement('div');
        notification.classList.add('notification');
        document.body.appendChild(notification);
    }
    
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, duration);
}

// ========================================
// SOCIAL MEDIA LINKS
// ========================================
const socialLinks = document.querySelectorAll('.social-icon');

socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Prevent default if href is just '#'
        if (link.getAttribute('href') === '#') {
            e.preventDefault();
            
            // Get the social platform from img alt
            const platform = link.querySelector('img').alt.toLowerCase();
            
            // Add your actual social media URLs here
            const socialUrls = {
                'facebook': 'https://facebook.com/bentoswalker',
                'twitter': 'https://twitter.com/bentoswalker',
                'linkedin': 'https://linkedin.com/in/bentoswalker',
                'github': 'https://github.com/bentoswalker'
            };
            
            if (socialUrls[platform]) {
                window.open(socialUrls[platform], '_blank');
            }
        }
    });
});

// ========================================
// TYPING EFFECT FOR INTRO TITLE (OPTIONAL)
// ========================================
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect
// window.addEventListener('load', () => {
//     const introTitle = document.querySelector('.intro-title');
//     const originalText = introTitle.textContent;
//     typeWriter(introTitle, originalText, 30);
// });

// ========================================
// PROJECT CARD MODAL (OPTIONAL)
// ========================================
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        // Get project details
        const projectTitle = card.querySelector('.project-title').textContent;
        const projectCategory = card.querySelector('.project-category').textContent;
        const projectImage = card.querySelector('.project-image').src;
        
        // Open modal with project details
        openProjectModal(projectTitle, projectCategory, projectImage);
    });
});

function openProjectModal(title, category, image) {
    // Create modal if it doesn't exist
    let modal = document.querySelector('.project-modal');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.classList.add('project-modal');
        modal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <img src="" alt="" class="modal-image">
                <div class="modal-info">
                    <span class="modal-category"></span>
                    <h2 class="modal-title"></h2>
                    <p class="modal-description">
                        This is a sample project description. Replace this with actual project details,
                        technologies used, and outcomes achieved.
                    </p>
                    <button class="btn-view-project">View Full Project</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Close modal handlers
        const closeBtn = modal.querySelector('.modal-close');
        const overlay = modal.querySelector('.modal-overlay');
        
        closeBtn.addEventListener('click', () => closeProjectModal());
        overlay.addEventListener('click', () => closeProjectModal());
    }
    
    // Update modal content
    modal.querySelector('.modal-image').src = image;
    modal.querySelector('.modal-title').textContent = title;
    modal.querySelector('.modal-category').textContent = category;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.querySelector('.project-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

// ========================================
// LOADING ANIMATION
// ========================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ========================================
// CONSOLE MESSAGE (EASTER EGG)
// ========================================
console.log('%c👋 Hello, Developer!', 'font-size: 20px; font-weight: bold; color: #ff6347;');
console.log('%cLooking for something? Let\'s connect!', 'font-size: 14px; color: #999;');
console.log('%c📧 hello@bentoswalker.com', 'font-size: 14px; color: #ff6347;');