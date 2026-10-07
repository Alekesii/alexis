const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    menu.textContent = open ? '×' : '☰'
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Ouvrir le menu');
    menu.textContent = '☰'
}));
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target)
        }
    })
}, {
    threshold: .08
});
document.querySelectorAll('main>section:not(.hero)').forEach(el => observer.observe(el));
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', event => {
        event.preventDefault();
        if (!contactForm.reportValidity()) return;
        const data = new FormData(contactForm);
        const name = `${data.get('firstname')} ${data.get('lastname')}`.trim();
        const body = `Bonjour Alexis,\n\n${data.get('message')}\n\n${name}\n${data.get('email')}`;
        window.location.href = `mailto:alexis.jeanney@outlook.fr?subject=${encodeURIComponent('Contact portfolio — '+name)}&body=${encodeURIComponent(body)}`;
        document.getElementById('form-status').textContent = 'Votre e-mail est préparé. Si votre messagerie ne s’ouvre pas, utilisez l’adresse affichée à gauche.'
    })
}
const cvFrame = document.getElementById('cv-frame');
if (cvFrame) {
    const cvPath = window.PORTFOLIO_CV?.path?.trim();
    if (cvPath) {
        try {
            const cvUrl = new URL(cvPath, document.baseURI);
            if (!['http:', 'https:', 'file:'].includes(cvUrl.protocol)) throw new Error('Invalid PDF URL');
            cvFrame.src = cvUrl.href;
            cvFrame.hidden = false;
            document.getElementById('cv-placeholder').hidden = true;
            document.getElementById('cv-disabled').hidden = true;
            for (const id of ['cv-open', 'cv-download']) {
                const link = document.getElementById(id);
                link.href = cvUrl.href;
                link.hidden = false
            }
            document.getElementById('cv-help').hidden = false
        } catch {
            console.warn('Le chemin du CV doit être un chemin local ou une URL HTTP(S).')
        }
    }
}
