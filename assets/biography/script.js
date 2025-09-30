// Smooth collapsible sections
const sections = document.querySelectorAll('article h2[tabindex="0"]');
sections.forEach(h2 => {
    const content = h2.nextElementSibling;
    const section = h2.parentElement;
    h2.addEventListener('click', toggleSection);
    h2.addEventListener('keypress', e => {
        if (e.key === 'Enter' || e.key === ' ') { toggleSection.call(h2, e); }
    });

    function toggleSection() {
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
    }

    // Set initial active section height
    if (section.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.opacity = 1;
    }
});
