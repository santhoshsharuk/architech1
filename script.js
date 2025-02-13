// Select DOM Items
const menuBtn = document.querySelector('.hamburger-menu');
const container = document.querySelector('.container');
const menu = document.querySelector('.sidebar');
const menuNav = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu-item');
const scrollBtn = document.querySelector('.scroll-btn');

// Set Initial State Of Menu
let showMenu = false;

// Add Event Listeners
menuBtn.addEventListener('click', toggleMenu);
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleLoad);

// Handle page load
function handleLoad() {
    // Initial delay of 4 seconds
    setTimeout(() => {
        document.querySelector("body").classList.add("display");
    }, 4000);

    // Set up other animations after load
    setupAnimations();
}

// Handle the menu toggle
function toggleMenu() {
    container.classList.toggle('change');
    showMenu = !showMenu;
}

// Handle scroll events
function handleScroll() {
    // Show/hide scroll button
    if (window.scrollY > 300) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }

    // Add animation to sections as they come into view
    handleScrollAnimations();
}

// Scroll to top functionality
scrollBtn.addEventListener('click', () => {
    document.querySelector('html').style.scrollBehavior = 'smooth';
    window.scrollTo(0, 0);
    
    setTimeout(() => {
        document.querySelector('html').style.scrollBehavior = 'unset';
    }, 1000);
});

// Set up animations for various elements
function setupAnimations() {
    // Team cards animation
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'all 0.3s ease';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Pricing cards animation
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.transition = 'all 0.3s ease';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Menu items hover effect
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transition = 'all 0.3s ease';
        });
    });
}

// Handle scroll animations for sections
function handleScrollAnimations() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('active');
        }
    });
}

// Form handling
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form fields
        const nameField = form.querySelector('input[type="text"]');
        const emailField = form.querySelector('input[type="email"]');
        const messageField = form.querySelector('textarea');
        
        // Basic validation
        if (nameField.value && emailField.value && messageField.value) {
            // Show success message
            const submitBtn = form.querySelector('.submit-btn');
            submitBtn.style.backgroundColor = '#4CAF50';
            submitBtn.value = 'Sent Successfully!';
            
            // Reset form after delay
            setTimeout(() => {
                form.reset();
                submitBtn.style.backgroundColor = '';
                submitBtn.value = 'Submit';
            }, 3000);
        }
    });

    // Add floating label effect
    const inputGroups = document.querySelectorAll('.input-group');
    inputGroups.forEach(group => {
        const input = group.querySelector('.field');
        const label = group.querySelector('.input-label, .message');

        input.addEventListener('focus', () => {
            label.classList.add('active');
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                label.classList.remove('active');
            }
        });
    });
}

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Close menu if open
        if (showMenu) {
            container.classList.remove('change');
            showMenu = false;
        }

        // Scroll to target
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add this CSS in your stylesheet
/*
.show {
    opacity: 1 !important;
    visibility: visible !important;
}

section.active {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.5s ease;
}

section {
    opacity: 0;
    transform: translateY(20px);
}

.input-label.active, .message.active {
    transform: translateY(-20px);
    font-size: 0.8rem;
    color: #FFD700;
}
*/