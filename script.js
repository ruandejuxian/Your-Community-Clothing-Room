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
            const inputs = donationForm.querySelectorAll('input, select, textarea');
            let isValid = true;
            inputs.forEach(input => {
                if(!input.value) isValid = false;
            });
            if(isValid) {
                alert('Thank you for your donation! We will contact you soon.');
                donationForm.reset();
            }
        });
    }

    // 4. Header Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.backgroundColor = '#ffffff';
        }
    });

    // --- NEW FEATURES START HERE ---

    // 5. Category Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.item-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            items.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.classList.remove('hide');
                    item.classList.add('show');
                } else {
                    item.classList.remove('show');
                    item.classList.add('hide');
                }
            });
        });
    });

    // 6. Lightbox (Modal Image Viewer)
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.querySelector('.close-lightbox');
    const galleryImages = document.querySelectorAll('.item-card img');

    galleryImages.forEach(img => {
        img.addEventListener('click', (e) => {
            // Prevent event bubbling if needed, but clicking image inside card is fine
            lightbox.style.display = "block";
            lightboxImg.src = e.target.src;
        });
    });

    if (closeLightbox) {
        closeLightbox.addEventListener('click', () => {
            lightbox.style.display = "none";
        });
    }

    // Close lightbox when clicking outside the image
    window.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    // 7. Back To Top Button
    const backToTopBtn = document.getElementById("backToTop");

    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});