document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. Smooth Scroll for Navigation
    window.scrollToElement = function(id) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // 3. Donation Form Handling
    const donationForm = document.getElementById('donationForm');
    
    if (donationForm) {
        donationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get values (Example of how to get data)
            const inputs = donationForm.querySelectorAll('input, select, textarea');
            let isValid = true;

            // Simple validation visualization
            inputs.forEach(input => {
                if(!input.value) isValid = false;
            });

            if(isValid) {
                // Success Message
                alert('Thank you for your donation! We will contact you soon to arrange the pickup.');
                donationForm.reset();
            }
        });
    }

    // 4. Header Background Change on Scroll
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.backgroundColor = '#ffffff';
            // Optional: remove shadow when at top if desired
             header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)'; 
        }
    });

    // 5. Add simple animation to items when they scroll into view (Optional nice-to-have)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    const items = document.querySelectorAll('.item-card, .feature-card');
    items.forEach(item => {
        // Set initial state for animation
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
        item.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observer.observe(item);
    });

});