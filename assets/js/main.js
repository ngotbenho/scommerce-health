document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href) {
            if ((href === 'index.html' || href === '../index.html') && 
                (currentPath.endsWith('index.html') || currentPath.endsWith('/'))) {
                link.classList.add('active');
            } else if (currentPath.includes(href)) {
                link.classList.add('active');
            }
        }
    });

    console.log('%c✅ Scommerce Health Portal loaded successfully!', 'color: #ff620a; font-weight: bold');
});