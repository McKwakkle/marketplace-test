window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    const body = document.body;

    const overlay = document.createElement('div');
    overlay.className = 'mobile-menu-overlay';
    body.appendChild(overlay);

    function toggleMobileMenu() {
        mobileMenuToggle.classList.toggle('active');
        nav.classList.toggle('mobile-menu-open');
        overlay.classList.toggle('active');
        body.style.overflow = nav.classList.contains('mobile-menu-open') ? 'hidden' : '';
    }
    
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    overlay.addEventListener('click', toggleMobileMenu);

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('mobile-menu-open')) {
                toggleMobileMenu();
            }
        });
    });
});