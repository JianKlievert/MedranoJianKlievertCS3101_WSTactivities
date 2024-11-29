// Create snowfall effect
function createSnowflakes() {
    const snowfall = document.querySelector('.snowfall');
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
        snowflake.style.opacity = Math.random();
        snowflake.style.fontSize = (Math.random() * 10 + 5) + 'px';
        snowflake.innerHTML = '❄';
        snowfall.appendChild(snowflake);
    }
}

// Smooth scroll for navigation
document.addEventListener('DOMContentLoaded', function() {
    // Initialize snowfall
    createSnowflakes();

    // Add fade-in animation to sections
    const sections = document.querySelectorAll('.flex-child');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });

    // Add hover effects to social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px)';
        });
        link.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add skill tag animation
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });
        tag.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Add dynamic year to footer
document.addEventListener('DOMContentLoaded', function() {
    const footerYear = document.querySelector('footer p');
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = `© ${currentYear} Jian Klievert P. Medrano`;
});
