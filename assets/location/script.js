// Smooth collapsible sections with accessibility
document.querySelectorAll('article h2[tabindex="0"]').forEach(h2 => {
    const content = h2.nextElementSibling;
    const section = h2.parentElement;

    // Initialize ARIA
    h2.setAttribute('aria-expanded', section.classList.contains('active'));

    // Function to toggle section
    const toggleSection = () => {
        const expanded = h2.getAttribute('aria-expanded') === 'true';
        h2.setAttribute('aria-expanded', !expanded);
        h2.classList.toggle('active');
        section.classList.toggle('active');

        if (!expanded) {
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.opacity = 1;
        } else {
            content.style.maxHeight = 0;
            content.style.opacity = 0;
        }
    };

    // Click event
    h2.addEventListener('click', toggleSection);

    // Keyboard accessibility (Enter / Space)
    h2.addEventListener('keypress', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleSection();
        }
    });

    // Set initial height for active section
    if (section.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.opacity = 1;
    } else {
        content.style.maxHeight = 0;
        content.style.opacity = 0;
    }
});
