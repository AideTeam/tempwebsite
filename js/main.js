// Dodaj na początku pliku main.js
function createParticles() {
    const container = document.querySelector('.particles-container');
    const particlesCount = 50;

    for (let i = 0; i < particlesCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'hero-particle';
        
        particle.style.setProperty('--x', `${Math.random() * 100}%`);
        particle.style.setProperty('--y', `${Math.random() * 100}%`);
        particle.style.setProperty('--delay', `${Math.random() * 4}s`);
        particle.style.setProperty('--size', `${Math.random() * 3 + 1}px`);
        particle.style.setProperty('--duration', `${Math.random() * 2 + 3}s`);

        container.appendChild(particle);
    }
}

// Skrypt do obsługi menu mobilnego
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });

    // Obsługa FAQ
    const faqCards = document.querySelectorAll('.faq-card');
    faqCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('active');
        });
    });

    // Płynne przewijanie
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const offset = 80; // wysokość nawbara
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Zamknij menu mobilne po kliknięciu
            if (window.innerWidth <= 768) {
                document.querySelector('.navbar-menu').classList.remove('active');
                document.querySelector('.menu-toggle').classList.remove('active');
            }
        });
    });

    // Aktywna sekcja podczas scrollowania
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(`.navbar-menu a[href*=${sectionId}]`)?.classList.add('active');
            } else {
                document.querySelector(`.navbar-menu a[href*=${sectionId}]`)?.classList.remove('active');
            }
        });
    });

    // Dodaj wywołanie createParticles
    createParticles();
}); 